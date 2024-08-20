//자바스크립트 실행 진입점 역할의 파일
import {MAX_VALUE, student, fruits, sum} from "./module.js";
import Student from "./student_defaultExport.js";

console.log(MAX_VALUE);
console.log(student);
console.log(fruits);
console.log(sum(10, 20));

//Student 객체 생성
const student2 = new Student("최세은");
console.log(student2);
