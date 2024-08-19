let x = 8;
switch (x) {
    case 10: console.log('10이다'); break;
    case 9: console.log('9이다'); break;
    case 8: console.log('8이다');break;
   default: console.log('일치하는 숫자가 없습니다');//조건이 일치하지 않을 때
        break;
}

//switch문 예시
let input = 2;
switch(input) {
    case 1: console.log('자바를 좋아하는군'); break;
    case 2: console.log('자바스크립트를 좋아하는군');
    case 3: console.log('파이썬을 좋아하는군'); break;
    default : console.log('x');
}

//switch을 사용해 a,b,c 학점을 출력해보자_개노가다
//강제 형 변환을 함수를 이용해서 해보자
let score = 88;
//let grade = parseInt(score/10);
// console.log(grade);
switch (score){
    case 10: console.log('A+');
    case 9: console.log("A");
    case 8: console.log("B");
    case 7: console.log("C");
    case 6: console.log("D");
    default: console.log("F");
}