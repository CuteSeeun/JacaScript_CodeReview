"use strict"

const main = document.querySelector('.mainBox');
const inner = document.querySelector('.inner');
const table = document.querySelector('.table');
const tbody = document.querySelector('.tbody');
const pageDiv = document.querySelector('.page');
const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('.searchBtn');
const openPop = document.querySelector('.seebtn');
const popup = document.querySelector('.viewDetails')
const closebtn = document.querySelector('.closebtn')
const pop = document.querySelector('.popup')

const url = "http://localhost:7778/markets";

let currentPage = 1;
const itemPage = 10;
let alldata =[];
let filterData = [];

const marketAPI = (async()=>{
    try {
        const response = await fetch(url,{
            method:'GET',
            mode: 'cors', // CORS 모드 명시적 설정
            headers: {
              'Content-Type': 'application/json',
            },
        });
        const result = await response.json();
        alldata = result.data;
        filterData = alldata;
        renderPage(currentPage);
        renderPagination();
    } catch (error) {
        console.error("데이터 오류 발생" , error);
    }
})();

const renderPage =(page)=>{
    const startIndex = (page -1) * itemPage;
    const endIndex = startIndex + itemPage;
    const pageData = filterData.slice(startIndex,endIndex);
    let row = '';
    pageData.map((a,idx)=>{
            row += `
            <tr>
            <td>${startIndex + idx+1}</td>
            <td>${a.period === null ? '#확인필요' : a.period}</td>
            <td>${a.name === null ? '#확인필요' : a.name}</td>
            <td>
            <button class="seebtn"
                    data-period="${a.period === null ? '#확인필요' : a.period}" 
                    data-name="${a.name === null ? '#확인필요' : a.name}"
                    data-roadaddr="${a.roadaddr === null ? '#확인필요' : a.roadaddr}"
                    data-hmpg_addr="${a.hmpg_addr === null ? '#확인필요' : a.hmpg_addr}"
                    data-tel="${a.tel === null ? '#확인필요' : a.tel}"
            >상세보기</button></td>
            </tr>
            `
        })
        tbody.innerHTML=row;
};

const renderPagination=()=>{
    const totalPage = Math.ceil(filterData.length / itemPage);
    let pageNo = '';
    for (let i = 1; i <= totalPage; i++) {
        pageNo += `<button id="pagebtn" onclick="change(${i})"${i === currentPage ? "class='active btn btn-primary lh-1'" : ""}>${i}</button>`
    }
    pageDiv.innerHTML = pageNo;
}

const change = (page) =>{
    currentPage = page;
    renderPage(currentPage);
    renderPagination();
}

searchBtn.addEventListener('click',e=>{
    const searchValue = searchInput.value.trim();
    filterData = alldata.filter(a=> a.name && a.name.toLowerCase().includes(searchValue))
    currentPage = 1;
    renderPage(currentPage);
    renderPagination();
});

   
document.addEventListener('click',e=>{
    if(e.target && e.target.classList.contains('seebtn')){
        const period = e.target.getAttribute('data-period');
        const name = e.target.getAttribute('data-name');
        const roadaddr = e.target.getAttribute('data-roadaddr');
        const hmpg_addr = e.target.getAttribute('data-hmpg_addr');
        const tel = e.target.getAttribute('data-tel');
        
        // 팝업에 값 출력
       pop.innerHTML=`
       <img src="market.jpg" alt="">
         <div class="vertical-divider"></div>
        <div class="popup-content">
                <h3>${name}</h3>
                <p><strong>개시일:</strong> ${period}</p>
                <p><strong>주소:</strong> ${roadaddr}</p>
                <p>
                <strong>홈페이지 주소:</strong>
                <a href="${hmpg_addr}" target:"_blank">${hmpg_addr}</a>
                </p>
                <p><strong>전화번호:</strong> ${tel}</p>
            </div>
       `
        popup.style.display = "flex";
    }
})

window.addEventListener('click',e=>{
    if(e.target === popup){
        popup.style.display="none";
    }
})

