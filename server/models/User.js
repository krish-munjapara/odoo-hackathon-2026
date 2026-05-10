const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    city: String,
    country: String,
    bio: String,
    password: String,
});

module.exports = mongoose.model("User", userSchema);