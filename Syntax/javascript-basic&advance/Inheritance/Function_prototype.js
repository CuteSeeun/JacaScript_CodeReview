//this에 대하여 _ 함수 안에서 글로벌 객체이고 많은 것을 포함하고 있다
function doTask() {
    console.log(this);
    global.console.log("출력")
    console.log(`이름 : ${this.name}, 나이 : ${this.age}`);
}

doTask();

const person = {
    name : "김기정",
    age : 10,
    doTeach : function () {
        console.log("강사님입니다");
        console.log(this);
    }
};
person.doTeach();
doTask.call(person);



//전달할 값이 있다
//어떤 객체에 프로퍼티를 추가하는 함수, 범용함수(어디서든 쓸 수 있는)
function addProperty(name, value) {
    this[name] = value;
}

//직접 호출, 내가 추가하는게 글로벌(전역)에 들어간다는 얘기이다
//어디에서든 접근 가능, 전역으로 공개된 것.
addProperty("grade", 5);
console.log(global.grade);
//간접 호출. 함수 객체 안에 call을 이용(상속 받은 걸 사용)
addProperty.call(person, "grade", 3);
console.log(person.grade);

addProperty.apply(person, ["address", "서울"]);
console.log(person);
                    
const returnMethod = addProperty.bind(person); 
 // -> 묶여진 메서드를 리턴한다. 그거 받으려고 const returnMethod = 를 쓴다
returnMethod("xx", {dogName : "루이"});
returnMethod("yy", {dogName : "루이"});
returnMethod("zz", {dogName : "루이"});
console.log(person);
