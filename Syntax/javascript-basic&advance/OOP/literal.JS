//객체 리터럴 표현식
/*const는 주소값 못 바꾸게 하려고 쓴다.
함수나 객체는 무조건 const로 선언한다. 주소값 못 바꾸게.*/

const empty = {}; //빈 객체, 근데 많은게 들어있긴 하다
console.log(typeof empty);

//프로퍼티 두 개 있는 함수
const point = {
    x : 10, //x라는 프로퍼티에 10의 값을 담는다
    //["x-y"]로 쓸 수 있다. 동적으로 처리할 때. 대괄호 안 자체가 뭐시기.
    y : 20  //프로퍼티는 기본적으로 public이다
};
console.log(point);

//포인트 객체에 있는 x값을 읽어오고 싶다
console.log(point.x); //객체 point의 프로퍼티 x에 접근할때 쓰는 연산자는 .
console.log(point["x"]);
// console.log(point.x-y);//이건 안됨


//회원 객체 생성 
const user = {//객체에 접근하기 위한 변수 생성
    name : "기요미",
    email : "seeun2190@gmial.com",
    address : "잠실",
    buy : function (item) {
        console.log(`${this.name}님이 ${item.name}을 구매하였습니다`); //${name}을 쓰면 현재 스코프에서 name을 찾는다
        //그래서 this를 쓴다. 이는 참조변수이다.
        //동작하는 메모리에 접근할 수 없다. 나를 포함한 객체에 접근할 때 this를 쓴다.
        //user는 내가 선언한 변수이고 자바스크립트 엔진이 접근할 때 this를 쓴다.
        //user.name을 쓰면 변수명 바꿀 때마다 바꿔줘야 하니 유지보수가 어려워진다.
    }
};
//물품을 나타내는 객체
const item = {
    name : "노트북",
    price : 100000
};

console.log(user);
console.log(user.name); //참조변수, 유저 객체의 이름을 읽어보자
user.buy(item);

//동적 프로퍼티를 추가 및 삭제를 해보자 _ 할당연산자 사용
user.id = "cute";
//메소드 추가
user.order = function(item) {
    console.log(`${item.name}을 주문하였습니다`);
}
console.log(user);
user.order({
    name : "메타 오큘러스",
    price : 100000
}); //식별자를 통해 호출


