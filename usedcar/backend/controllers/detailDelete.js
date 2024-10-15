const pool = require('../config/dbpools');

const deleteCar = async (req, res) => {
    const { id } = req.params;
    const connection = await pool.getConnection();

    try {
        console.log(`Deleting car with id: ${id}`); // 추가된 로그

        // board 테이블에서 참조된 레코드를 먼저 삭제
        await connection.query('DELETE FROM board WHERE car_cno = ?', [id]);

        // 그 후에 car 테이블에서 레코드를 삭제
        const result = await connection.query('DELETE FROM car WHERE cNo = ?', [id]);
        console.log(`Delete result: ${result}`); // 쿼리 결과 로그

        res.status(200).json({ message: '차량이 성공적으로 삭제되었습니다.' });
    } catch (error) {
        console.error('차량 삭제 중 오류 발생:', error); // 에러 로그
        res.status(500).json({ message: '차량 삭제 중 오류 발생', error });
    } finally {
        connection.release(); // 연결 해제
    }
};

module.exports = deleteCar;