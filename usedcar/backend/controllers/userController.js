// userController.js
const pool = require('../config/dbpools');

const saveUser = async (req, res) => {
    const { name, userid, passwd, tel, email } = req.body;

    // 빈 문자열 확인
    if (!name || !userid || !passwd || !tel || !email) {
        return res.status(400).json({ message: 'Feild Error' });
    }

    try {
        const [result] = await pool.query('INSERT INTO user (name, userid, passwd, tel, email) VALUES (?, ?, ?, ?, ?)', [name, userid, passwd, tel, email]);
        res.json({ id: result.insertId, name, userid, passwd, tel, email });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }
};

const verifyEmail = async (req, res) => {
    const { email } = req.body;
    try {
        const [rows] = await pool.query('SELECT * FROM user WHERE email = ?', [email]);
        const emailExists = rows.length > 0;
        res.json({ exists: emailExists });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }
};

module.exports = { saveUser, verifyEmail };
