"use strict"

const main = document.querySelector('.mainBox');
const inner = document.querySelector('.inner');
const table = document.querySelector('.table');
const tbody = document.querySelector('.tbody');
const pageDiv = document.querySelector('.page');
const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('.searchBtn');
const openPop = document.querySelector('.seebtn');
const popup = document.querySelector('.viewDetails');
const closebtn = document.querySelector('.closebtn');
const pop = document.querySelector('.popup');

const itemPage = 10; // 페이지 당 표시할 데이터 개수
let alldata = [];
let filterData = [];
let currentPage = 1;

// 서버에서 데이터를 받아와서 페이지에 렌더링
const fetchMarkets = async () => {
  try {
    const response = await axios.get('http://localhost:6666/markets'); // 로컬 서버에서 데이터를 받음
    alldata = response.data;
    filterData = alldata; // 필터링된 데이터에 저장
    renderPage(currentPage);
    renderPagination();
  } catch (error) {
    console.error('데이터 불러오기 오류:', error);
  }
};

const renderPage = (page) => {
  const startIndex = (page - 1) * itemPage;
  const endIndex = startIndex + itemPage;
  const pageData = filterData.slice(startIndex, endIndex);
  
  let row = '';
  pageData.map((market, idx) => {
    row += `
      <tr>
        <td>${startIndex + idx + 1}</td>
        <td>${market.period === null ? '#확인필요' : market.period}</td>
        <td>${market.name === null ? '#확인필요' : market.name}</td>
        <td>
          <button class="seebtn"
            data-period="${market.period === null ? '#확인필요' : market.period}"
            data-name="${market.name === null ? '#확인필요' : market.name}"
            data-addr="${market.addr === null ? '#확인필요' : market.addr}"
            data-type="${market.type === null ? '#확인필요' : market.type}"
            data-tel="${market.tel === null ? '#확인필요' : market.tel}"
          >상세보기</button>
        </td>
      </tr>
    `;
  });
  
  tbody.innerHTML = row;
};

const renderPagination = () => {
  const totalPage = Math.ceil(filterData.length / itemPage);
  let pageNo = '';
  for (let i = 1; i <= totalPage; i++) {
    pageNo += `<button id="pagebtn" onclick="change(${i})"${i === currentPage ? "class='active btn btn-primary lh-1'" : ""}>${i}</button>`;
  }
  pageDiv.innerHTML = pageNo;
};

const change = (page) => {
  currentPage = page;
  renderPage(currentPage);
  renderPagination();
};

searchBtn.addEventListener('click', e => {
  const searchValue = searchInput.value.trim().toLowerCase();
  filterData = alldata.filter(market => market.name && market.name.toLowerCase().includes(searchValue));
  currentPage = 1;
  renderPage(currentPage);
  renderPagination();
});

document.addEventListener('click', e => {
  if (e.target && e.target.classList.contains('seebtn')) {
    const period = e.target.getAttribute('data-period');
    const name = e.target.getAttribute('data-name');
    const addr = e.target.getAttribute('data-addr');
    const type = e.target.getAttribute('data-type');
    const tel = e.target.getAttribute('data-tel');

    // 팝업에 값 출력
    pop.innerHTML = `
      <div class="ppp">
        <h3>${name}</h3>
        <img src="market.jpg" alt="">
        <p><strong>개시일:</strong> ${period}</p>
        <p><strong>주소:</strong> ${addr}</p>
        <p><strong>종류:</strong> ${type}</p>
        <p><strong>전화번호:</strong> ${tel}</p>
      </div>
    `;
    popup.style.display = "flex";
  }
});

window.addEventListener('click', e => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

// 페이지가 로드될 때 서버에서 시장 데이터를 불러옵니다.
window.onload = fetchMarkets;
