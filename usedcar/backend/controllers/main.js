//정연

const pool = require("../config/dbpools");

//
const carinfo = async (req, res) => {
  const sql = `SELECT car.*,
               user.name as seller_name, 
               user.tel as seller_tel, 
               user.email as seller_email,
               board.sale
    FROM car 
    JOIN user on car.user_uno = user.uNo
    Join board on car.cNo=board.car_cno
    where board.sale=0`;
  try {
    const [data] = await pool.query(sql);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = carinfo;
