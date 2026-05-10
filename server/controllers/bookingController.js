const Booking = require("../models/Booking");

const createBooking = async (req, res) => {
    try {
        const { pickUpDate, pickUpTime, vehicleType, pricePerDay, firstName, lastName, email, phone, totalPrice } = req.body;

        const booking = await Booking.create({
            userId: req.user._id,
            pickUpDate,
            pickUpTime,
            vehicleType,
            pricePerDay,
            firstName,
            lastName,
            email,
            phone,
            totalPrice
        });

        res.status(201).json({
            message: "Booking Created Successfully",
            booking,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.user._id });
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    createBooking,
    getBookings,
};
