//학생 객체 여러 개 만들기 (리터럴, 팩토리, 생성자 등의 방법이 있다)
//선언형
function Student(ssn, name, korean, english, math) { //()안에는 Student함수가 받을 정보
    console.log(this); //이 this는 글로벌 (미리 만들어진 전역 객체)
    //this = {}; 
    //여기서 this는 눈에 안보이게 만들어지는데 student의 자신을 가리키는게 아니라 빈 객체이다
    this.ssn = ssn; //this를 꼭 써야 할까? 쓰지 않으면 해당 속성들은 Student 함수의 로컬 변수가 되며 생성된 객체에 속성이 추가되지 않는다. 
    this.name = name;
    this.korean = korean;
    this.english = english;
    this.math = math;
    this.getSum = function() {//메서드
        //생성자 안에서 단축메서드 못 쓴다. 단축 메서드는 리터럴에서 쓸 수 있는거다.
        return this.korean + this.english + this.math;
    },
    this.getAverage = function() {
        return this.getSum() / 3;
    },
    this.toString = function() {
        return `${this.ssn}\t${this.getSum()}\t${this.getAverage()}`; //getSum에서 ()안쓰면 안됨. 
    }
    //return this; 이거 생성자 함수 만들때 저절로 만들어져 쓸 필요 없다

    //이 this로 만들어진 객체를 인스턴스라고 한다
}

//생성자는 바로 호출이 안되고 new 키워드를 사용해야 한다. 
new Student(); //new는 키워드이자 연산자?
Student(); //이거는 일반 함수로 호출. 즉 다이렉트로 호출.
           //이거는 this가 안 만들어진 함수이다.
console.log(Student); //출력 : [Function: Student]

//생성자
const student = new Student(10, "김기정", 80, 90, 100);
       //메모리에는 인스턴스가 만들어지고 student에게 반환된거. 생성자가 인스턴스 만들고 그걸 반환.
console.log(student.name); //생성자 함수를 통해서 만들어진 객체
console.log(student.getSum());
console.log(student.getAverage());
// console.log(student.getAverage); 이거는 객체의 정보를 보는거다.


//new 키워드 빼고 해보기
const student2 = Student(10, "김기정", 80, 90, 100);
console.log(student2.name); //출력 : TypeError: Cannot read properties of undefined (reading 'name')
console.log(student2); //출력 : undefined 
                    //이건 일반 함수로 호출. 근데 우리가 위에서 return안썼으니 undefined로 출력된다. 
                    //원래 return 안쓰면 undefined가 출력됨 - 이건 기억해두자

console.log(global.name);
console.log(name); //글로벌은 접근할 때 생략가능

//학생의 모든 정보
console.log(student.toString());

//-----------------------------------------------
//공통 프로퍼티
//생성자 함수 객체에 프로퍼티 추가
//스태틱
//이를 전역 변수로 만들어도 기능은 똑같은데 생성자 객체 안에 넣는건 범위를 지정하는 것이다.
//즉 공통 기능을 쓸 애들만 접근할 수 잇도록 생성자 함수 객체 안에 만드는 거다. (스코프 생성)
//전역변수는 나중에 덮어질 수 잇다고 쓰지 말라는데 
Student.SchoolName = "코스타 중학교";
Student.sum = function (x,y) {
    return x = y;
}
console.log(Student.schoolName);
console.log(Student.sum(10, 20));

//-----------------------------\
//그렇다면 기능에 따라 용도에 따라 스코프를 나누는게 좋은 것인가?


