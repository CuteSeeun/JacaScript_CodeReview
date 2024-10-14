import React from 'react';
import { CarListTopWrap } from './carListStyle';

const CarListTop = () => {
    return (
        <CarListTopWrap>
            <div className="TopCard">
                <h2>대한민국 No.1 개인거래 중고차</h2>
                <p>KOS CAR 에서 만나보세요</p>
                <input type="text" placeholder='ex) 그랜저'/>
                <button>검색</button>
            </div>
        </CarListTopWrap>
    );
};

export default CarListTop;