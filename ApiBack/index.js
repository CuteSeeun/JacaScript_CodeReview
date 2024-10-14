const mysql2 = require('mysql2/promise');
const express = require('express'); // express 공부하기
const axios = require('axios');
const cors = require('cors');

const app = express();

//DB 연결 poll
// const pool = mysql2.createConnection
const pool = mysql2.createPool({
    host:'localhost',
    user:'root',
    password:'1234',
    port:3306,
    database:'markets',
    connectionLimit: 10, // 최대 연결 풀 수 10개까지 동시연결 가능
    waitForConnections: true // 연결이 최대로 사용중일때 대기할건지 에러처리로 미접속하게 만들건지
    // true = 대기 , false = 에러처리
})

//시장 데이터 API URL
const url = 'https://smart.incheon.go.kr/server/rest/services/Hosted/전통시장/FeatureServer/47/query?where=1%3D1&outFields=period,hmpg_addr,tel,roadaddr,name&outSR=4326&f=json'

//------------------------------- pool end ---------------------------------------------------

//데이터베이스에서 데이터 요청 
app.get('/markets', async(req,res)=>{
    try {
        const [data] = await pool.query('select * from markets');
        res.json({data});
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching markets data');
    }
})

//------------------------------- 요청 end -------------------------------------------


// API로 데이터 가져오기 및 DB 저장
async function fetchData(){
        try {
            const response = await axios.get(url);
            const data = response.data;
            await saveData(data);
        } catch (error) {
            console.error(error);
        }
    }

async function saveData(data){
        const connection = await pool.getConnection();
        try {
            await connection.beginTransaction();
            
            let markets = data.features.map(market=>[
                market.attributes.name,
                market.attributes.period,
                market.attributes.hmpg_addr,
                market.attributes.roadaddr,
                market.attributes.tel
            ])

            for(const market of markets){
                const [existData] = await connection.query('select * from markets where name =?',[market[0]]);
                if(existData.length === 0){
                    const query = 'insert into markets (name,period,hmpg_addr,roadaddr,tel)values (?,?,?,?,?)';
                    await connection.query(query,market);
                }
            }
           await connection.commit();
           console.log('data save');
            
        } catch (error) {
            await connection.rollback();
            console.error('Error : '+error);
        }finally{
            connection.release();
            //release() 는 데이터 베이스 연결을 반환하는 역할
            /* 
            1. 연결 풀 관리 : 
            DB에서 요청할 때마다 새로운 연결을 생성하면 성능 저하 될수있음
            그래서 연결 풀을 사용하여 미리 여러 연결을 만들어놓고 필요할 때마다 그 중 하나를 사용한 후 다시 풀에 반환
            
            2. 자원 낭비 방지 :
            release()를 호출하지 않으면 해당 연결이 풀에 반환되지 않고 계속 점유되서 다른 요청에서 그 연결을 사용할 수 없음
            
            3. 에러 발생 시 안전하게 반환 :
            try ~ finally 블록 안에서 사용함으로써 에러가 발생해도 반드시 연결이 반환되도록 보장할 수 있습니다.
            */
        }
} // saveDate end ------

//서버--------------------------------------------------------

const port = 7778;

app.use(cors({
    origin: '*', // 모든 출처 허용 (보안을 위해 실제 운영 환경에서는 구체적인 도메인을 지정하는 것이 좋습니다)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // 허용할 HTTP 메서드
    allowedHeaders: ['Content-Type', 'Authorization'] // 허용할 헤더
  }));
  
  // 추가: 모든 라우트에 대해 CORS 헤더 설정
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

//   app.use(cors());

app.listen(port,async()=>{
    console.log(`http://localhost:${port}`);
    await fetchData();
})

//------------------------------- 서버 end ----------------------------------------------------











