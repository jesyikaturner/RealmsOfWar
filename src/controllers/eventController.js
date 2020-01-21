import mongoose from 'mongoose';
import { EventSchema } from '../models/eventModel';
import { UserSchema } from '../models/userModel';
import { QuestSchema } from '../models/questModel';

const Event = mongoose.model('Event', EventSchema);
const Quest = mongoose.model('Quest', QuestSchema);
const User = mongoose.model('User', UserSchema);

export const addNewEvent = (res, req) => {
    let currentEvent = req.body;
    console.log(currentEvent);
}

export const getEvent = (res, req) => {
    let currentEvent = req.body;
    console.log(currentEvent);
}

// admin only route to see timers going on
export const getEvents = (res, req) => {
    let currentEvent = req.body;
    console.log(currentEvent);
}

export const deleteEvent = (res, req) => {
    //TODO
}

export const performQuest = (res, req) => {
    console.log(res.body); 
}