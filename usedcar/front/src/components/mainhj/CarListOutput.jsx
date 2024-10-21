// 정연
import React, { useState, useEffect, useRef } from "react";
import { CarListOutputWrap } from "./carListStyle";
import { GoHeartFill } from "react-icons/go";
import { IoCarSport } from "react-icons/io5";
import { formatPrice } from "../../utils/formPrice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CarListOutput = ({ carList, currentPage, setCurrentPage }) => {
  const navigate = useNavigate();
  const [sortOption, setSortOption] = useState("최신순");
  // const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const user_uno = localStorage.getItem("uNo"); // 로컬 스토리지에서 유저 번호 가져오기

  const [modalOn , setModalOn]=useState(false);
  const modalRef = useRef();

  const [favoriteStates, setFavoriteStates] = useState({}); // favorite 상태 관리
  console.log(favoriteStates);
  console.log(user_uno);
  console.log(carList);

  const [popMsg, setPopMsg] = useState(""); // 팝업 메시지
  const [show, setShow] = useState(false); // 팝업 보여주기 토글
  const navi = useNavigate();

  // useEffect를 사용하여 carList가 업데이트되었을 때 favoriteStates 초기화
  useEffect(() => {
    if (carList.length > 0) {
      const initialFavoriteStates = carList.reduce((acc, car) => {
        acc[car.cNo] = car.favorite;
        return acc;
      }, {});
      setFavoriteStates(initialFavoriteStates); // favorite 상태 초기화
    }
  }, [carList]); // carList가 변경될 때마다 실행

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedCarList = [...carList].sort((a, b) => {
    switch (sortOption) {
      case "최신순":
        return new Date(b.date) - new Date(a.date);
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
    console.log("차번호" + cNo);
    console.log("하트 상태", currentFavorite);
    console.log("유저 번호", user_uno);
    const newFavorite = currentFavorite === 1 ? 0 : 1; // 값 토글
    try {
      if (user_uno !== null) {
        // 백엔드에 currentFavorite 값을 그대로 보내도록 수정
        await axios.put(`http://localhost:3333/car/favorite/${cNo}`, {
          favorite: newFavorite, // currentFavorite 값을 그대로 전송
          user_uno, // user_uno 값을 전송해 특정 사용자의 찜 목록을 업데이트
        });

        // 서버 업데이트 후 local 상태에서도 업데이트
        setFavoriteStates((prevStates) => ({
          ...prevStates,
          [cNo]: newFavorite, // 상태를 그대로 유지
        }));

        const message =
          newFavorite === 1
            ? "찜 목록에 추가되었습니다!"
            : "찜 목록에서 삭제되었습니다!";
        showPop(message);
      } else {
        setModalOn(true);
        // alert("로그인 사용 후 가능한 서비스입니다.");
      }
    } catch (error) {
      console.error("Favorite 업데이트 오류:", error);
    }
  };

  function modal(){

  }

  const showPop = (message) => {
    setPopMsg(message);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  return (
    <CarListOutputWrap>
      {show && <div className="popup">{popMsg}</div>}
      
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
              navigate(`/detailmain/${car.cNo}`, { state: car });
            }}
          >
            <div className="img">
              <img
                src={`http://localhost:3333${car.image}`}
                alt=""
                // onError={(e) => (e.target.src = "/images/placeholder.png")}
                // 깜빡이~
              />
            </div>
            <p className="carName">{car.name}</p>
            <p>{car.year}년식</p>
            <p>
              {car.fueltype} <IoCarSport /> {car.mileage}km
            </p>
            <p className="price">{formatPrice(car.price)}</p>

            <button
              className="ZimBtn"
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(car.cNo, favoriteStates[car.cNo]);
              }}
            >
              {favoriteStates[car.cNo] === 1 ? (
                <GoHeartFill style={{ color: "red" }} />
              ) : (
                <GoHeartFill style={{ color: "gray" }} />
              )}
            </button>

            {modalOn && (
  <div
    className="modal-container"
    ref={modalRef}
    onClick={(e) => {
      if (e.target === modalRef.current) {
        e.stopPropagation();
        setModalOn(false);
      }
    }}
  >
    <div
      className="modal-content"
      onClick={(e) => e.stopPropagation()}
    >
      <p>로그인 후 사용해 주시길 바랍니다.</p>
      <div className="modal-buttons">
        <button
          className="modal-close-btn"
          onClick={() => {
            setModalOn(false);
            navi("/login");
          }}
        >
          로그인 이동
        </button>
        <button
          className="modal-close-btn"
          onClick={() => setModalOn(false)}
        >
          확인
        </button>
      </div>
    </div>
  </div>
)}
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
