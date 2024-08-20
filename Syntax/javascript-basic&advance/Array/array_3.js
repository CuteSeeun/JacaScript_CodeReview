//학생 목록 저장을 위한 배열
const students = []; //const로 선언되어있는데 그래도 전역에 선언한 것이 위험할까?
//학생 등록 _ 배열을 통해 관리되고 있다
students.push({ name: "김기정", score: 88 });
students.push({ name: "김정연", score: 98 });
students.push({ name: "최세은", score: 100 });
students.push({ name: "남윤호", score: 90 });

//우리반 학생목록 출력
//객체만 가져올거다 _ for..of 문
for (const student of students) {
    console.log(`${student.name}\t${student.score}`);
}

//정확히는 students를 바라보고 있는 참조를 전달한거다. _ 왜 배열 자체를 전달하지 않고 참조 값을 전달해주느데?
const printStudents = function (students) { //출력하고자 하는 배열을 통으로 매개변수로 넣어주자
    //콜바이밸류 _ 주소값을 전달 : 배열을 매개변수로 하면 그것은 주소갑승ㄹ 주고 받는 것인가?
    for (const student of students) {
        console.log(`${student.name}\t${student.score}`);
    }
}
printStudents(students);

//사이드이펙트 _ 분명 4개를 전달했는데 어디선가 추가되었을 때 -> 이를 방지하기 위해 (원본 배열은 건들면 안된다)
const printStudents1 = function (students) {
    for (const student of students) {
        //push 하는 코드가
        // students.push({ name: "강도", score: 90 });

        console.log(`${student.name}\t${student.score}`);
    }
}
printStudents1(students); //이는 원본을 전달. 우리는 사이드 이펙트를 방지하기 위해 복사본을 줘야 한다.

//복사본 배열
//만약 복사본이 훼손되었을 때 훼손된 복사본이 출력되는건가?
let copyStudents = [];
for (const student of students) {
    copyStudents.push(student);
}
printStudents1(copyStudents);

//더 쉽게 복사하는거
printStudents1([...students]);

//--------------------------------------------------------------------
//위 질문에 대한 답
/*
자바스크립트에서 배열을 복사해서 전달할 때, 원본 배열의 주소값이 전달되는 것이 아니라 
복사본의 주소값이 전달됩니다. 이것은 자바스크립트의 객체와 배열이 
참조 타입(reference type)이기 때문에 발생하는 동작
*/

/*
자바스크립트에서 배열과 객체는 참조 타입이다. 참조 타입의 값은 실제 데이터가 아니라 데이터의 위치르르
참조하는 주소를 저장한다. 따라서 배열을 복사하거나 함수에 전달할 때 실제 데이터가 아니라 데이터의 참조가 전달된다.

배열을 복사하여 함수에 전달하면 원본 배열은 변경되지 않는다. 배열을 복사하는 방법으로 slice(), spread operator, Array.from()등을 사용할 수 있다.

원본 배열과 복사본 배열은 요소값은 같으나 주소값만 다르다고 이해하면 될거 같다.
그러나 배열의 요소가 참조 타입일 경우 이 참조 타입의 요소들은 원본과 복사본 모두에서 같은 주소를 가질 수 있다.

배열을 복사하면 원본 배열과 복사 배열 자체의 참조값은 다르지만 배열 안에 있는 값들이
참조 타입이라면 원본 배열과 복사 배열의 참조값은 같아진다



*/

//----------------------------------------------------------------------

//학생들의 성적 총점을 구하고 싶다
let sum = 0;
for (const student of students) {
    sum += student.score;
}
console.log(`성적 총점 : ${sum}`);

//검색 기능을 만들어보자
const searchByName = function (name) { //학생 이름을 매개변수로 받는다
    for (const student of students) {
        if (student.name === name) {
            return student; //해당하는 학생 이름이 있으면 학생 객체를 반환
        }
    }
    return undefined; //조회한 학생이 없을 때
}

let inputName = "김기정";
const searchedStudent = searchByName(inputName);
if (searchedStudent) {
    console.log(`${searchedStudent.name}\t${searchedStudent.score}`); //찾았을 때 객체 반환
}else{
    console.log("해당 학생이 존재하지 않습니다."); //위에서 학생이 없을 때 -1로 반환하면 true로 되니깐 undefined로 바꾼거다.
}