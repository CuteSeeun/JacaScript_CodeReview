import { get } from "./ajax.js";

console.log("프로그램 시작됨");

//데이터 처리(정상 처리)
const handleResponse = function (result) { //이때 message는 파싱된 객체이다
    const message = document.querySelector("#message");
    message.textContent = result;
}
/* 위 코드를 함수 선언형으로 하면 코드 순서를 상관없이 쓸 수 잇는데 메모리 
*/

//오류 처리
const handleError = function (status) {
    console.log(`오류코드:${status}`);
}

// get("./message.json", handleResponse, handleError);
get("https://jsonplaceholder.typicode.com/posts", handleResponse, handleError); //데이터 받아와서

console.log("프로그램 종료됨");

