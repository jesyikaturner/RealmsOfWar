import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const EventSchema = new Schema({
    user: String,
    eventType: String,
    date: {
        type: Date,
        default: Date.now
      }
});