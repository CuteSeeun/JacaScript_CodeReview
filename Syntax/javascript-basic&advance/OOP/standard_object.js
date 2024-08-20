//자바스크립트 표준 내장 객체 (생성자 함수)
//String, Number, Boolean, Date, Array, ... : 기본 타입을 객체로 만들 수 있는 생성자
const str = new String("김기정"); //str은 인스턴스를 가리키는 참조 변수
                                //"김기정"이 프로퍼티로 들어간다.
                                //이렇게 한 순간 String이란 생성자 함수가 만들어진다

let num = "12345"; //자리수를 세는 기능이 없으니 Strgin이란 객체를 만든다
                   //기본 타입에는 값만 있다
const str2 = new String(num);
console.log(str.length);

let num2 = 34343;
const numObj = new Number(num2); //만약 new를 빼고 쓰면 형변환 코드이다
console.log(numObj);
let input = "56565"; //문자열로 받앗지만 연산을 해야할 때 형변환.
Number(input); //이는 new가 없어서 형변환 코드이다.
console.log(Number(input));
console.log(typeof Number(input));

const today = new Date();
console.log(today.toString());
