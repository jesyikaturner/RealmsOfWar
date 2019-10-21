import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const QuestSchema = new Schema({
  id: Number,
  name: String,
  description: String,
  requiredMelee: Number,
  requiredRange: Number,
  goldReward: Number,
  experienceReward: Number,
  requiredAction: Number
});
