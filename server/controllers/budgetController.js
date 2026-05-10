const Budget = require("../models/Budget");

const getBudgets = async (req, res) => {
    try {
        const { tripId } = req.query;
        const query = { userId: req.user._id };
        if (tripId) query.tripId = tripId;
        
        const budgets = await Budget.find(query).sort('-date');
        res.status(200).json(budgets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createBudget = async (req, res) => {
    try {
        const budget = await Budget.create({
            userId: req.user._id,
            ...req.body
        });
        res.status(201).json(budget);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteBudget = async (req, res) => {
    try {
        const budget = await Budget.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
        if (!budget) return res.status(404).json({ message: "Budget record not found" });
        res.status(200).json({ message: "Budget record deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getBudgets, createBudget, deleteBudget };
