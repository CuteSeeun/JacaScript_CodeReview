const express = require("express");
const router = express.Router();

const carinfo = require("../controllers/main");
const searchCar = require("../controllers/mainSearch");
const deleteCar = require("../controllers/detailDelete");
//const favoriteCar = require("../controllers/mainFavorite");

router.get("/", carinfo);
//router.get("/", favoriteCar);
router.get("/search", searchCar);
router.delete("/:id", deleteCar);

module.exports = router;
