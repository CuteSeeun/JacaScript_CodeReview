//Main express server entry point
//서버의 진입점으로 Express 서버를 실행const express = require('express');
// server.js
const express = require('express');
const cors = require('cors');
const joinRouter = require('./routes/joinRouter');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/user', joinRouter);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

