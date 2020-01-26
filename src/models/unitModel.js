import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const UnitSchema = new Schema({
    name: String,
    level: Number,
    experience: Number,
    health: Number,
    attackPower: Number
  });