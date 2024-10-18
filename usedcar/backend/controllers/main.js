
const db = require("../config/dbpools");

const carinfo = async (req, res) => {
  const user_uno = req.query.user_uno || null;  // 프론트엔드에서 보내온 유저 번호
  const sql = `
    SELECT car.*, 
           user.name AS seller_name, 
           user.tel AS seller_tel, 
           user.email AS seller_email, 
           board.sale, 
           board.date, 
           IF(favorite.user_uNo = ?, favorite.favorite, NULL) AS favorite -- 로그인된 유저의 favorite 값 또는 NULL
    FROM board
    JOIN car ON board.car_cNo = car.cNo
    JOIN user ON board.user_uno = user.uNo
    LEFT JOIN favorite ON car.cNo = favorite.car_cNo AND favorite.user_uNo = ?
    WHERE board.sale = 0
  `;
//   const sql = `SELECT car.*, 
//        user.name AS seller_name, 
//        user.tel AS seller_tel, 
//        user.email AS seller_email, 
//        board.sale, 
//        board.date, 
//        favorite.favorite                   -- 찜하기 상태
// FROM board
// JOIN car ON board.car_cNo = car.cNo        -- car_cNo로 board와 car 조인
// JOIN user ON board.user_uno = user.uNo     -- user_uno로 board와 user 조인
// LEFT JOIN favorite ON board.user_uno = favorite.user_uNo 
//                    AND board.car_cNo = favorite.car_cNo    -- board의 user_uno와 car_cNo로 favorite 조인
// WHERE board.sale = 0;                                      -- 판매 상태가 0인 게시글만 가져옴
//   `;

try {
  const [data] = await db.query(sql, [user_uno, user_uno]);
  res.status(200).json(data);
} catch (error) {
  res.status(500).send(error.message);
}
};

module.exports = carinfo;