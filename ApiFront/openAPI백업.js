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

const url = "https://smart.incheon.go.kr/server/rest/services/Hosted/전통시장/FeatureServer/47/query?where=1%3D1&outFields=name,type,addr,period,hitems,toiletsyn,parkingyn,odate,tel&outSR=4326&f=json";

let currentPage = 1;
const itemPage = 10;
let alldata =[];
let filterData = [];

const marketAPI = (async()=>{
    try {
        const response = await axios.get(url);
        alldata = response.data.features;
        filterData = alldata;
        renderPage(currentPage);
        renderPagination();
    } catch (error) {
        console.error("데이터 오류 발생");
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
            <td>${a.attributes.period === null ? '#확인필요' : a.attributes.period}</td>
            <td>${a.attributes.name === null ? '#확인필요' : a.attributes.name}</td>
            <td>
            <button class="seebtn"
            data-period="${a.attributes.period === null ? '#확인필요' : a.attributes.period}" 
                    data-name="${a.attributes.name === null ? '#확인필요' : a.attributes.name}"
                    data-addr="${a.attributes.addr === null ? '#확인필요' : a.attributes.addr}"
                    data-type="${a.attributes.type === null ? '#확인필요' : a.attributes.type}"
                    data-tel="${a.attributes.tel === null ? '#확인필요' : a.attributes.tel}"
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
    filterData = alldata.filter(a=> a.attributes.name && a.attributes.name.toLowerCase().includes(searchValue))
    currentPage = 1;
    renderPage(currentPage);
    renderPagination();
});

   
document.addEventListener('click',e=>{
    if(e.target && e.target.classList.contains('seebtn')){
        const period = e.target.getAttribute('data-period');
        const name = e.target.getAttribute('data-name');
        const addr = e.target.getAttribute('data-addr');
        const type = e.target.getAttribute('data-type');
        const tel = e.target.getAttribute('data-tel');
        
        // 팝업에 값 출력
       pop.innerHTML=`
        <div class="ppp">
                <h3>${name}</h3>
                <img src="market.jpg" alt="">
                <p><strong>개시일:</strong> ${period}</p>
                <p><strong>주소:</strong> ${addr}</p>
                <p><strong>종류:</strong> ${type}</p>
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





























