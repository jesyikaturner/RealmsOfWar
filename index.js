'use strict';

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import questRoutes from './src/routes/questRoutes';
import userRoutes from './src/routes/userRoutes';
import fireBaseRoute from './src/routes/fireBaseRoute';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 8080;
const {format} = require('util');

// mongoose connection

require('dotenv').config();
var uriString = process.env.MONGOLAB_BLACK_URI || process.env.MONGO;
//mongoose.Promise = global.Promise;
// mongoose.connect(uriString, {useNewUrlParser:true, useUnifiedTopology: true},(err, res) => {
//   if(err){
//     console.log('ERROR connecting to: ' + uriString + '. ' + err);
//   }
//   else{
//     console.log ('Succeeded connected to: ' + uriString);
//   }
// });

// bodyparser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// database routes
questRoutes(app);
userRoutes(app);
fireBaseRoute(app);

// Use the built-in express middleware for serving static files from './public'
//app.use(express.static('client'));

//app.get('/', (req, res) => {
//  res.sendFile('client/index.html');
//  //res.sendFile(path.join(__dirname + '/client/index.html'));
//});

app.listen(process.env.PORT || 8080, () =>
  console.log(`your server is running on ${PORT}`)
);

module.exports = { app };
