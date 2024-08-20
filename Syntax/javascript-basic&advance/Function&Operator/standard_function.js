let inputNum = parseInt("30");
console.log(typeof inputNum);
console.log(inputNum + 20);

let age = "40살"
age = parseInt(age);
console.log(age + 17);
console.log("67.89" * 10); //곱하기는 더하기랑 다르게 형 변환이 숫자에 우선순위가 있다

let num = Number("500");
console.log(typeof num);

//isNaN이 필요한 이유
console.log(NaN === NaN);

num2 = "박기정"
if(isNaN(num2)) {
    console.log('숫자를 입력하여 주세요');
}

//3초후 로그 출력
setTimeout(() => {console.log('오늘은 즐거운 금요일입니다');}, 3000);

//1초 주기로 로그 출력
let count = 0;
let timer = setInterval(()=>{
    console.log(++count);
}, 100);

clearInterval(time);