const express = require("express");
const { getDestinations, getDestinationById, getCategories } = require("../controllers/destinationController");

const router = express.Router();

router.get("/", getDestinations);
router.get("/categories", getCategories);
router.get("/:id", getDestinationById);

module.exports = router;
