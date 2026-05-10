const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String, default: "" },
    description: { type: String, required: true },
    shortDesc: { type: String, required: true },
    image: { type: String, required: true },
    gallery: [String],
    rating: { type: Number, default: 4.5 },
    reviewCount: { type: Number, default: 0 },
    budgetFrom: { type: Number, required: true },
    budgetTo: { type: Number, required: true },
    currency: { type: String, default: "INR" },
    categories: [{ type: String }],
    bestTimeToVisit: { type: String },
    tripDuration: { type: String },
    activities: [String],
    hotels: [{
        name: String,
        pricePerNight: Number,
        rating: Number
    }],
    highlights: [String],
    isInternational: { type: Boolean, default: false },
    isTrending: { type: Boolean, default: false },
    latitude: Number,
    longitude: Number
}, { timestamps: true });

destinationSchema.index({ name: "text", description: "text", categories: "text" });

module.exports = mongoose.model("Destination", destinationSchema);
