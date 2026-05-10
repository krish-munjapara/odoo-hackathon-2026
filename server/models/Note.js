const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    tripId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip' },
    title: String,
    content: String,
    category: { type: String, default: 'General' },
    isChecklist: { type: Boolean, default: false },
    items: [{
        text: String,
        completed: { type: Boolean, default: false }
    }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Note", noteSchema);
