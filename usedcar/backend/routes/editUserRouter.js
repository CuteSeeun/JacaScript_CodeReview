// edituserRouter.js
const express = require('express');
const router = express.Router();
const { editUser } = require('../controllers/userController')

router.get('/:uNo', editUser);

module.exports = router;
