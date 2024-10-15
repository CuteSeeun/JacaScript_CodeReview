//정연

//필요한 모듈 설치
const express = require("express");
const path = require("path");
const cors = require("cors");
const axios = require("axios");
const pool = require("../dbpools");


//express 어플리케이션 인스턴스 생성
const app = express();

//미들웨어 설정
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//
const carinfo = async (req, res) => {
  const sql = `select * from car`;
  try {
    const [data] = await pool.query(sql);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports=carinfo;
