
import { get } from "./ajax-promise.js";

console.log("프로그램 시작됨");

// 서버로부터 데이터 처리(정상 처리)
const handleResponse = function (result) { // result는 파싱된 객체입니다.
    const posts = document.querySelector("#posts");
    //message.textContent = result; // 첫 번째 포스트의 제목을 출력하도록 예시
    posts.innerHTML = `${
        result.map((post)=>{
            return `<tr>
            <td> ${post.id}</td>
            <td> ${post.userid}</td>
            <td> ${post.title}</td>
            <td> ${post.book}</td>
            </tr>`
        })
        .join(" ")
    }`;
};

// 오류 처리
const handleError = function (status) {
    console.log(`오류 코드: ${status}`);
};

// get 함수 호출, 프로미스 사용
// get("https://jsonplaceholder.typicode.com/posts")
//     .then(handleResponse)  // 성공 시 handleResponse 호출
//     .catch(handleError);   // 실패 시 handleError 호출

(async function(){
    try{
    const posts = await get("https://jsonplaceholder.typicode.com/posts");
    handleResponse(posts);
    const comments = await get("https://jsonplaceholder.typicode.com/comments");
    console.log(comments);
    
    }catch(error){
        console.log(error);
        
    }
    // console.log(posts);
})();//배열로 바로 떨어진다


console.log("프로그램 종료됨");
