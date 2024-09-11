// initDB.js
const axios = require('axios');
const pool = require('./dbPool');

async function fetchData() {
    try {
        const response = await axios.get('https://smart.incheon.go.kr/server/rest/services/Hosted/전통시장/FeatureServer/47/query?where=1%3D1&outFields=name,period,hmpg_addr,tel,roadaddr&outSR=4326&f=json');
        const data = response.data;
        await saveMarketData(data);
    } catch (error) {
        console.error('Error: ', error);
    }
}

async function saveMarketData(data) {
    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();
        const markets = data.features.map(market => [
            market.attributes.name,
            market.attributes.period,
            market.attributes.hmpg_addr,
            market.attributes.roadaddr,
            market.attributes.tel
        ]);

        for (const market of markets) {
            const [data] = await connection.query('SELECT * FROM markets WHERE name = ?', [market[0]]);
            if (data.length === 0) {
                const query = 'INSERT INTO markets (name, period, hmpg_addr, roadaddr, tel) VALUES (?, ?, ?, ?, ?)';
                await connection.query(query, market);
            }
        }

        await connection.commit();
        console.log('Data saved');
    } catch (error) {
        await connection.rollback();
        console.error('Error: ', error);
    } finally {
        connection.release();
    }
}

module.exports = fetchData;
