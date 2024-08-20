//기본 매개변수
let multiply = function(x ,y ) {
    return x * y;
}

let result = multiply(7,2);
console.log(`결과 : ${result}`); //결과 : 14

result = multiply(7);
console.log(`결과 : ${result}`); //결과 : NaN

let defaultGreeting = function(name){
    console.log(`${name} 방가`);
}

let greeting = function (name = "손님", fn = defaultGreeting){//콜백이 기능으로 들어옴
    fn(name); //전달받은거를 호출
}

greeting('김기정', (name) => {console.log(`${name} 방가`);}); //두번째에 콜백을 전달.콜백함수는 화살표를 많이 씀
greeting('bangry');