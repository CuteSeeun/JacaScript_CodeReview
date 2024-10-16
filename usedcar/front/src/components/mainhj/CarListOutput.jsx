// 정연
import React, { useState } from "react";
import { CarListOutputWrap } from "./carListStyle";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoCarSport } from "react-icons/io5";
import { formatPrice } from "../../utils/formPrice";
import { useNavigate } from "react-router-dom";

const CarListOutput = ({ carList }) => {
  const navigate = useNavigate();
  const [sortOption, setSortOption] = useState("최신순");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedCarList = [...carList].sort((a, b) => {
    switch (sortOption) {
      case "최신순":
        return b.year - a.year;
      case "낮은가격순":
        return a.price - b.price;
      case "높은가격순":
        return b.price - a.price;
      case "주행거리":
        return a.mileage - b.mileage;
      default:
        return 0;
    }
  });

  //현재 페이지에 해당하는 차량리스트
  const indexofLastItem = currentPage * itemsPerPage;
  const indexofFirstItem = indexofLastItem - itemsPerPage;
  const currentItems = sortedCarList.slice(indexofFirstItem, indexofLastItem);

  //페이지네이션 버튼 클릭 핸들러
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(sortedCarList.length / itemsPerPage);

  return (
    <CarListOutputWrap>
      <div className="outTop">
        <strong>전체 {carList.length}</strong>

        <select value={sortOption} onChange={handleSortChange}>
          <option value="전체">전체</option>
          <option value="최신순">최신순</option>
          <option value="낮은가격순">낮은가격순</option>
          <option value="높은가격순">높은가격순</option>
          <option value="주행거리">주행거리짧은순</option>
        </select>
      </div>
      <ul>
        {currentItems.map((car) => (
          <li
            key={car.cNo}
            onClick={() => {
              console.log(`/detailmain/${car.cNo}`, car);
              navigate(`/detailmain/${car.cNo}`, { state: car });
            }}
          >
            <div className="img">
              <img
                src={`http://localhost:3333${car.image}`}
                alt={car.name}
                onError={(e) => (e.target.src = "/images/placeholder.png")}
              />
            </div>
            <p className="carName">{car.name}</p>
            <p>{car.year}년식</p>
            <p>
              {car.fueltype} <IoCarSport /> {car.mileage}km
            </p>
            <p className="price">{formatPrice(car.price)}</p>
            <p className="sub-price">(월 1,042만원)</p>
            <button className="ZimBtn">
              {car.cNo % 2 === 0 ? <GoHeartFill /> : <GoHeart />}
            </button>
          </li>
        ))}
      </ul>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </CarListOutputWrap>
  );
};

export default CarListOutput;
