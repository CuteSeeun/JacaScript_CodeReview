//정연

const pool = require("../config/dbpools");

//
const carinfo = async (req, res) => {
  const sql = `SELECT car.*, 
                      user.name as seller_name, 
                      user.tel as seller_tel, 
                      user.email as seller_email, 
                      board.sale, 
                      board.favorite  -- favorite 값을 추가
               FROM car 
               JOIN user ON car.user_uno = user.uNo
               JOIN board ON car.cNo = board.car_cno
               WHERE board.sale = 0`;
  // const sql = `SELECT car.*,
  //              user.name as seller_name, 
  //              user.tel as seller_tel, 
  //              user.email as seller_email,
  //              board.sale
  //   FROM car 
  //   JOIN user on car.user_uno = user.uNo
  //   Join board on car.cNo=board.car_cno
  //   where board.sale=0`;
  try {
    const [data] = await pool.query(sql);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// favorite 업데이트 라우터 추가
// router.put('/favorite/:id', async (req, res) => {
//   const { id } = req.params; // 요청에서 car_cno를 가져옴
//   const { favorite } = req.body; // 요청에서 favorite 값을 가져옴

//   const query = `
//     UPDATE board
//     SET favorite = ?
//     WHERE car_cno = ?
//   `;

//   try {
//     const [result] = await pool.query(query, [favorite, id]);
//     if (result.affectedRows > 0) {
//       res.status(200).json({ message: 'Favorite updated successfully' });
//     } else {
//       res.status(404).json({ message: 'Car not found' });
//     }
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

module.exports = carinfo;
