const express = require("express");
const router = express.Router();
const db = require("../config/dbpools"); // MySQL 연결 설정
const multer = require("multer");
const path = require("path");


//board테이블과 car 테이블을 조인한 데이터를 프론트엔드로 보내줘 차의 이미지랑 모델명을 뿌려준다. favorite은 가져와 상태에 저장한다.
router.get('/', async (req, res) => {
  console.log('백엔드 get요청 들어옴');
  const { user_uno } = req.query; // 프론트에서 전달한 user_uno 값 받기
  console.log('유저번호 :', user_uno);

  if (!user_uno) {
    console.log('유저 번호가 없음!', user_uno);
  }

  const query = `
    SELECT 
    car.*, 
    user.name AS seller_name, 
    user.email AS seller_email, 
    user.tel AS seller_tel, 
    board.sale, 
    favorite.favorite
FROM 
    favorite 
JOIN 
    car ON favorite.car_cNo = car.cNo 
JOIN 
    board ON car.cNo = board.car_cNo 
JOIN 
    user ON board.user_uno = user.uNo
WHERE 
    favorite.user_uNo = ? 
AND 
    favorite.favorite = 1;`; // 판매중인 차량만 가져옴

  // const query = `SELECT car.*,
  //              user.name as seller_name, 
  //              user.tel as seller_tel, 
  //              user.email as seller_email,
  //              board.sale
  //   FROM car 
  //   JOIN user on car.user_uno = user.uNo
  //   Join board on car.cNo=board.car_cno
  //   where board.sale=0`;

  try {
    console.log('디비에 정보 요청');
    const [results] = await db.query(query, [user_uno]); // user_uno로 필터링
    res.json(results); // 결과 반환
    console.log('정보 요청 완료' + results);
  } catch (err) {
    res.status(500).send(err); // 에러 발생 시
    console.error("Error fetching car list:", err);
    console.log('해당 사용자의 찜목록과 찜한 차량 정보 못 가져옴');
  }
});

// PUT 요청을 처리하여 board 테이블의 favorite 값을 0으로 업데이트
router.put('/:cNo', async (req, res) => {
  const { cNo } = req.params;  // URL에서 cNo 추출
  // const { user_uno } = req.body; //프론트에서 전달한 user_uno 값 받기
  const { user_uno, favorite } = req.body; // 프론트엔드에서 전달된 user_uno와 favorite 값

  if (!user_uno || favorite === undefined) {
    console.log('user_uno', user_uno);
    console.log('favorite', favorite);
  }

  // const query = `
  //   INSERT INTO favorite (user_uNo, car_cNo, favorite)
  //   VALUES (?, ?, ?)
  //   ON DUPLICATE KEY UPDATE favorite = ?`; // favorite 테이블에 삽입하거나 업데이트

  const query = `
    UPDATE favorite
    SET favorite = 0
    WHERE user_uNo = ? AND car_cNo = ?`; // user_uNo와 car_cNo로 해당 레코드의 favorite 값을 0으로 수정


  try {
    const [results] = await db.query(query, [user_uno, cNo]);
    res.json(results); // 결과 반환
    if (results.affectedRows === 0) {
      // return res.status(404).json({ message: "No record found for the given user_uNo and car_cNo" });
      console.log('찜하기에서 favorite값 수정 실패 : user_uNo랑 car_cNo를 찾을 수 없다', error);
    }
    // res.json({ message: "Favorite updated to 0" });
    console.log('favorited값 0으로 수정 완.');
    console.log(`Car with cNo ${cNo} and user_uNo ${user_uno} updated to favorite status: 0`);
  } catch (err) {
    res.status(500).send(err); // 에러 발생 시
    console.error("에러 발생:", err);
  }

  // const query = `
  //   UPDATE board 
  //   SET favorite = 0
  //   WHERE car_cno = ? AND user_uno = ?`;

  // try {
  //   const [results] = await db.query(query, [cNo, user_uno]); // 쿼리 실행 (Prepared Statements)
  //   if (results.affectedRows === 0) {
  //     return res.status(404).json({ message: "No record found for the given cNo and user_uno" });
  //   }
  //   res.json({ message: "Favorite value updated to 0" });
  //   console.log(`Car with cNo ${cNo} and user_uno ${user_uno} updated`);
  // } catch (err) {
  //   res.status(500).send(err); // 에러 발생 시
  //   console.error("Error updating favorite:", err);
  // }
});

module.exports = router; // 라우터 내보내기