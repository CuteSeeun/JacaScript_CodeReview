const express = require("express");
const router = express.Router();
const db = require("../config/dbpools"); // MySQL 연결 설정
const multer = require("multer");
const path = require("path");


// user_uno = 10인 레코드 가져오기 (board와 car 조인)
router.get('/', async (req, res) => {
    const query = `
      SELECT car.image, car.name, board.bNo
      FROM board
      JOIN car
      ON board.car_cno = car.cNo
      WHERE board.user_uno = ?
    `;

    try {
        const [results] = await db.query(query); // 쿼리 실행
        res.json(results); // 결과 반환
        console.log(results); // 결과 로그 출력
    } catch (err) {
        res.status(500).send(err); // 에러 발생 시
        console.error("Error fetching data:", err);
    }
});

module.exports = router;