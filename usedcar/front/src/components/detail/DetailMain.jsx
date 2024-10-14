import React from 'react';
import { DetailMainWrap } from './detailStyle';

const DetailMain = () => {
  return (
    <DetailMainWrap>
<div className="main-info">
    <div className="info-text">
        <h1>벤츠AMG GT43 2도어</h1>
        <p>1999년식 · 555km · 가솔린</p>
    </div>
    <div className="price-details">
        <div className="price">
            <span>판매가격</span>
            <strong>5000만원</strong>
        </div>
        <div className="monthly-payment">
            <span>할부</span>
            <strong>월 50만원</strong>
        </div>
    </div>
    <div className="contact-buttons">
        <button className="contact-call">전화 상담</button>
        <button className="contact-message">문자 상담</button>
    </div>
</div>
            <div className="image-section">
                <img src={require('../../assets/images/car.jpg')} alt="" />
            </div>
            <div className="info-section">
                <div className="info-card">
                    <h3>차량 정보</h3>
                    <p>모델명: 카니발</p>
                    <p>제조사: 기아</p>
                    <p>연식: 2022</p>
                    <p>주행 거리: 5500km</p>
                    <p>연료: 가솔린</p>
                </div>
                <div className="info-card">
                    <h3>차량 리뷰</h3>
                    <p>이 차량은 연비가 뛰어나고 주행 성능이 우수합니다. 실내 공간이 넉넉하여 장거리 운전에도 적합합니다.</p>
                    <p>이 차량은 연비가 뛰어나고 주행 성능이 우수합니다. 실내 공간이 넉넉하여 장거리 운전에도 적합합니다.</p>
                    <p>이 차량은 연비가 뛰어나고 주행 성능이 우수합니다. 실내 공간이 넉넉하여 장거리 운전에도 적합합니다.</p>
                    <p>이 차량은 연비가 뛰어나고 주행 성능이 우수합니다. 실내 공간이 넉넉하여 장거리 운전에도 적합합니다.</p>
                    <p>이 차량은 연비가 뛰어나고 주행 성능이 우수합니다. 실내 공간이 넉넉하여 장거리 운전에도 적합합니다.</p>
                    <p>이 차량은 연비가 뛰어나고 주행 성능이 우수합니다. 실내 공간이 넉넉하여 장거리 운전에도 적합합니다.</p>
                    <p>이 차량은 연비가 뛰어나고 주행 성능이 우수합니다. 실내 공간이 넉넉하여 장거리 운전에도 적합합니다.</p>
                    <p>이 차량은 연비가 뛰어나고 주행 성능이 우수합니다. 실내 공간이 넉넉하여 장거리 운전에도 적합합니다.</p>
                    <p>이 차량은 연비가 뛰어나고 주행 성능이 우수합니다. 실내 공간이 넉넉하여 장거리 운전에도 적합합니다.</p>
                </div>
                <div className="info-card">
                <h3>판매자 정보</h3>
                    <p>이름: 홍길동</p>
                    <p>전화번호: 112</p>
                    <p>이메일: eee@네이버</p>
                </div>
            </div>
            <div className="userBtn">
            <button>수정하기</button>
            <button>삭제하기</button>
            </div>
    </DetailMainWrap>
  );
};

export default DetailMain;
