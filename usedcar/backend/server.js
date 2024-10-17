//Main express server entry point
//서버의 진입점으로 Express 서버를 실행const express = require('express');
// server.js
const express = require("express");
const cors = require("cors");
const path = require('path');
const joinRouter = require("./routes/joinRouter");
const loginRouter = require("./routes/loginRouter");
const mainRouter = require("./routes/mainRouter");
const addRouter = require("./routes/addRouter");
const editUserRouter = require("./routes/editUserRouter");
const headerRouter = require("./routes/headerRouter");
const wishRouter = require("./routes/wishRouter");
const soldRouter = require("./routes/soldRouter");


const app = express();
app.use(express.json());
app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/header', headerRouter);
app.use("/user", joinRouter);
app.use("/login", loginRouter);
app.use("/edituser", editUserRouter);
app.use("/car", mainRouter);
app.use("/addCar", addRouter);
app.use("/wishList", wishRouter);
app.use("/sold", soldRouter);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
