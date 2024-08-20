//Function 생성자 함수(내장)
//이는 동적함수를 만들 때 쓰는거다 _ 동적 함수 생성
// const sum = function name(){} <- 하드코딩 (지금까지, 정적)

const sum = new Function("x", "y", "return x + y"); //function sum(x,y,z) {return x+ y;}
const result = sum(10,20);
console.log(result);

//이 동적 함수는 내가 쓸 일은 별로 없고 자바스크립트 엔진이 많이 쓴다.

function sum (x, y) { //얘는 Function의 프로토타입이 부모이다
    return x +y;
}
