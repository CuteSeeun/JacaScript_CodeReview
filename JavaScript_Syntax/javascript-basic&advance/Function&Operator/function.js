//함수 리터럴 표현식을 이용한 함수 정의
//함수 자체를 값처럼
//참조변수 sum
let sum = function(x,y) {
    return x + y;
};

//식별자 호출
console.log(sum); //이건 함수의 정보만 나온다
let result = sum(10, 20); //함수 호출
console.log(result);
//위의 두줄은 출력되는데 왜 sum(10, 20);으로 코드를 작성하면 값이 출력안될까..?

//화살표 함수를 이용한 함수 정의
//참조변수 
let num = (x, y) => {
    return x + y;
};// let num2 = (x,y) => x + y; 위와 동일. return이 없어도 리턴됨

let squre = (x) =>x * x;

let greeting = () => "안녕하세요";

console.log(num);
let result2 = num(10, 20);
console.log(result2);

console.log(num(10, 20));
console.log(squre(10, 20));
console.log(greeting(10, 20));
//화살표 함수는 무언가를 전달할 때 주로 쓴다

//즉시 실행 함수
(function(){
    console.log('즉시 실행 함수...');
})(); //첫번째 ()는 즉시 실행 ();이거는 바로 실행
//이는 선언과 동시에 실행이 이루어지기에 초기화 작업, 일회성 동작 등에 많이 활용된다


//콜백함수 (고차함수) 정의
//데이터는 있는데 출력대상이 다르나 코드가 중복될거 같다
function print(name, message, callback) {//callback은 기능을 매개변수로 받는다
    let chat = `[${name}] : ${message}`;
    console.log(chat); //문자열 보간 쓰고 싶으면 백틱써야 한다. 데이터를 가지고 있다
    callback(chat); //출력하는 기능
}

//선언형 함수 
function console2(chat) {
    console.log("콘솔창에 메시지 출력");
    console.log(chat);
}

print("김기정", "안녕하세요", console2);

//익명으로 만들면 덮어질 일도 없다. 이게 뭔말인가
print("박기정", "hello", function(chat2){//인자로 익명함수 받는다. 
    console.log('윈도우 창에 메시지 출력');
    console.log(chat2);
});
//위의 코드를 람다식으로 바꾸면 다음과 같다
/*
print("이기정", "hi", chat => {
    console.log(chat);
    console.log("냥냥")   // 두 줄 이상이면 중괄호({})를 넣어야 함
    })
*/


//연산자만 매개변수로 받아서 계산되도록 만들어보자, 고차함수로 만들어보자
const calculate = function(x, y, fn) {
    //값 두 개와 연산자를 받아야 한다
    
    return fn (x, y); //콜백함수 호출, 전달받은 함수도 리턴
}

let x = 10, y = 5;
//calculate(x, y, (x,y) => x * y);
let result3 = calculate(x, y, (x,y) => x * y);
console.log(result3);
