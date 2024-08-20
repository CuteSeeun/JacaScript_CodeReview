//typeof연산자는 기본 타입과 참조 타입을 구분할 때 쓴다 (옛날 방식..?)
let x =10;
console.log(typeof x);

x = "김기정";
console.log(typeof x);

x = function() {
    console.log("abc");
}
console.log(typeof x);

//객체
x = {
    //구성 요소
}
console.log(typeof x);

//----------------------------------------------------------

//단축 평가_두개의 변수를 받아서 처리하는 함수를 만들어보자
function add(x, y) {
    x = x || 0;
    y = y || 0; 
    return x + y;
}

function add(x = 0, y = 0) { //디폴트 파라미터
    return x + y;
}

let a = add(10, 20);
console.log(a);
a = add(10);
console.log(a);
add();
