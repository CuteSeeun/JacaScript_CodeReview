//import {  } from "module"; 이렇게 쓰지 않고 그냥 콜백(프로미스)을 사용한다 


//서버 쪽에 비동기로 메세지 요청하는 메서드
export const get = function (url, success, fail) {
    const xhr = new XMLHttpRequest(); 
    xhr.open("GET", url);
    xhr.addEventListener("load", (event) =>{
        if(xhr.status === 200){
            success(JSON.parse(xhr.responseText));
        }else{
            fail(xhr.status);
        }
    } );
    xhr.send();
}
