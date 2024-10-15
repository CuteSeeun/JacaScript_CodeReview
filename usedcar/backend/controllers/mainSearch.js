const pool = require('../config/dbpools');

const mainSearch = async(req,res)=>{
    const {name} = req.query;
    const sql = 'select * from car where name like ?';
    try {
        const [data] = await pool.query(sql,[`%${name}%`]);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message:'검색 중 오류 발생'});
    }
}
module.exports = mainSearch;