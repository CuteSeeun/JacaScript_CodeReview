//정연

const pool = require("../config/dbpools");

const carinfo = async (req, res) => {
  const { user_uno } = req.query; // 유저 번호를 쿼리로 받기

  const sql = ` SELECT 
    car.*, 
    IFNULL(favorite.favorite, 0) AS favorite,
    user.name AS seller_name, 
    user.tel AS seller_tel, 
    user.email AS seller_email,
    board.date,
    board.sale
    FROM car LEFT JOIN 
    favorite ON car.cNo = favorite.car_cNo AND favorite.user_uNo = ?
    JOIN user ON car.user_uno = user.uNo
    JOIN board ON car.cNo = board.car_cNo 
    WHERE board.sale = 0
    ORDER BY board.date DESC `;
  try {
    const [data] = await pool.query(sql, [user_uno]); // user_uno 전달
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching car data:", error);
    res.status(500).send(error.message);
  }
};

module.exports = carinfo;
