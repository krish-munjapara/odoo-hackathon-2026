const express = require("express");
const { generateItinerary, getItinerary } = require("../controllers/itineraryController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/:tripId/generate", protect, generateItinerary);
router.get("/:tripId", protect, getItinerary);

module.exports = router;
