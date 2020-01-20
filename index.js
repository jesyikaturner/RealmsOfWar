'use strict';

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import questRoutes from './src/routes/questRoutes';
import userRoutes from './src/routes/userRoutes';
import cors from 'cors';

import path from 'path';

const app = express();
const PORT = process.env.PORT || 8080;
const {format} = require('util');

// mongoose connection
var uriString = process.env.MONGOLAB_BLACK_URI || 'mongodb://localhost/mongodb';
mongoose.connect(uriString, (err, res) => {
  if(err)
  {
    console.log('ERROR connecting to: ' + uristring + '. ' + err);
  }
  else
  {
    console.log ('Succeeded connected to: ' + uristring);
  }
});


// bodyparser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors({ origin: true }));

// database routes
questRoutes(app);
userRoutes(app);







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
