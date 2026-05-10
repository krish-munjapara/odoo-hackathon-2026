const Note = require("../models/Note");

const getNotes = async (req, res) => {
    try {
        const notes = await Note.find({ userId: req.user._id }).sort('-createdAt');
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createNote = async (req, res) => {
    try {
        const note = await Note.create({
            userId: req.user._id,
            ...req.body
        });
        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateNote = async (req, res) => {
    try {
        const note = await Note.findOneAndUpdate(
            { _id: req.params.id, userId: req.user._id },
            req.body,
            { new: true }
        );
        if (!note) return res.status(404).json({ message: "Note not found" });
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteNote = async (req, res) => {
    try {
        const note = await Note.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
        if (!note) return res.status(404).json({ message: "Note not found" });
        res.status(200).json({ message: "Note deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getNotes, createNote, updateNote, deleteNote };
