const express = require("express");
const router = express.Router();
const db = require("../config/dbpools"); // MySQL 연결 설정
const multer = require("multer");
const path = require("path");

//board테이블과 car 테이블을 조인한 데이터를 프론트엔드로 보내줘 차의 이미지랑 모델명을 뿌려준다. favorite은 가져와 상태에 저장한다.
router.get('/', async (req, res) => {
  const { user_uno } = req.query; // 프론트에서 전달한 user_uno 값 받기



  const query = `SELECT car.*,
               user.name as seller_name, 
               user.tel as seller_tel, 
               user.email as seller_email,
               board.sale
    FROM car 
    JOIN user on car.user_uno = user.uNo
    Join board on car.cNo=board.car_cno
    where board.sale=0`;


//   const query = `
//     SELECT car.image, car.name, board.favorite, car.cNo
// FROM board 
// JOIN car 
// ON board.car_cno = car.cNo 
// WHERE board.user_uno = ? AND board.favorite = 1 `;

  try {
    const [results] = await db.query(query, [user_uno]); // Promise 사용
    res.json(results); // 결과 반환(name, image, favorite)
    console.log(results);
  } catch (err) {
    res.status(500).send(err); // 에러 발생 시
    console.error("Error fetching wishlist:", err);
  }
}); 

// PUT 요청을 처리하여 board 테이블의 favorite 값을 0으로 업데이트
router.put('/:cNo', async (req, res) => {
  const { cNo } = req.params;  // URL에서 cNo 추출
  const { user_uno } = req.body; //프론트에서 전달한 user_uno 값 받기

  const query = `
    UPDATE board 
    SET favorite = 0
    WHERE car_cno = ? AND user_uno = ?`;

  try {
    const [results] = await db.query(query, [cNo, user_uno]); // 쿼리 실행 (Prepared Statements)
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "No record found for the given cNo and user_uno" });
    }
    res.json({ message: "Favorite value updated to 0" });
    console.log(`Car with cNo ${cNo} and user_uno ${user_uno} updated`);
  } catch (err) {
    res.status(500).send(err); // 에러 발생 시
    console.error("Error updating favorite:", err);
  }
});

module.exports = router; // 라우터 내보내기