const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const tripRoutes = require("./routes/tripRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const itineraryRoutes = require("./routes/itineraryRoutes");
const noteRoutes = require("./routes/noteRoutes");
const budgetRoutes = require("./routes/budgetRoutes");
const userRoutes = require("./routes/userRoutes");
const destinationRoutes = require("./routes/destinationRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/itineraries", itineraryRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/budgets", budgetRoutes);
app.use("/api/destinations", destinationRoutes);

app.get("/", (req, res) => {
    res.send("Backend Running");
});

// Simple test API to verify Frontend-Backend connection without MongoDB
app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "Hello from the Backend! Frontend and Backend are successfully communicating! 🚀",
        timestamp: new Date().toISOString()
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});