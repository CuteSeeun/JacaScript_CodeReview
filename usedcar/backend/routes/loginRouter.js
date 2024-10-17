// loginRouter.js
const express = require('express');
const router = express.Router();
const { loginUser, findId } = require('../controllers/userController');

router.post('/loginUser', loginUser);
router.post('/findId', findId);

module.exports = router;
