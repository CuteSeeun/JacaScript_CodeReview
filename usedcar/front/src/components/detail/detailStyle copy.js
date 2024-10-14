import styled from 'styled-components';

export const DetailMainWrap = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  .detailCard {
    display: flex;
    flex-wrap: wrap;  /* Flexbox wrap 적용 */
    justify-content: space-between;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }

  .detailTop {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
  }

  .imageSection {
    flex: 1;
    max-width: 60%;  /* 이미지 섹션 너비를 60%로 설정 */
    margin-right: 20px;
  }

  .imageSection img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .priceSection {
    flex: 0 0 35%;  /* 가격 및 버튼 섹션 너비를 35%로 설정 */
    text-align: right;
  }

  .priceSection p {
    font-size: 18px;
    margin: 10px 0;
  }

  .priceSection button {
    display: block;
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    margin-top: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .priceSection button:hover {
    background-color: #0056b3;
  }

  .detailInfo, .detailReview, .sellerInfo {
    margin-top: 20px;
    width: 100%;  /* 정보 섹션이 전체 너비를 차지하도록 설정 */
  }

  .detailInfo h4, .detailReview h4, .sellerInfo h4 {
    font-size: 20px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 5px;
  }

  .detailInfo p, .detailReview p, .sellerInfo p {
    font-size: 16px;
    margin: 5px 0;
  }
`;
