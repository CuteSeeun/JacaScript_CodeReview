//Number 객체 _ 생성자 함수
const number = 1004.255452; //이 숫자가 몇 자리로 구성되어 있는지 궁금할 때
//일단 문자열로 바꾼다
console.log(number.toString()); //인자 값 없을 때 십진수로 변환한다.
console.log(number.toString().length); //11자리
console.log(number.toString(2));//이진수로 바꿔서 출력

console.log(number.toFixed());//소수점 이하를 반올림한다. 인자를 적지 않으면 0으로 인식해서 소수점은 반올림해서 정수로 반환
console.log(number.toFixed(1));//소수점의 첫 번째까지 보여준다
console.log(number.toFixed(2));//소수점의 두 번째까지 보여준다

const numberObject = new Number(number); //Number라는 생성자를 통해 인스턴스가 만들어지고
//만약 new를 빼면? 생성자가 아니라 함수 호출. 그래서 형변환 함수로 동작한다 

const str = "54545454";
//형변화시켜서 숫자로 바꾸기 1.parseInt 2.Number를 함수로 호출
const n = Number(str);
console.log(typeof n);