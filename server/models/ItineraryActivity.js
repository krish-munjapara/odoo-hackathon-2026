const mongoose = require("mongoose");

const itineraryActivitySchema = new mongoose.Schema({
    tripId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true },
    dayNumber: Number,
    title: String,
    time: String,
    location: String,
    description: String,
    estimatedCost: Number,
    type: { type: String, enum: ['accommodation', 'activity', 'food', 'transport'] }
});

module.exports = mongoose.model("ItineraryActivity", itineraryActivitySchema);
