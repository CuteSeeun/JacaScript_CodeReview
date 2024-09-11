// marketController.js

showData = async (req, res) => {
    try {
        const response = await fetch('http://localhost:3000/markets');
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error: ', error);
    }
}

function displayData(data) {
    const marketDataDiv = document.querySelector('#result');
    marketDataDiv.innerHTML = ''; // 기존 내용을 초기화
    data.forEach(market => {
        marketDataDiv.innerHTML += `번호: ${market.id}, <p>이름: ${market.name}, 주소: ${market.roadaddr}, 전화번호: ${market.tel}, 기간: ${market.period}, 홈페이지: ${market.hmpg_addr}</p>`;
    });
}
document.addEventListener('DOMContentLoaded', showData);
