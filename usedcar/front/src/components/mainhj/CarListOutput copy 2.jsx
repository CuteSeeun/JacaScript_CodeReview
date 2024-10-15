// 정연
import React from 'react';
import { CarListOutputWrap } from './carListStyle';
import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoCarSport } from "react-icons/io5";
import { formatPrice } from '../../utils/formPrice';
import { useNavigate } from 'react-router-dom';

const CarListOutput = ({carList}) => {

    const navigate = useNavigate();

    return (
        <CarListOutputWrap>
            <div className='outTop'>
                <strong>전체 {carList.length}</strong>
                
                <select>
                    <option value="전체">전체</option>
                    <option value="최신순">최신순</option>
                    <option value="낮은가격순">낮은가격순</option>
                    <option value="높은가격순">높은가격순</option>
                    <option value="주행거리">주행거리짧은순</option>
                </select>
            </div>
            <ul>
            {carList.map((car,idx)=>(
                    <li key={idx} onClick={() => {
                      console.log(`/detailmain/${car.cNo}`, car); 
                      navigate(`/detailmain/${car.cNo}`, { state: car });
                    }}>
                    <div className="img">
                            <img src={car.image} alt={car.name} />
                        </div>
                        <p className='carName'>{car.name}</p>
                        <p>{car.year}년식</p>
                        <p>{car.fueltype} <IoCarSport /> {car.mileage}km</p>
                        <p className="price">{formatPrice(car.price)}</p>
                        <p className="sub-price">(월 1,042만원)</p>
                        <button className='ZimBtn'>
                            {idx % 2 === 0 ? <GoHeartFill /> : <GoHeart />}
                        </button>
                </li>
            ))}
            </ul>
            
        </CarListOutputWrap>
    );
};

export default CarListOutput;