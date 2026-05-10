const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    tripName: String,
    destination: String,
    startDate: Date,
    endDate: Date,
    travelStyle: String,
    companions: String,
    budgetLevel: String,
});

module.exports = mongoose.model("Trip", tripSchema);