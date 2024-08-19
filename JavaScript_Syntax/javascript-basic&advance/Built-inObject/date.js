//날짜 관련하여 다양한 객체 생성해보기
//Date

//현재 시스템 날짜, 시간
let now = new Date();
console.log(now);

//1970년 1월 2일
let someDay = new Date(1000 * 60 * 60 * 24); //다음날
//특정 날짜의 객체를 만들때 밀리세컨드를 쓴다
console.log(someDay);

//숫자 혹은 특정 날짜를 지정하는 것도 할 수 있다
someDay = new Date("1970-01-02T00:00:00.000Z");
console.log(someDay);

someDay = new Date(1970, 1, 3, 12, 30, 25); //월은 -1을 해야 한다. 0이 1월이라서
console.log(someDay);

console.log(now.toString()); //모든 객체가 toString을 가지고 있다
console.log(now.toDateString()); 
console.log(now.toLocaleString());//우리나라 형태로 리턴 

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getTime());//밀리세컨즈는 월을 넘어가면 안된다
console.log(now.getDay());

const myBirth = new Date();
const nowTime =myBirth.getTime();

myBirth.setDate(1968, 3-1, 13);
const beforeTime = myBirth.getTime();
console.log((nowTime - beforeTime) / (1000 * 60 * 60 * 24) );

//오늘부터 5일 후 날짜 출력
now = new Date();
now.setDate(now.getMonth() + 3); //set에 의해 특정 날짜가 정해진것
now.setDate(now.getDate() + 3);
console.log(now.toLocaleString());

//static 메서드
const start = Date.now();
for(let i = 0; i < 1000000000; i++) {
    console.log(i);
}
const end = Date.now();
console.log(end - start);