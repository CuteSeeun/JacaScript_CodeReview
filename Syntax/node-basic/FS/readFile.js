// fs 모듈을 이용한 파일 읽기
const fs = require("fs");

//파일 입출력은 대부분 비동기로 처리한다
//비동기적으로 파일을 읽는 코드


fs.readFile("./readme.txt", "utf-8", (error, data)=>{
    //에러가 일어날 수 있다고 무조건 가정한다
    if(error) throw error;
    console.log(data.toString()); //문자열로 디코딩해줌(한글로)
    console.log(data); //이는 자동을 문자열로 변환되어 출력한다
});

//console.log(process.cwd());

/*
fs.readFile("./fs/test.pdf", (error, data)=>{
    //에러가 일어날 수 있다고 무조건 가정한다
    if(error) throw error;
    //console.log(data.tpString()); //문자열로 디코딩해줌
    console.log(data);
});
*/

//동기
//sync가 붙어있는게 동기로 읽겠다는 뜻이다
const data = fs.readFileSync("./readme.txt");
console.log(data); //이는 버퍼로 출력됨
