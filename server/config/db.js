const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ MongoDB Connected Successfully");
    } catch (error) {
        console.error("❌ MongoDB Connection Error (Usually caused by Wi-Fi blocking it):", error.message);
        console.log("⚠️ Server will keep running, but database features won't work until Wi-Fi issue is fixed.");
        // process.exit(1); removed to prevent crash
    }
};

module.exports = connectDB;