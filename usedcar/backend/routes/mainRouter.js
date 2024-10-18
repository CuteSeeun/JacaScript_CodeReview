const express = require("express");
const router = express.Router();
const db = require("../config/dbpools"); // MySQL 연결 설정

const carinfo = require("../controllers/main");
const searchCar = require("../controllers/mainSearch");
const { deleteCar, updateCar } = require('../controllers/detail');

router.get("/", carinfo);
router.get("/search", searchCar);
router.delete("/:id", deleteCar);
router.put("/:id", updateCar);
// favorite 업데이트 라우트 추가
router.put('/favorite/:id', async (req, res) => {
    const { id } = req.params;  // 차량 번호 (car_cNo)
    const { favorite, user_uno } = req.body;  // favorite 상태와 유저 번호

    console.log("차량 번호 (car_cNo):", id);
    console.log("유저 번호 (user_uno):", user_uno);
    console.log("찜 상태 (favorite):", favorite);

    // const query = `
    //   UPDATE board 
    //   SET favorite = ?
    //   WHERE car_cno = ?
    // `;

    // 만약 user_uno가 없으면 로그인이 안된 상태이므로 favorite를 null로 설정
    if (!user_uno) {
        return res.status(200).json({ favorite: null });  // 로그인이 안된 상태에서 favorite는 null
    }

    // 쿼리문: favorite 테이블에서 user_uno와 car_cNo가 일치하는 레코드의 favorite 값을 수정
    const query = `
    UPDATE favorite
    SET favorite = ?
    WHERE car_cNo = ? AND user_uNo = ?
  `;

//     const query = `
//     UPDATE board
//     SET favorite = ?
//     WHERE car_cno = ? AND user_uno = ?  
//   `; // 특정 차량과 사용자에 대한 favorite 값 업데이트

    try {
        const [result] = await db.query(query, [favorite, id, user_uno]);
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Favorite updated successfully' });
            console.log(`차량번호: ${id}, 유저번호: ${user_uno}, 하트상태:${favorite}`);
        } else {
            res.status(404).json({ message: 'Record not found' });//즉, 특정 car_cno와 user_uno로 데이터베이스에서 해당 레코드를 찾지 못하는 상황
        }
    } catch (error) {
        res.status(500).send(error.message);
        console.error("데이터 수정 실패 :", error);
    }
});


module.exports = router;
