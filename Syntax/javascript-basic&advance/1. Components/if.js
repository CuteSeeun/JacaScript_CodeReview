let x = 18;
//x가 10과 20사이일때만 프로그램이 돌아가도록 하고 싶다
if (x >= 10 && x <= 20) {
    console.log('x의 값은 10과 20사이이다');
}
else {
    console.log('x의 값은 10과 20사이가 아니다');
}

let score = 77;
if (score >= 60) {
    console.log('Success');
} else {
    console.log('Fail');
}

//자바스크립트는 조건에 true, false아니어도 된다
if (0) {
    console.log('예스');
}
else {
    console.log('노우');
}

if (!undefined) {
    console.log('바보');
}

//사용자가 입력안하고 선언만 되어있다고 치자
let inputName;
if (!inputName) //not undefined는 true임 //inputName = !undefined와 같은 거임
{
    console.log(inputName);
}
else {
    console.log('이름을 입력하지 않았습니다');
}

//다중 if
if (score > 90) {
    console.log('A');
} else if (score >= 80) {
    console.log('B');
} else {
    console.log('C');
}



