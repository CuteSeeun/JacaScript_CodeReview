const express = require("express");
const router = express.Router();

const carinfo = require("../controllers/main");
const searchCar = require("../controllers/mainSearch");
const {deleteCar, updateCar} = require('../controllers/detail');

router.get("/", carinfo);
router.get("/search",searchCar);
router.delete("/:id",deleteCar);
router.put("/:id",updateCar);


module.exports = router;
