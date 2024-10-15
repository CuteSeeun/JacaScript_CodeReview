const express = require('express');
const router = express.Router();
const db = require('../dbpools'); // MySQL 연결 설정
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // 업로드할 디렉토리 설정

// 차량 데이터 삽입 API
// router.post('/addCar', (req, res) => {
//   const { carModel, manufacturer, year, mileage, fuel, price, color, carImage } = req.body;


//   const query = 'INSERT INTO car (carModel, manufacturer, year, mileage, fuel, price, color, carImage) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

//   db.query(query, [carModel, manufacturer, year, mileage, fuel, price, color, carImage], (err, result) => {
//     if (err) {
//       console.error('차량 데이터를 삽입하는 도중 오류 발생:', err);
//       res.status(500).send('서버 오류');
//     } else {
//       res.status(200).send('차량 데이터가 성공적으로 추가되었습니다.');
//     }
//   });
// });


// 차량 데이터와 파일 업로드 처리
router.post('/', upload.single('carImage'), async (req, res) => {
  try {
    const { name, brand, year, mileage, fueltype, price, color, user_uno } = req.body;
    console.log("Received Data:", { name, brand, year, mileage, fueltype, price, color, user_uno });//전달된 데이터 확인

    const carImage = req.file ? req.file.filename : null; // 파일이 있는 경우 파일명 저장

    const query = 'INSERT INTO car (name, brand, year, mileage, fueltype, price, color, user_uno) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

    // Promise 기반의 query 함수 호출
    await db.query(query, [name, brand, year, mileage, fueltype, price, color, user_uno])
    .then(res=>console.log("abc"+ res))

    // console.log(result); // 삽입 결과 로그 출력
    res.status(200).send('차량 데이터가 성공적으로 추가되었습니다.');
    
  } catch (err) {
    console.error('차량 데이터를 삽입하는 도중 오류 발생:', err);
    res.status(500).send('서버 오류');
  }
});

// router.post('/', upload.single('carImage'), async (req, res) => {
//   const { name, brand, year, mileage, fueltype, price, color, user_uno } = req.body;
//   console.log("Received Data:", { name, brand, year, mileage, fueltype, price, color, user_uno });//전달된 데이터 확인(데이터가 제대로 넘어오고 있는지)
//   const carImage = req.file ? req.file.filename : null; // 파일이 있는 경우 파일명 저장

//   const query = 'INSERT INTO car (name, brand, year, mileage, fueltype, price, color, user_uno) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

//   await db.query(query, [name, brand, year, mileage, fueltype, price, color, user_uno], (err, result) => {
//     console.log("abcd");
//     if (err) {
//       console.error('차량 데이터를 삽입하는 도중 오류 발생:', err);
//       res.status(500).send('서버 오류');
//     } else {
//       console.log(result);
//       res.status(200).send('차량 데이터가 성공적으로 추가되었습니다.');
//     }
//   });
// });

// router.post('/', upload.single('carImage'), (req, res) => {
//   const { name, brand, year, mileage, fueltype, price, color, user_uno } = req.body;
//   console.log("Received Data:", { name, brand, year, mileage, fueltype, price, color, user_uno });//전달된 데이터 확인(데이터가 제대로 넘어오고 있는지)
//   const carImage = req.file ? req.file.filename : null; // 파일이 있는 경우 파일명 저장

//   const query = 'INSERT INTO car (name, brand, year, mileage, fueltype, price, color, user_uno) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

//    db.query(query, [name, brand, year, mileage, fueltype, price, color, user_uno], (err, result) => {
//     console.log("abcd");
//     if (err) {
//       console.error('차량 데이터를 삽입하는 도중 오류 발생:', err);
//       res.status(500).send('서버 오류');
//     } else {
//       console.log(result);
//       res.status(200).send('차량 데이터가 성공적으로 추가되었습니다.');
//     }
//   });
// });


module.exports = router;
