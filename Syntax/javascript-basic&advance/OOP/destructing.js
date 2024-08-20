//구조 분해 할당
const member = {
    name : '김기정',
    age : 30,
    speak() {//단축메서드
        console.log(this.name); //스코프상 name없으니깐 this를 써줘야 한다
    }
};

console.log(member.name);

const {name, age, speak} = member; //구조 분해 할당
                        //member 객체 안에 있는 프로퍼티를 분해 후 내가 원하는 변수에 할당할거다
console.log(name);
speak();//speak 호출
member.speak();

function hello () {
    console.log(this); //함수 안에서 this
}
hello(); //함수 안에서 this는 무엇으로 동작하는가 -> 노드 환경에서는 global
         //                                       -> 브라우저에서는 window
         //글로벌은 미리 만들어진 객체. 글로벌의 프로퍼티는 생략이 가능하다
console.log(this); //전역에서 this -> 이는 빈객체이다. 이는 모듈처리할 때 필요하다


console.clear(); //위의 출력값은 지운다.??? 뭔지 모르겟으
//배열
const array = ["월욜", "화욜", "수욜"]; //데이터를 한 번에 세 개 나열
console.log(array[0]); //배열은 무조건 대괄호로 접근

const [mon, tue, wed] = array;
console.log(mon);

//값 바꿔치기
let x =10, y = 20;
let temp = x;
x = y;
y = temp;
console.log(x,y);

x = 15, y = 30; //(재선언 되는데 왜 let을 쓰면 빨간줄이 나지?)
const [a,b] = [y,x]; //const로 구조 분해하고 배열로 x,y 바꾸기
console.log(a,b);

//중첩 객체 구조 분해 할당
const student = {
    name : "김기정", //김기정은
    score : {
        kor : 50,
        eng : 90,
        math : 80
    }, //여러과목의 성적을 보유
    friends : ["우도은", "양나연"] //여러 명의 친구들
};
//김기정의 국어 점수 출력
console.log(student.score.kor);
//김기정의 첫번재 친구 출력
console.log(student.friends[0]);//배열은 점을 접근 x, 대괄호로 접근하고 인덱스로 쓴다

const {name, score : {kor, eng, math}, friends : [f1, f2]} = student;
console.log(name);
console.log(kor);
console.log(f1);


