// 정연
import React, { useState, useEffect } from "react";
import { CarListOutputWrap } from "./carListStyle";
import { GoHeartFill } from "react-icons/go";
import { IoCarSport } from "react-icons/io5";
import { formatPrice } from "../../utils/formPrice";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const CarListOutput = ({ carList, currentPage, setCurrentPage }) => {
  const navigate = useNavigate();
  const [sortOption, setSortOption] = useState("최신순");
  // const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const user_uno = localStorage.getItem('uNo');  // 로컬 스토리지에서 유저 번호 가져오기

  const [favoriteStates, setFavoriteStates] = useState({}); // favorite 상태 관리
  console.log(favoriteStates);
  console.log(user_uno);
  console.log(carList);
  

  // useEffect를 사용하여 carList가 업데이트되었을 때 favoriteStates 초기화
  useEffect(() => {
    if (carList.length > 0) {
      const initialFavoriteStates = carList.reduce((acc, car) => {
        acc[car.cNo] = car.favorite;
        return acc;
      }, {});
      setFavoriteStates(initialFavoriteStates);  // favorite 상태 초기화
    }
  }, [carList]);  // carList가 변경될 때마다 실행

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

  // 찜하기 기능: favorite 값 토글
  const toggleFavorite = async (cNo, currentFavorite) => {
    console.log('차번호' + cNo);
    console.log('하트 상태', currentFavorite);
    console.log('유저 번호' , user_uno);
    const newFavorite = currentFavorite === 1 ? 0 : 1;  // 값 토글
    try {
      if(user_uno !== null){
      // 백엔드에 currentFavorite 값을 그대로 보내도록 수정
      await axios.put(`http://localhost:3333/car/favorite/${cNo}`, {
        favorite: newFavorite, // currentFavorite 값을 그대로 전송
        user_uno, // user_uno 값을 전송해 특정 사용자의 찜 목록을 업데이트
      });

      // 서버 업데이트 후 local 상태에서도 업데이트
      setFavoriteStates((prevStates) => ({
        ...prevStates,
        [cNo]: newFavorite,  // 상태를 그대로 유지
      }));
    }else{
      alert('로그인 사용 후 가능한 서비스입니다.');
    }
    } catch (error) {
      console.error("Favorite 업데이트 오류:", error);
    }
  };

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
        {currentItems.map((car,idx) => (
          <li
            key={car.cNo}
            onClick={() => {
              navigate(`/detailmain/${car.cNo}`, { state: car });
            }}
          >
            <div className="img">
              <img
                src={`http://localhost:3333${car.image}`}
                alt=""
                onError={(e) => (e.target.src = "/images/placeholder.png")}
              />
            </div>
            <p className="carName">{car.name}</p>
            <p>{car.year}년식</p>
            <p>
              {car.fueltype} <IoCarSport /> {car.mileage}km
            </p>
            <p className="price">{formatPrice(car.price)}</p>

            <button className="ZimBtn" 
                    onClick={e => { e.stopPropagation();
                                    console.log('하트 클릭');

                      toggleFavorite(car.cNo, favoriteStates[car.cNo])
            }}>
            {favoriteStates[car.cNo] === 1 ? <GoHeartFill style={{color : 'red'}} /> : <GoHeartFill style={{color : 'gray'}}/>}
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