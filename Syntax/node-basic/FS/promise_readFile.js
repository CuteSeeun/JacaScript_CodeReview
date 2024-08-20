//promise활용해 읽기
//fs 모듈 안에 있는 promise
//const promise = require("fs").promises;
const {promises : fs} = require("fs");

//readme 파일 비동기로 처리하며 순서대로 읽어오기
console.log("[Start]");

fs.readFile("./readme.txt") //콜백이 없어지고 promise를 리턴한다 그래서 읽고자 하는 파일 경로만 주면 된다
                             //체이닝 때문에 변수 필요없고 읽어들인 파일은 promise의 프로퍼티에 들어가있다.
                             //이는 then으
  .then((data)=>{           //읽어온 파일(데이터)은 data로 들어온다
    console.log(data.toString());
    return fs.readFile("./readme2.txt"); //이 반환값은 프로미스이다
  })
  .then((data2)=>{
    console.log(data2.toString());
    return fs.readFile("./readme3.txt");
  })
  .then((data3)=>{
    console.log(data3.toString());

  })
  .catch(console.log);//예외처리는 catch로 받는다

console.log("[End]");
