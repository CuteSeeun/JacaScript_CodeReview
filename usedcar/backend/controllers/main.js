//정연

const pool = require("../config/dbpools");

//
const carinfo = async (req, res) => {
  // const sql = `select * from car`;
  const sql = `SELECT car.*, user.name as seller_name, user.tel as seller_tel, user.email as seller_email 
    FROM car
    JOIN user ON car.user_uno = user.uNo
    JOIN board ON car.cNo = board.car_cno
    WHERE board.sale = 1 ;
    `;
  try {
    const [data] = await pool.query(sql);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = carinfo;
