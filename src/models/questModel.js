import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const QuestSchema = new Schema({
  id: Number,
  name: String,
  description: String,
  required: [{
    playerLevel: Number,
    playerActionPoints: Number,
    totalAttack: Number,
    totalUnits: Number
  }],
  reward: [{
    gold: Number,
    totalUnitExperience: Number
  }]
});
