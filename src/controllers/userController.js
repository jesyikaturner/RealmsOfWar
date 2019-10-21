import mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';
const User = mongoose.model('User', UserSchema);

export const addNewUser = (req, res) => {
  let newUser = new User(req.body);
  newUser.save((err, user) => {
    if(err){
      res.send(err);
    }
    res.json(user);
  });
};

export const getUsers = (req, res) => {
  User.find({}, (err, user) => {
    if(err)
    {
      res.send(err);
    }
    res.json(user);
  });
};

export const getUserByToken = (req, res) => {
  User.findOne({ firebase_token: req.params.token}, (err, user) => {
    if(err)
    {
      res.send(err);
    }
    res.json(user);
  });
};

export const updateUser = (req, res) => {
  let data = req.body;
  let currentUser = User.findOne({firebase_token: req.params.token});
  if(data.messages != null)
  {
    // if the data sent is a message then just update the message
    User.findOneAndUpdate({ firebase_token: req.params.token}, {$push: {messages: data.messages}}, {new: true}, (err, user) => {
      if(err)
      {
        res.send(err);
      }
      res.json(user);
    })
  }  else {
    // otherwise update the value!
    User.findOneAndUpdate({ firebase_token: req.params.token}, req.body, {new: true}, (err, user) => {
      if(err)
      {
        res.send(err);
      }
      res.json(user);
    })
  }

};

export const deleteUser = (req, res) => {
  User.remove({ firebase_token: req.params.token}, (err, user) => {
    if(err)
    {
      res.send(err);
    }
    res.json({ message: 'Successfully deleted contact'});
  });
};
