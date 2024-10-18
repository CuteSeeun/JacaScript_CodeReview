const pool = require('../config/dbpools');

const updateFavorite = async(req,res)=>{
    const {id} = req.params; // 차량ID
    const {favorite,user_uno}= req.body; // 요청에서 favorite 값 과 사용자 번호 가져옴

    console.log('백엔드로 요청 들어옴');
    console.log('차번호' + id);
    console.log('하트 상태', favorite);
    console.log('유저 번호' , user_uno);

    const query = `
    UPDATE favorite
    SET favorite = ?
    WHERE car_cNo = ? AND user_uNo = ?
    `;

    try {
        console.log('디비 요청');
        const [result] = await pool.query(query,[favorite , id,user_uno]);

        if(result.affectedRows > 0){
            res.status(200).json({message:'찜 성공',favorite})
            console.log(`찜 성공 : 하트 상태를 ${favorite}로 업데이트`);
        }else{
            res.status(404).json({message:'찜 오류'})
            console.log('찜 오류');
        }
    } catch (error) {
      console.error('업데이트 오류',error);
      res.status(500).send(error.message);
      console.log('수정 요청 실패');
    }
};

module.exports = updateFavorite;