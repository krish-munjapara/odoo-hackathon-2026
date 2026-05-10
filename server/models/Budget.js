const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    tripId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true },
    title: String,
    amount: Number,
    category: { type: String, enum: ['Food', 'Transport', 'Accommodation', 'Activity', 'Other'] },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Budget", budgetSchema);
