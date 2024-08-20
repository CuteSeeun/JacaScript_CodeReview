//스트림 기반 파일 입력받기
const fs = require("fs");

console.log("start");

const file = "./test.pdf";

const readStream = fs.createReadStream("./readme.txt", {highWaterMark : 16});//버퍼사이즈를 16바이트로 쪼개겠다 즉 16크기의 버퍼
//이제부터 읽는 방식은 이벤트이다(비동기)_이벤트 방식의 입력
const data = [];
//data이벤트
readStream.on("data", (chunk)=>{ //이때 읽는 단위는 `. chunk는 작은 버퍼이다
    //1개씩 읽어들이는거
    //console.log(chunk); 청크가 무엇인지
    //청크들을 모으는 작업
    data.push(chunk);//스트림 방식
});

//end이벤트
readStream.on("end", ()=>{
    const buffer = Buffer.concat(data);//큰 데이터 덩어리로 만들기
    console.log(buffer.toString());
});//다 읽엇으면 닫기

readStream.on("error", (error)=>{
    console.log(error.message);
});

console.log("end");

