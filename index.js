'use strict';

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import questRoutes from './src/routes/questRoutes';
import userRoutes from './src/routes/userRoutes';
import Multer from 'multer';
import cors from 'cors';

import path from 'path';

const app = express();
const PORT = process.env.PORT || 8080;
const {format} = require('util');

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://jesyika:MDBo3gg!t2@realmsofwar-gwtdi.gcp.mongodb.net/realmsofwar?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors({ origin: true }));

// database routes
questRoutes(app);
userRoutes(app);

const {Storage} = require('@google-cloud/storage');
const storage = new Storage();

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // no bigger than 5mb
  },
});
const bucket = storage.bucket("cc_assignment2");

app.post('/upload', multer.single('avatar'), (req, res, next) => {
  if(!req.file) {
    res.status(400).send('No file uploaded');
    return;
  }
  console.log(req.body);
  //res.redirect('index.html');
  const blob = bucket.file(req.file.originalname);
  const blobStream = blob.createWriteStream({
    resumable:false,
  });

  blobStream.on('error', err => {
    next(err);
  });

  blobStream.on('finish', () => {
    const publicUrl = format(`https://storage.googleapis.com/${bucket.name}/${blob.name}`);
    res.status(200).send(publicUrl);
    res.sendFile(path.join(__dirname + '/client/index.html'));
  });
  blobStream.end(req.file.buffer);
});





//app.use(express.static(__dirname + '/client'));

// Use the built-in express middleware for serving static files from './public'
app.use(express.static('client'));

app.get('/', (req, res) => {
  //res.sendFile('client/index.html');
  res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.listen(PORT, () =>
  console.log(`your server is running on ${PORT}`)
);

module.exports = { app };
