import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  firebase_token: {
    type: String,
    required: true
  },
  type: String,
  username: String,
  level: Number,
  experience: Number,
  actionPoints: Number,
  totalPlayerKills: Number,
  guild: String,
  gold: Number,
  unit: [{
    name: String,
    level: Number,
    experience: Number,
    attributes: [{
      health: Number,
      attack: Number,
      defence: Number,
      speed: Number
    }]
  }],
  inventory: [{
    name: String,
    buff: Number
  }],
  profileMessages: [{
      from: String,
      date: {
        type: Date,
        default: Date.now
      },
      text: String
  }]
});
