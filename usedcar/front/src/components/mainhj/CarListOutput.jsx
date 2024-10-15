// 정연
import React from "react";
import { CarListOutputWrap } from "./carListStyle";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoCarSport } from "react-icons/io5";

import axios from "axios";
import { useEffect, useState } from "react";

const CarListOutput = () => {
  const [carlist, setcarlist] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("http://localhost:3333/car");
        setcarlist(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchdata();
  }, []); //빈 배열은 이 useEffect가 처음 마운트될때만 실행됨.

  return (
    <CarListOutputWrap>
      <div className="outTop">
        <strong>전체 100대</strong>

        <select>
          <option value="전체">전체</option>
          <option value="최신순">최신순</option>
          <option value="낮은가격순">낮은가격순</option>
          <option value="높은가격순">높은가격순</option>
          <option value="주행거리">주행거리짧은순</option>
        </select>
      </div>
      <ul>
        {carlist.map((car) => (
          <li key={car.cNo}>
            <div className="img">
              <img src={car.image} alt={car.name} />
            </div>
            <p className="carName">{car.name}</p>
            <p>{car.year}년식</p>
            <p>
              {car.fueltype} <IoCarSport /> {car.mileage}
            </p>
            <p className="price">{car.price}</p>
            <button className="ZimBtn">
              {car.cNo % 2 === 0 ? <GoHeartFill /> : <GoHeart />}
            </button>
          </li>
        ))}
      </ul>
    </CarListOutputWrap>
  );
};

export default CarListOutput;
