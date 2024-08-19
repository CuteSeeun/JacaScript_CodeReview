//자바스크립트가 지원하는 연산자들

//산술연산자(+, -, *, /, %)
let x = 50, y =10;
console.log(x + y);
console.log(x - y);
console.log(x / y);
console.log(x % y);

let name = '김기정';
let age = 40;
let job = '강사';
let info = age + name + job;

console.log(info);

//복합대입 연산자
x = 50;
// x = x + 10;
x += 10;
x *= 10;
x %= 10;
console.log(x);

//증감 연사자
x = 10;
x = x +1;
x += 1;
x++; //이하 같음
console.log(x);

x=10;
console.log(x++);
x++;
console.log(x);
++x;
console.log(x);
console.log(++x);

//비교연산자
x = 10, y = 5;
console.log(x == y);
console.log(x != y);
console.log(x > y);
console.log(x >= y);
console.log(x < y);

let z = '10';
console.log(x == z); //동등비교
console.log(x === z); //일치비교

//논리 연산자
x = true, y = false;
console.log(x && y);
console.log(x || y);
console.log(!x);

//x의 변수 값이 10이상이고 20이하의 숫자가 들어잇으면 true, 아니면 false가 출력되도록
x = 15;
let result = x >= 10 && x <= 20 // 실행순서 1. x>=10 2. x <= 20 3. && 4. =
console.log(result);

//조건 삼항 연산자
let score = 90;
result = score >= 60 ? '성공' : '실패'
console.log(result);

//과제
x = 5, y = 3, z = 7;
//x~z 중 최대값을 출력해보자
//1. max값을 선언한다
let max = 0;
//2. 두개씩 비교해서 큰 값을 넣어놓는다 (항상 코딩은 한번에 모든걸 코드를 짤 수 없다. 차례대로)
max = x>y ? x:y;
max = max> z ? max:z;
//max = x >= z ? x >= y : y >= z 한번에 하려고 
//3. 출력
console.log('x,y,z에 저장된 숫자 중 최대값은 '+ max +' 입니다');


//연산자 우선순위
console.log(1 + 2 * 3);
console.log((1 + 2) * 3);

//특정 학생의 성적을 입력해서 총점과 평균을 출력해보자
name = "김기정"
let kor = 50, eng = 100, math = 30;
let sum =kor + eng + math;
let avg = sum / 3;
console.log(''+name+' 김기정 학생의 성적이다');
console.log('총점: '+sum+', 평균 : '+avg+'');