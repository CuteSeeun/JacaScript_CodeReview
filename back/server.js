// server.js
const express = require('express');
const cors = require('cors');
const apiRouter = require('./apiRouter');
const fetchData = require('./initDB');

const app = express();

app.use(cors()); // CORS 미들웨어를 먼저 사용
app.use('/', apiRouter);

const PORT = 3000; // 포트 번호 변경
app.listen(PORT, async () => {
    console.log(`http://localhost:${PORT}`);
    await fetchData(); // 서버 시작 시 데이터 가져오기 및 저장
});
