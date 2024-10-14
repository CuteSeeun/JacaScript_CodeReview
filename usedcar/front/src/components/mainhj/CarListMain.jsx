import React from 'react';
import CarListBanner from './CarListBanner';
import CarListOutput from './CarListOutput';
import CarListTop from './CarListTop';
import { CarListMainWrap, ContentWrap } from './carListStyle';

const CarListMain = () => {
    return (
        <CarListMainWrap>
            <CarListTop/>
            <ContentWrap>
                <CarListBanner/>
                <CarListOutput/>
            </ContentWrap>
        </CarListMainWrap>
    );
};

export default CarListMain;