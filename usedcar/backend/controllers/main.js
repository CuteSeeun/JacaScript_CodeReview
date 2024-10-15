const pool = require("../dbpools");
//필요한 모듈 설치

//정연 - car Table 전체 출력
const carinfo = async (req, res) => {
  const sql = `select * from car`;
  try {
    const [data] = await pool.query(sql);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports=carinfo;
