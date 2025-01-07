
## 프로젝트 소개
<img src="https://github.com/CuteSeeun/Web-UsedCar/blob/main/UsedCar.png" alt="커버 이미지" width="950" />  

딜러없이 쉽고 빠르게 중고차를 사고 파는 웹 사이트를 제작하였습니다.  
원하는 차량을 검색할 수 있고 마음에 드는 차량을 찜하여 마이페이지에서 확인할 수 있습니다. 또한, 차량을 판매하는 게시글을 작성할 수 있습니다.  

<details>
  <summary>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="7" width="13" height="10" rx="2" ry="2"></rect>
  <polygon points="16 7 22 11 22 13 16 17 16 7"></polygon>
</svg>
    중고차 직거래 사이트.mp4  :  이미지 클릭 -> 영상 시청 
  </summary>

  [![유튜브 미리보기 이미지](https://img.youtube.com/vi/QKTLIbQ3dWc/0.jpg)](https://www.youtube.com/watch?v=QKTLIbQ3dWc)
</details>


## 개발 기간
- 2024.10.8 ~ 2024.10.11 : 기획/요구사항 분석, 데이터베이스 설계, 퍼블리싱   
- 2024.10.14 ~ 2024.10.18 : 개발  


## 팀원 소개
- **[김정연](https://github.com/lakelover0611)** : 기획 담당  / 메인페이지
- **[김현진](https://github.com/0515khj)** : 퍼블리싱 담당  /  메인페이지, 상세페이지, 수정페이지
- **[조하영](https://github.com/bigbro5232)** : ERD 담당  /  로그인 및 회원가입
- **[최세은](https://github.com/CuteSeeun)** : 퍼블리싱 담당  /  판매등록 페이지, 마이페이지

페이지를 기준으로 프론트, 백엔드를 함께 구현하였습니다.  


## 개발 환경
- **Front-end** : React, Styled-components, BootStrap
- **Back-end** : Node.js
- **Database** : MySQL


## 데이터베이스 설계
- **DB 엔진** : MySQL 8.0
- **주요 테이블**
<img src="https://github.com/CuteSeeun/Web-UsedCar/blob/main/table.jpg" alt="데이터베이스 테이블" width="400" />

## 페이지별 주요 기능
- **로그인/회원가입** : 세션을 활용한 로그인, 로그인에 따른 활성화 기능
- **메인 페이지** : 검색, 필터링, 목록, 페이지네이션, 좋아요 기능
- **상세 페이지** : 차량 상세 정보, 판매자 정보 
- **수정 페이지** : 상세 정보 수정 및 삭제
- **마이 페이지** : 찜 목록, 판매 목록, 회원정보 수정
