const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    pickUpDate: Date,
    pickUpTime: String,
    vehicleType: String,
    pricePerDay: Number,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    totalPrice: Number,
    status: { type: String, default: 'Pending' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Booking", bookingSchema);
