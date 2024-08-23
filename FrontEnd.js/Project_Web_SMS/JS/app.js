//등록, 삭제, 검색, 정렬에 대한 이벤트 //테이블 렌더링

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
    /*위 메서드 안쓰면 전에 저장햇던 데이터를 불러오지 않는다 */
    
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


//#region 클릭 이벤트 설정

//addBtn 버튼에 클릭 이벤트 핸들러 설정. 폼에서 데이터를 읽고 학생을 추가, 로컬 스토리지에 저장, 순위를 업데이트하고 테이블 다시 렌더링.
document.addEventListener('DOMContentLoaded', () => {

    //html 요소 선택      
    const addBtn = document.getElementById('addBtn');// 등록 버튼
    const deleteBtn = document.querySelector('button.btn-warning');//삭제 버튼
    const searchBtn = document.getElementById('searchBtn');// 검색 버튼
    const searchSelect = document.getElementById('searchSelect');// 검색 기준 선택
    const searchInput = document.getElementById('searchID');// 입력 필드
    const sortSelect = document.getElementById('sortSelect');//정렬 기준 선택
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
        const sno = form.sno.value.trim(); //sno값을 폼에서 가져와서 변수에 저장

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

    // 검색 버튼 클릭 이벤트 핸들러 등록
    searchBtn.addEventListener('click', () => {
        const searchCriteria = searchSelect.value; //검색 기준 가져오기
        const searchValue = searchInput.value.trim(); //검색 값 가져오기
        const studentList = getStudentList();//데이터 배열 가져오기

        let filteredList = [];

        //정규표현식을 쓰면 입력한 값을 자꾸 false로 줘서 정규표현식의 유효성을 빼고 해보자

        //학번을 비교
        if (searchCriteria === 'ssn') {
            //const searchValueAsNumber = parseInt(searchValue); // 검색 값을 숫자로 변환

            // student.sno와 검색 값을 비교하여 필터링
            filteredList = studentList.filter(student => student.sno === searchValue);

            if (filteredList.length === 0) {
                alert('일치하는 학생이 없습니다.');
            } else {
                renderStudentTable(filteredList);
            }
        }
        // 검색 기준이 'name'일 때: 이름으로 검색
        else if (searchCriteria == 'name') {

            filteredList = studentList.filter(student => student.name === searchValue);
            console.log(4);

            if (filteredList.length === 0) {
                alert('일치하는 학생이 없습니다.');
            } else {
                renderStudentTable(filteredList);
            }
        }
        else {
            alert('검색 기준을 선택해주세요.');
        }
    });

    //정렬 드롭다운 클릭 이벤트 핸들러 등록
    sortSelect.addEventListener('change', () => {
        const sortCriteria = sortSelect.value;
        const studentList = getStudentList(); // 학생 목록 가져오기

        // 정렬 함수
        const sortFunction = (a, b) => {
            if (sortCriteria === 'rank') {
                return a.rank - b.rank; // 내림차순
            } else if (sortCriteria === 'ssn') {
                return a.sno.localeCompare(b.sno); // 내림차순
            } else if (sortCriteria === 'name') {
                return a.name.localeCompare(b.name); // 내림차순
            }
        };

        // 학생 목록 정렬
        studentList.sort(sortFunction);

        // 정렬된 목록 렌더링
        renderStudentTable(studentList);
    });

    init();

});
//#endregion


init();