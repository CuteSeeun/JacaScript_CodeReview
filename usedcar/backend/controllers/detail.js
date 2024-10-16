const pool = require('../config/dbpools');

const deleteCar = async (req, res) => {
    const { id } = req.params;
    const connection = await pool.getConnection();

    try {
        console.log(`Deleting car with id: ${id}`); 

        // board 테이블에서 참조된 레코드를 먼저 삭제
        await connection.query('DELETE FROM board WHERE car_cno = ?', [id]);

        // 그 후에 car 테이블에서 레코드를 삭제
        const result = await connection.query('DELETE FROM car WHERE cNo = ?', [id]);
        console.log(`Delete result: ${result}`); 

        res.status(200).json({ message: '차량이 성공적으로 삭제되었습니다.' });
    } catch (error) {
        console.error('차량 삭제 중 오류 발생:', error); 
        res.status(500).json({ message: '차량 삭제 중 오류 발생', error });
    } finally {
        connection.release(); 
    }
};


const updateCar = async (req, res) => {
    const { id } = req.params;
    const { name, brand, year, mileage, fueltype, price, sale } = req.body; // sale 추가
    const connection = await pool.getConnection();

    try {
        // car 테이블 업데이트
        const carSql = `
            UPDATE car 
            SET name = ?, brand = ?, year = ?, mileage = ?, fueltype = ?, price = ?
            WHERE cNo = ?;
        `;
        await connection.query(carSql, [name, brand, year, mileage, fueltype, price, id]);

        // board 테이블의 sale 상태 업데이트
        const boardSql = `
            UPDATE board 
            SET sale = ? 
            WHERE car_cno = ?;
        `;
        await connection.query(boardSql, [sale, id]);

        res.status(200).json({ message: '차량 정보 및 판매 상태가 성공적으로 업데이트되었습니다.' });
    } catch (error) {
        console.error('차량 정보 업데이트 중 오류 발생:', error);
        res.status(500).json({ message: '서버 오류' });
    } finally {
        connection.release();
    }
};

module.exports = {
    deleteCar,
    updateCar,
};