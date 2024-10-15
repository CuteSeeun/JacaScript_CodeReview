const express = require('express');
const router = express.Router();
const pool = require('../dbpools');

router.post('/saveUser', async (req, res) => {
    const { name, userid, passwd, tel, email } = req.body;
    try {
        const [result] = await pool.query('INSERT INTO user (name, userid, passwd, tel, email) VALUES (?, ?, ?, ?, ?)', [name, userid, passwd, tel, email]);
        res.json({ id: result.insertId, name, userid, passwd, tel, email });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }
});
module.exports = router;
