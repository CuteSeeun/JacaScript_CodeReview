//이 코드는 write.txt 파일이 저절로 생김
const fs  = require("fs"); //fs는 콜백만 지원

const filePath= "./writeme.txt";
const message = "오늘은 목요일입니다";
fs.writeFile(filePath, message, (error) => {
    if(error) {
        console.log(error.message);
    }
}); //마지막 콜백은 에러가 났을 때 처리
console.log("파일 쓰기 완료");



//promise 기반
const fs  = require("fs").promises; //promise를 지원하는 모듈

fs.writeFile(filePath, message)
    .then(()=>{
        console.log("파일 다 썼습니다");
    })
    .catch((error)=> {
        console.log(error.message);
    });
