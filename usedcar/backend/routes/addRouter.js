const express = require('express');
const router = express.Router();
const db = require('../config/dbpools'); // MySQL 연결 설정
const multer = require('multer');
const path = require('path');

// Multer 설정: 이미지 파일을 uploads 폴더에 저장
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // 파일 저장 경로
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // 파일 이름을 현재 시간과 확장자로 생성
  }
});

const upload = multer({ storage: storage }); // Multer를 사용하여 파일 업로드 설정

// MySQL 데이터베이스에 차량 정보와 이미지 경로 저장
router.post('/', upload.single('carImage'), async (req, res) => {
  try {
    const { name, brand, year, mileage, fueltype, price, color, user_uno } = req.body;
    console.log("Received Data:", { name, brand, year, mileage, fueltype, price, color, user_uno });//전달된 데이터 확인

    const carImage = req.file ? req.file.filename : null; // 업로드된 이미지 파일의 파일명 저장
    const imagePath = `/uploads/${carImage}`; // 이미지 경로 설정

    const query = 'INSERT INTO car (name, brand, year, mileage, fueltype, price, color, image, user_uno) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';

    // Promise 기반의 query 함수 호출
    await db.query(query, [name, brand, year, mileage, fueltype, price, color, imagePath ,user_uno]);
    // .then(res=>console.log("abc"+ res))
    // const [result] = await db.query(query, [name, brand, year, mileage, fueltype, price, color, user_uno]);

    // console.log(result); // 삽입 결과 로그 출력
    res.status(200).send('차량 데이터가 성공적으로 추가되었습니다.');
    
  } catch (err) {
    console.error('차량 데이터를 삽입하는 도중 오류 발생:', err);
    res.status(500).send('서버 오류');
  }
});

module.exports = router;
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

//작동 안하는 코드 (데이터가 디비에 들어가면 성공했다고 alert가 떠야 하는데 안뜸. 이 코드가 문제 있음
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

//첫번째 코드가 작동을 안해서 규호님께서 생각해보다가 async, await을 써야 한다고 하심 그러나 안됨.
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



