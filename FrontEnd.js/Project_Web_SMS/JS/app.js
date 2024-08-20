//등록, 삭제, 검색, 정렬에 대한 이벤트

//#region 모듈
//모든 모듈 가져오기
import { saveToLocalStorage, loadFromLocalStorage } from './storage.mjs';
import { addStudent, deleteStudent, getStudentList, updateRanks } from './student.mjs';
//#endregion

//#region 테이블 렌더링 메서드
//테이블에 학생 데이터를 렌더링하는 함수
function renderStudentTable(studentList) {
    const tbody = document.querySelector('table tbody');
    tbody.innerHTML = ''; // 기존 테이블 내용 비우기

    studentList.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.sno}</td>
            <td>${student.name}</td>
            <td>${student.kor}</td>
            <td>${student.eng}</td>
            <td>${student.math}</td>
            <td>${student.total}</td>
            <td>${student.average.toFixed(1)}</td>
            <td>${student.rank}</td>
        `;
        tbody.appendChild(row);
    });
}
//#endregion



//#region  초기 로드 시 학생 리스트 렌더링
//초기 로드 시 로컬 스토리지에서 학생 데이터 로드 및 렌더링
function init() {
    loadFromLocalStorage(); // 초기화 시 로컬 스토리지에서 학생 데이터 로드
    renderStudentTable(getStudentList()); //학생 리스트를 ui에 렌더링

    // 더미 데이터 (중복 방지)
    addStudent('123456', '홍길동', 85, 90, 95);
    addStudent('789012', '김철수', 80, 85, 88);
    addStudent('345678', '이영희', 92, 78, 84);

    //데이터 추가 후 로컬 스토리지에 저장
    saveToLocalStorage();
    //renderStudentList(getStudentList()); // 최신 상태 렌더링
}
//#endregion



// 테이블을 정렬하는 함수
function sortStudentList(criteria) {
    const studentList = getStudentList();

    // 정렬 기준에 따라 학생 리스트 정렬
    if (criteria === '순위') {
        studentList.sort((a, b) => a.rank - b.rank);
    } else if (criteria === '번호') {
        studentList.sort((a, b) => a.sno.localeCompare(b.sno));
    } else if (criteria === '이름') {
        studentList.sort((a, b) => a.name.localeCompare(b.name));
    }

    return studentList;
}



//#region 클릭 이벤트 설정

//addBtn 버튼에 클릭 이벤트 핸들러 설정. 폼에서 데이터를 읽고 학생을 추가, 로컬 스토리지에 저장, 순위를 업데이트하고 테이블 다시 렌더링.
document.addEventListener('DOMContentLoaded', () => {

    //버튼
    const addBtn = document.getElementById('addBtn');// 등록 버튼
    const deleteBtn = document.querySelector('button.btn-warning');//삭제 버튼
    const searchBtn = document.querySelector('button.btn-primary');// 검색 버튼
    const searchSelect = document.querySelector('select.form-select');// 검색 기준 선택
    const searchInput = document.querySelector('input.form-control');// 입력 필드
    const form = document.forms['inputForm'];// 입력 폼

    // 등록 버튼 클릭 이벤트 핸들러 등록
    addBtn.addEventListener('click', () => {
        const sno = form.sno.value.trim();
        const sname = form.sname.value.trim();
        const kor = parseInt(form.kor.value.trim(), 10);
        const eng = parseInt(form.eng.value.trim(), 10);
        const math = parseInt(form.math.value.trim(), 10);

        // 유효성 검사 및 학생 추가
        if (sno && sname && !isNaN(kor) && !isNaN(eng) && !isNaN(math)) {
            addStudent(sno, sname, kor, eng, math);
            saveToLocalStorage();
            updateRanks(); // 순위 계산
            renderStudentTable(getStudentList()); // 테이블 업데이트
        } else {
            alert('올바르게 입력해주세요.');
        }
    });

    // 삭제 버튼 클릭 이벤트 핸들러 등록
    deleteBtn.addEventListener('click', () => {
        const sno = form.sno.value.trim();

        if (sno) {
            if (deleteStudent(sno)) {
                saveToLocalStorage(); // 로컬 스토리지 업데이트
                renderStudentTable(getStudentList()); // 테이블 업데이트
            } else {
                alert('해당 학번의 학생을 찾을 수 없습니다.');
            }
        } else {
            alert('학번을 입력해주세요.');
        }
    });


    /*
    // 검색 버튼 클릭 이벤트 핸들러 등록
    searchBtn.addEventListener('click', () => {
        const searchCriteria = searchSelect.value;
        const searchValue = searchInput.value.trim();

        if (searchCriteria === 'ssn') {
            if (isNaN(searchValue) || searchValue === '') {
                alert('번호 검색 시 숫자만 입력해주세요.');
                return;
            }
        } else if (searchCriteria === 'name') {
            if (searchValue === '') {
                alert('이름 검색 시 문자열을 입력해주세요.');
                return;
            }
        }

        const studentList = getStudentList();
        let filteredList;

        if (searchCriteria === 'ssn') {
            filteredList = studentList.filter(student => student.sno === searchValue);
        } else if (searchCriteria === 'name') {
            filteredList = studentList.filter(student => student.name === searchValue);
        }

        renderStudentTable(filteredList);
    });
    */

    const sortSelect = document.getElementById('sortSelect');
    sortSelect.addEventListener('change', () => {
        const sortCriteria = sortSelect.value;
        const sortedList = sortStudentList(sortCriteria);
        renderStudentTable(sortedList); // Render sorted data
    });

    init();

});
//#endregion


/*
// "등 록" 버튼 클릭 이벤트 등록
document.getElementById('addBtn').addEventListener('click', () => {
    const form = document.forms['inputForm'];
    const sno = form.sno.value.trim();
    const sname = form.sname.value.trim();
    const kor = parseInt(form.kor.value.trim(), 10);
    const eng = parseInt(form.eng.value.trim(), 10);
    const math = parseInt(form.math.value.trim(), 10);

    if (sno && sname && !isNaN(kor) && !isNaN(eng) && !isNaN(math)) {
        addStudent(sno, sname, kor, eng, math);
        saveToLocalStorage(); // 로컬 스토리지에 저장
        renderStudentTable(); // 테이블 업데이트
    } else {
        alert('모든 필드를 정확히 입력해주세요.');
    }
});
*/

init();