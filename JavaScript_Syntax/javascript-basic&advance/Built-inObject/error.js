//자바스크립트 엔진의 기본 오류 처리
console.log("[프로그램 시작됨]");
//에러 전파 : 간단한 것은 foo 함수안에 처리하지만 전파 하기 위해서는 
const foo = function () {
    try{
        //console.log(name());
        const number = 10;
        console.log(number.substring(0, 1));
        
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log("에러처리");
        }else{
            throw error; //만약 else문만 실행되었다면 오류처리가 안된거다. 그래서 throw로 넘겨줬는데 밑에 bar에서 에러 처리를 안해준거다. 
        }
    }
}

const bar = function() {
    foo();
    console.log("bar 실행됨..");
}
try{
    bar();
}catch(error) {
    console.log(error.message);
    console.log("전역에서 에러 처리");
}


/*

try {
console.log(name()); //레퍼런스 에러
const number = 10;
console.log(number.substring(0,1));//타입 에러 (.찍는 순간 number객체로 바뀐다. 근데 넘버 객체에는 substring이 없다)
}catch(error) { //이 에러에 어떤 에러가 들어올지 모른다.
    //console.log(error.name);
    //console.log(error.message);
    //console.log(error.stack);
    if (error instanceof ReferenceError) {
        console.log("ReferenceError 처리 완료");
    }else if (error instanceof TypeError) {
        console.log("TypeError 처리 완료");
    }else {
        console.log("범용 에러 처리 완료");
    }

}//캐치 블록이 끝나면 다른 블록으로 넘어간다
finally{//예외 상관 없이 항상 실행
    //주로 비용이 많이 드는 리소스 메모리 해제
    console.log("나는 항상 기요미");
}
*/

console.log("[프로그램 종료됨]");
