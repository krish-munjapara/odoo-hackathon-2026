const express = require("express");

const {
    createTrip,
    getTrips,
    deleteTrip,
} = require("../controllers/tripController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createTrip);
router.get("/", protect, getTrips);
router.delete("/:id", protect, deleteTrip);

module.exports = router;