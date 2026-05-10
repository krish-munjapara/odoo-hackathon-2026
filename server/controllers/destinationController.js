const Destination = require("../models/Destination");

const getDestinations = async (req, res) => {
    try {
        const { search, category, sort, international, trending, limit } = req.query;
        let query = {};

        if (search) {
            query.$or = [
                { name: { $regex: search, $options: "i" } },
                { country: { $regex: search, $options: "i" } },
                { state: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } }
            ];
        }

        if (category && category !== "All") {
            query.categories = { $in: [category] };
        }

        if (international === "true") query.isInternational = true;
        if (international === "false") query.isInternational = false;
        if (trending === "true") query.isTrending = true;

        let sortOption = {};
        if (sort === "price_low") sortOption = { budgetFrom: 1 };
        else if (sort === "price_high") sortOption = { budgetFrom: -1 };
        else if (sort === "rating") sortOption = { rating: -1 };
        else sortOption = { isTrending: -1, rating: -1 };

        const destinations = await Destination.find(query)
            .sort(sortOption)
            .limit(parseInt(limit) || 50);

        res.status(200).json(destinations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getDestinationById = async (req, res) => {
    try {
        const destination = await Destination.findById(req.params.id);
        if (!destination) return res.status(404).json({ message: "Destination not found" });
        res.status(200).json(destination);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCategories = async (req, res) => {
    try {
        const categories = await Destination.distinct("categories");
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getDestinations, getDestinationById, getCategories };
