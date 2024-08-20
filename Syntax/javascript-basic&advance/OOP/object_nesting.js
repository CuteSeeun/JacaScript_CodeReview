//평균내는 시스템 만들어보기
const student = {
    name : '김기정',
    grade : 1,
    number : 10,
    score : {
        kor : 70,
        eng : 90,
        math : 50,
        sum : function () {//이건 값이나 객체가 아니라 기능
            return this.kor + this.eng + this.math;
        },
        average : function() {
            return this.sum () / 3;
        },
    },
    //기능을 추가, 이는 
    printInfo : function() {
        console.log(`${this.grade}\t${this.number}\t${this.name}\t${this.score.sum()}\t${this.score.average()}`);
    }
};

const student2 = 

//밑에 코드들은 일회성, 외부에서 접근하는 코드이다
console.log(student.name);
console.log(student.score.sum());
console.log(student.score.average());

//이 코드 하나로 위에 콘솔 코드 3개가 필요 없어진다
student.printInfo();


//in연산자 : 특정 속성이 객체 내에 존재하느니 확인하기 위해 사용
//            및 배열의 인덱스가 존재하는지 확인하기 위해서 사용. 
console.log("grade" in student);
//if ("printInfo" in student) {
if(student.printInfo !== undefined){
    student.printInfo();
}

//for_in 반복문. 모든 프로퍼티 반복. 모든걸 보여준다
for (const key in student) {
    console.log(key);
}
//데이터만 보여주고 싶을때(메소드 제외하고)
//account에 
//프로퍼티 이름은 모두 문자열 그래서 key에 접근
for (const key in student) {
    if ( (typeof student[key]) === "function"){
        //if ((typeof student.key) === "function")으로도 해보자.
        //위는 undefined로 나온다 그래서 대괄호로 접근해야 한다.
        continue;
    }
    console.log(key);
}

