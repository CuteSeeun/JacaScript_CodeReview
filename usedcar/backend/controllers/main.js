//정연

const pool = require("../config/dbpools");

//
const carinfo = async (req, res) => {
  const sql = `select * from car`;
  try {
    const [data] = await pool.query(sql);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = carinfo;
