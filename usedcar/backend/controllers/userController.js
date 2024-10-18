// userController.js
const pool = require('../config/dbpools');

const saveUser = async (req, res) => {
    const { name, userid, passwd, tel, email } = req.body;

    // 빈 문자열 확인
    if (!name || !userid || !passwd || !tel || !email) {
        return res.status(400).json({ message: 'Feild Error' });
    }

    const connection = await pool.getConnection();

    try {
        await connection.beginTransaction();

        const [result] = await connection.query('INSERT INTO user (name, userid, passwd, tel, email) VALUES (?, ?, ?, ?, ?)', [name, userid, passwd, tel, email]);
        res.json({ id: result.insertId, name, userid, passwd, tel, email });
        const userId = result.insertId;
        // 차량 수 만큼 favorite 테이블 초기화
        const [carRows] = await connection.query('select cNo from car');
        const carList = carRows // 차 목록

        const favoriteData = carList.map((car) => [0,userId,car.cNo]);

        await connection.query(
            'insert into favorite (favorite,user_uNo,car_cNo) values ?',
            [favoriteData]
        );

        await connection.commit();

       return res.status(201).json({id:userId,name,userid,passwd,tel,email});

    } catch (error) {
        console.error(error);
        connection.rollback(); // 에러시 롤백
        res.status(500).send('Error');
    }finally{
        connection.release(); // 연결 해제
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

const loginUser = async (req, res) => {
    const { userid, passwd } = req.body;
    try {
        const [rows] = await pool.query('SELECT uNo FROM user WHERE userid = ? AND passwd = ?', [userid, passwd]);
        if (rows.length > 0) {
            res.json({ success: true, uNo: rows[0].uNo });
        } else {
            res.json({ success: false, message: '아이디나 비밀번호가 일치하지 않습니다.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }
};

const setUser = async (req, res) => {
    const { uNo } = req.params;
    try {
        const [rows] = await pool.query('SELECT name, userid, tel, email FROM user WHERE uNo = ?', [uNo]);
        console.log(rows);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }
};

const editUser = async (req, res) => {
    const { uNo, passwd, tel, email } = req.body;
    try {
        const [result] = await pool.query('UPDATE user SET passwd = ?, tel = ?, email = ? WHERE uNo = ?', [passwd, tel, email, uNo]);
        if (result.affectedRows > 0) {
            res.json({ success: true, uNo, passwd, tel, email });
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }
};


const showName = async (req, res) => {
    const { uNo } = req.params;
    try {
        const [rows] = await pool.query('SELECT name, tel, email FROM user WHERE uNo = ?', [uNo]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }
};

const findId = async (req, res) => {
    const { name, email } = req.body;
    try {
        const [rows] = await pool.query('SELECT userid FROM user WHERE name = ? AND email = ?', [name, email]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ message: '사용자를 찾을 수 없습니다' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }
}


module.exports = { saveUser, verifyEmail, loginUser, setUser, editUser, showName, findId };
