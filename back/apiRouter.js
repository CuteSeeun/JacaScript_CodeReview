// apiRouter.js
const express = require('express');
const router = express.Router();
const pool = require('./dbPool');

// 모든 시장 데이터를 가져오는 라우트
router.get('/markets', async (req, res) => {
    try {
        const [data] = await pool.query('SELECT * FROM markets');
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// 특정 시장의 상세 데이터를 가져오는 라우트
router.get('/markets/:id', async (req, res) => {
    try {
        const [data] = await pool.query('SELECT * FROM markets WHERE id = ?', [req.params.id]);
        if (data.length === 0) {
            res.status(404).json({ message: 'Market not found' });
        } else {
            res.json(data[0]);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

router.get('/markets/search/:name', async (req, res) => {
    let { keyword } = req.query;
    console.log(keyword);
    // keyword = keyword.trim();
    if (!keyword) {
        return res.json({ message: '검색어를 입력하세요.' });
    }
    try {
        const [data] = await pool.query(`SELECT * FROM markets WHERE name LIKE ?;`, [`%${keyword}%`]);
        console.log((data));
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
