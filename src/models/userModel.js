import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  firebase_token: {
    type: String,
    required: true
  },
  avatar_url: String,
  username: String,
  gold: Number,
  playerKills: Number,
  meleeUnits: Number,
  rangedUnits: Number,
  action_points: Number,
  level: Number,
  experience: Number,
  messages: [{
      from: String,
      date: {
        type: Date,
        default: Date.now
      },
      text: String
  }]
});
