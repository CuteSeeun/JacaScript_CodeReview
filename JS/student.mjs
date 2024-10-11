//학생 정보 처리 클래스

//#region Student클래스와 학생 목록 배열
export class Student {
    constructor(sno, name, kor, eng, math) {
        this.sno = sno;   // 학번
        this.name = name; // 이름
        this.kor = kor;   // 국어 점수
        this.eng = eng;   // 영어 점수
        this.math = math; // 수학 점수
        this.total = this.calculateTotal(); // 총점
        this.average = this.calculateAverage(); // 평균
        this.rank = 0;
    }
    // 총점 계산 메서드
    calculateTotal() {
        return this.kor + this.eng + this.math;
    }
    // 평균 계산 메서드
    calculateAverage() {
        return this.calculateTotal() / 3;
    }
}

// 학생 목록 관리 _ 추가 삭제 검색
let studentList = [];
export function getStudentList() {
    return [...studentList]; // 복사본 반환
}
//#endregion


//#region 학생 추가 메서드
// 학생 데이터 추가 함수
export function addStudent(sno, name, kor, eng, math) {
    //학번으로 중복 체크
    if (studentList.some(student => student.sno === sno)) {
        console.warn(`이미 등록되어 있습니다.`);
        return;
    }

    const newStudent = new Student(sno, name, kor, eng, math);
    studentList.push(newStudent);
    updateRanks(); // 순위 업데이트
}
//#endregion


//#region 학생 삭제 메서드
export function deleteStudent(sno) {
    const initialLength = studentList.length;
    studentList = studentList.filter(student => student.sno !== sno);

    if (studentList.length < initialLength) {
        updateRanks(); // 순위 업데이트
        return true; // 삭제 성공
    }

    return alert("해당 학생은 존재하지 않습니다"); // 삭제 실패 (해당 학번의 학생이 존재하지 않음)
}
//#endregion


//#region 순위 계산 메서드
//오름차순 정렬 
export function updateRanks() {
    studentList.sort((a, b) => b.total - a.total);
    studentList.forEach((student, index) => {
        student.rank = index + 1;
    });
}
//#endregion
