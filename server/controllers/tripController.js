const Trip = require("../models/Trip");

const createTrip = async (req, res) => {
    try {
        const { tripName, destination, startDate, endDate, travelStyle, companions, budgetLevel } = req.body;

        const trip = await Trip.create({
            userId: req.user._id,
            tripName,
            destination,
            startDate,
            endDate,
            travelStyle,
            companions,
            budgetLevel,
        });

        res.status(201).json({
            message: "Trip Created",
            trip,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const getTrips = async (req, res) => {
    try {
        const trips = await Trip.find({ userId: req.user._id });

        res.status(200).json(trips);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const deleteTrip = async (req, res) => {
    try {
        await Trip.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Trip Deleted",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    createTrip,
    getTrips,
    deleteTrip,
};