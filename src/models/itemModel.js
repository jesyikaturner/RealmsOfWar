import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const ItemSchema = new Schema({
    name: String,
    description: String,
    buff: Number,
    buyPrice: Number,
    sellPrice: Number
});