const carinfo = require("../controllers/main");

const express = require("express");
const router = express.Router();

router.get("/", carinfo);
module.exports = router;
