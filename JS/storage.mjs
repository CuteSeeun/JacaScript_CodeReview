//로컬 스트리지 관련 기능
import { getStudentList, addStudent } from './student.mjs';

//#region 학생 목록을 로컬 스토리지에 저장하는 함수
export function saveToLocalStorage() {
    const studentList = getStudentList();  // studentList의 복사본을 가져옴
    localStorage.setItem('students', JSON.stringify(studentList));
}
//#endregion

//#region  로컬 스토리지에서 학생 목록을 불러오는 함수
export function loadFromLocalStorage() {
    const savedStudents = JSON.parse(localStorage.getItem('students'));
    if (savedStudents) {
        savedStudents.forEach(({ sno, name, kor, eng, math}) => {
            addStudent(sno, name, kor, eng, math);
        });
    }
}
//#endregion