//자바스크립트에서 변수 선언 및 할당

//변수 선언
let age;
console.log(age); //undefined
//변수에 값(리터럴) 저장
age = 25
//변수의 값 사용
console.log(age);

//선언과 동시에 할당
let name = 'dog';
let xyz = null;
console.log(name);

//필요에 따라 변수에 저장된 값 수정
age = 51;
console.log(age);

let weight = null;
weight = weight + 10; 
console.log(weight);


// let x, y;
// x = 10, y = 20;

let x = 10, y = 20;
console.log(x, y);

let name2 = '최세은'; // name 변수는 스트링이 된다
name2 = 5; // 자동형변환
console.log(name2);

//동적타이핑
name = 1000; //자동형변환, name은 넘버 타입이 되는거다. 
name = true; //자동형변환, boolean타입이 되는거다
console.log(name);

//식별자 관례
let inputMone = 100; //카멜 스타일
let my_name ='공주'; //스네이크 스타일