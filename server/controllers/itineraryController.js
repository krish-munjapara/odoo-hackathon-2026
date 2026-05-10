const ItineraryActivity = require("../models/ItineraryActivity");
const Trip = require("../models/Trip");

// Mock AI generation of an itinerary when a trip is created
const generateItinerary = async (req, res) => {
    try {
        const { tripId } = req.params;
        const trip = await Trip.findById(tripId);
        
        if (!trip) return res.status(404).json({ message: "Trip not found" });

        // Generate 3 mock activities based on the destination
        const activities = [
            {
                tripId, dayNumber: 1, title: `Check-in at Hotel`, time: "14:00", 
                location: trip.destination, description: "Rest and settle in after arrival.", estimatedCost: 150, type: 'accommodation'
            },
            {
                tripId, dayNumber: 1, title: `Explore Downtown ${trip.destination}`, time: "16:00", 
                location: trip.destination, description: "Walk around the city center and take photos.", estimatedCost: 0, type: 'activity'
            },
            {
                tripId, dayNumber: 1, title: `Local Dinner`, time: "19:00", 
                location: trip.destination, description: "Try out local cuisine at a highly rated restaurant.", estimatedCost: 45, type: 'food'
            }
        ];

        await ItineraryActivity.insertMany(activities);

        res.status(201).json({ message: "Itinerary Generated", activities });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getItinerary = async (req, res) => {
    try {
        const { tripId } = req.params;
        const itinerary = await ItineraryActivity.find({ tripId }).sort('dayNumber time');
        res.status(200).json(itinerary);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { generateItinerary, getItinerary };
