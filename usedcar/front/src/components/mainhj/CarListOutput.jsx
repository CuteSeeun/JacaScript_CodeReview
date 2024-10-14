// 정연
import React from 'react';
import { CarListOutputWrap } from './carListStyle';
import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoCarSport } from "react-icons/io5";

const CarListOutput = () => {

    const carList = [
        { id: 1, name: '그랜저', year: '2022', fuel: '가솔린', mileage: '5000km', price: '5억', image: '/images/car.jpg' },
        { id: 2, name: '그랜저', year: '2022', fuel: '가솔린', mileage: '5000km', price: '5억', image: '/images/car.jpg' },
        { id: 3, name: '그랜저', year: '2022', fuel: '가솔린', mileage: '5000km', price: '5억', image: '/images/car.jpg' },
        { id: 4, name: '그랜저', year: '2022', fuel: '가솔린', mileage: '5000km', price: '5억', image: '/images/car.jpg' },
        { id: 5, name: '그랜저', year: '2022', fuel: '가솔린', mileage: '5000km', price: '5억', image: '/images/car.jpg' },
        { id: 6, name: '그랜저', year: '2022', fuel: '가솔린', mileage: '5000km', price: '5억', image: '/images/car.jpg' }
    ];

    return (
        <CarListOutputWrap>
            <div className='outTop'>
                <strong>전체 100대</strong>
                
                <select >
                    <option value="전체">전체</option>
                    <option value="최신순">최신순</option>
                    <option value="낮은가격순">낮은가격순</option>
                    <option value="높은가격순">높은가격순</option>
                    <option value="주행거리">주행거리짧은순</option>
                </select>
            </div>
            <ul>
            {carList.map((car,idx)=>(
                <li key={idx}>
                    <div className="img">
                            <img src={car.image} alt={car.name} />
                        </div>
                        <p className='carName'>{car.name}</p>
                        <p>{car.year}년식</p>
                        <p>{car.fuel} <IoCarSport /> {car.mileage}</p>
                        <p className="price">{car.price}</p>
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