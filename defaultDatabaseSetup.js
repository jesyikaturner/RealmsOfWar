'use strict';

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import setupDatabase from './src/controllers/setupController';

const app = express();
const PORT = process.env.PORT || 8080;

require('dotenv').config();
let uriString = process.env.MONGOLAB_BLACK_URI || process.env.MONGO;
mongoose.Promise = global.Promise;
mongoose.connect(uriString, {useNewUrlParser:true, useUnifiedTopology: true},(err, res) => {
  if(err){
    console.log('ERROR connecting to: ' + uriString + '. ' + err);
  }
  else{
    console.log ('Succeeded connected to: ' + uriString);
  }
});

// bodyparser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

setupDatabase();

export default app;
module.exports = { app };