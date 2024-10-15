import React, { useState } from 'react';
// import './add.js';
import {
  FormContainer,
  Title,
  Label,
  Input,
  Select,
  ButtonGroup,
  Button,
} from './addStyle.js';

// 모달 스타일링
const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
const modalContentStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  textAlign: 'center',
  zIndex: 1000,
  width:'400px',
};
const modalButtonStyle = {
  marginTop: '10px',
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

// 모달 컴포넌트
const Modal = ({ showModal, handleClose, message }) => {
  if (!showModal) return null; // 모달이 열리지 않으면 아무것도 렌더링하지 않음

  return (
    <div className="modal-overlay" onClick={handleClose} style={modalOverlayStyle}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={modalContentStyle}>
        <h2>오류 발생</h2>
        <p>{message}</p>
        <button onClick={handleClose} style={modalButtonStyle}>닫기</button>
      </div>
    </div>
  );
};

const SellForm = () => {
  // 모델명 상태 관리
  const [carModel, setCarModel] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [year, setYear] = useState('');
  const [mileage, setMileage] = useState('');
  const [fuel, setFuel] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const [carImage, setCarImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false); // 모달 상태 추가

  // 유효성 검사 함수
  const validateForm = () => {
    if (carModel.trim() === '') {
      setErrorMessage('모델명을 입력하세요.');
      setShowModal(true); // 유효성 검사 실패 시 모달 표시
      return false;
    }
    if (carModel.length < 2) {
      setErrorMessage('모델명은 최소 2자 이상이어야 합니다.');
      setShowModal(true); // 유효성 검사 실패 시 모달 표시
      return false;
    }
    if (!manufacturer) {
      setErrorMessage('브랜드를 선택하세요.');
      return false;
    }
    if (!year) {
      setErrorMessage('연식을 선택하세요.');
      return false;
    }
    if (!mileage) {
      setErrorMessage('주행거리를 선택하세요.');
      return false;
    }
    if (!fuel) {
      setErrorMessage('연료를 선택하세요.');
      return false;
    }
    if (!price) {
      setErrorMessage('판매 가격을 선택하세요.');
      return false;
    }
    if (!color) {
      setErrorMessage('차량 색상을 선택하세요.');
      return false;
    }
    if (!carImage) {
      setErrorMessage('차량 사진을 업로드하세요.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  // 폼 제출 핸들러
  const handleSubmit = (event) => {
    event.preventDefault(); // 폼 제출 방지

    if (validateForm()) {
      // 유효성 검사가 통과되면 폼을 제출할 수 있음
      console.log('모델명:', carModel);
      console.log('브랜드:', manufacturer);
      console.log('연식:', year);
      console.log('주행거리:', mileage);
      console.log('연료:', fuel);
      console.log('판매가격:', price);
      console.log('차량 색상:', color);
      console.log('차량 사진:', carImage);
    } else {
      setShowModal(true); // 유효성 검사 실패 시 모달을 띄움
    }
  };

  // 모달 닫기 핸들러
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (

    // <FormContainer>
    //   <h2>내 차 팔기</h2>
    //   <form>
    //     <div>
    //       <label htmlFor="carModel">모델명</label>
    //       <input type="text" id="carModel" placeholder="차량 모델명을 입력하세요" />
    //     </div>

    //     <div>
    //       <label for="manufacturer">브랜드</label>
    //       <select id="manufacturer">
    //         <option selected>브랜드 선택</option>
    //         <option value="1">현대</option>
    //         <option value="2">제네시스</option>
    //         <option value="3">기아</option>
    //         <option value="4">쉐보레(GM대우)</option>
    //         <option value="5">르노코리아(삼성)</option>
    //         <option value="6">KG모빌리티(쌍용)</option>
    //         <option value="7">벤츠</option>
    //         <option value="8">BMW</option>
    //         <option value="9">아우디</option>
    //         <option value="10">포르쉐</option>
    //         <option value="11">미니</option>
    //         <option value="12">랜드로버</option>
    //         <option value="13">폭스바겐</option>
    //         <option value="14">기타</option>
    //       </select>
    //     </div>

    //     <div>
    //       <label for="year">연식(제조년도)</label>
    //       <select id="year">
    //         <option selected>년도 선택</option>
    //         <option value="2024">2024</option>
    //         <option value="2023">2023</option>
    //         <option value="2022">2022</option>
    //         <option value="2021">2021</option>
    //         <option value="2020">2020</option>
    //         <option value="2019">2019</option>
    //         <option value="2018">2018</option>
    //         <option value="2017">2017</option>
    //         <option value="2016">2016</option>
    //         <option value="2015">2015</option>
    //         <option value="2014">2014</option>
    //         <option value="2013">2013</option>
    //         <option value="2012">2012</option>
    //         <option value="2011">2011</option>
    //         <option value="2010">2010</option>
    //         <option value="2009">2009</option>
    //         <option value="2008">2008</option>
    //         <option value="2007">2007</option>
    //         <option value="2006">2006</option>
    //         <option value="2005">2005</option>
    //         <option value="2004">2004</option>
    //         <option value="2003">2003</option>
    //         <option value="2002">2002</option>
    //         <option value="2001">2001</option>
    //         <option value="2000">2000</option>
    //         <option value="1999">1999</option>
    //         <option value="1998">1998</option>
    //         <option value="1997">1997</option>
    //         <option value="1996">1996</option>
    //         <option value="1995">1995</option>
    //         <option value="1994">1994</option>
    //         <option value="1993">1993</option>
    //         <option value="1992">1992</option>
    //         <option value="1991">1991</option>
    //         <option value="1990">1990</option>
    //         <option value="1989">1989</option>
    //         <option value="1988">1988</option>
    //         <option value="1987">1987</option>
    //         <option value="1986">1986</option>
    //         <option value="1985">1985</option>
    //         <option value="1984">1984</option>
    //         <option value="1983">1983</option>
    //         <option value="1982">1982</option>
    //         <option value="1981">1981</option>
    //         <option value="1980">1980</option>
    //       </select>
    //     </div>

    //     <div>
    //       <label for="mileage">주행거리</label>
    //       <select id="mileage">
    //         <option selected>km 선택</option>
    //         <option value="1">10,000km</option>
    //         <option value="2">20,000km</option>
    //         <option value="3">30,000km</option>
    //         <option value="4">40,000km</option>
    //         <option value="5">50,000km</option>
    //         <option value="6">60,000km</option>
    //         <option value="7">70,000km</option>
    //         <option value="8">80,000km</option>
    //         <option value="9">90,000km</option>
    //         <option value="10">100,000km</option>
    //         <option value="11">110,000km</option>
    //         <option value="12">120,000km</option>
    //         <option value="13">130,000km</option>
    //         <option value="14">140,000km</option>
    //         <option value="15">150,000km</option>
    //         <option value="16">160,000km</option>
    //         <option value="17">170,000km</option>
    //         <option value="18">180,000km</option>
    //         <option value="19">190,000km</option>
    //         <option value="20">200,000km</option>
    //       </select>

    //     </div>

    //     <div>
    //       <label for="fuel">연료</label>
    //       <select id="fuel">
    //         <option selected>연료 선택</option>
    //         <option value="1">가솔린</option>
    //         <option value="2">디젤</option>
    //         <option value="3">LPG</option>
    //         <option value="4">가솔린+전기</option>
    //         <option value="5">디젤+전기</option>
    //         <option value="6">가솔린+LPG</option>
    //         <option value="7">가솔린+CNG</option>
    //         <option value="8">전기</option>
    //       </select>
    //     </div>

    //     <div>
    //       <label for="price">차량 판매 가격</label>
    //       <select id="price">
    //         <option selected>판매가격선택</option>
    //         <option value="100">100만원</option>
    //         <option value="200">200만원</option>
    //         <option value="300">300만원</option>
    //         <option value="400">400만원</option>
    //         <option value="500">500만원</option>
    //         <option value="600">600만원</option>
    //         <option value="700">700만원</option>
    //         <option value="800">800만원</option>
    //         <option value="900">900만원</option>
    //         <option value="1000">1,000만원</option>
    //         <option value="1100">1,100만원</option>
    //         <option value="1200">1,200만원</option>
    //         <option value="1300">1,300만원</option>
    //         <option value="1400">1,400만원</option>
    //         <option value="1500">1,500만원</option>
    //         <option value="1600">1,600만원</option>
    //         <option value="1700">1,700만원</option>
    //         <option value="1800">1,800만원</option>
    //         <option value="1900">1,900만원</option>
    //         <option value="2000">2,000만원</option>
    //         <option value="3000">3,000만원</option>
    //         <option value="4000">4,000만원</option>
    //         <option value="5000">5,000만원</option>
    //         <option value="6000">6,000만원</option>
    //         <option value="7000">7,000만원</option>
    //         <option value="8000">8,000만원</option>
    //         <option value="9000">9,000만원</option>
    //         <option value="10000">1억 이상</option>
    //       </select>
    //     </div>

    //     <div>
    //       <label for="color">차량 색깔</label>
    //       <select id="color">
    //         <option selected>색깔 선택</option>
    //         <option value="1">흰색</option>
    //         <option value="2">검정색</option>
    //         <option value="3">쥐색</option>
    //         <option value="4">은색</option>
    //         <option value="5">청색</option>
    //         <option value="6">기타</option>
    //       </select>
    //     </div>

    //     <div>
    //       <label htmlFor="carImage">차량 사진</label>
    //       <input type="file" id="carImage" />
    //     </div>

    //     <div className="btn-group">
    //       <button type="submit" className="save">저장</button>
    //       <button type="reset" className="cancle">취소</button>
    //     </div>
    //   </form>
    // </FormContainer>




    <FormContainer>
      <Title>내 차 팔기</Title>
      <form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="carModel">모델명</Label>
          <Input type="text" id="carModel" 
                 placeholder="ex) 기아 k5" 
                 value={carModel} 
                 onChange={(e)=> setCarModel(e.target.value)}
          />
          {/* {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} */}
        </div>

        <div>
          <Label htmlFor="manufacturer">브랜드</Label>
          <Select id="manufacturer" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)}>
            <option selected>브랜드 선택</option>
            <option value="1">현대</option>
            <option value="2">제네시스</option>
            <option value="3">기아</option>
            <option value="4">쉐보레(GM대우)</option>
            <option value="5">르노코리아(삼성)</option>
            <option value="6">KG모빌리티(쌍용)</option>
            <option value="7">벤츠</option>
            <option value="8">BMW</option>
            <option value="9">아우디</option>
            <option value="10">포르쉐</option>
            <option value="11">미니</option>
            <option value="12">랜드로버</option>
            <option value="13">폭스바겐</option>
            <option value="14">기타</option>
          </Select>
        </div>

        <div>
          <Label htmlFor="year">연식(제조년도)</Label>
          <Select id="year" value={year} onChange={(e) => setYear(e.target.value)}>
            <option selected>년도 선택</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
            <option value="2000">2000</option>
            <option value="1999">1999</option>
            <option value="1998">1998</option>
            <option value="1997">1997</option>
            <option value="1996">1996</option>
            <option value="1995">1995</option>
            <option value="1994">1994</option>
            <option value="1993">1993</option>
            <option value="1992">1992</option>
            <option value="1991">1991</option>
            <option value="1990">1990</option>
            <option value="1989">1989</option>
            <option value="1988">1988</option>
            <option value="1987">1987</option>
            <option value="1986">1986</option>
            <option value="1985">1985</option>
            <option value="1984">1984</option>
            <option value="1983">1983</option>
            <option value="1982">1982</option>
            <option value="1981">1981</option>
            <option value="1980">1980</option>
            {/* 연도 선택 항목들 */}
          </Select>
        </div>

        <div>
          <Label htmlFor="mileage">주행거리</Label>
          <Select id="mileage" value={mileage} onChange={(e) => setMileage(e.target.value)}>
            <option selected>km 선택</option>
            <option value="1">10,000km</option>
            <option value="2">20,000km</option>
            <option value="3">30,000km</option>
            <option value="4">40,000km</option>
            <option value="5">50,000km</option>
            <option value="6">60,000km</option>
            <option value="7">70,000km</option>
            <option value="8">80,000km</option>
            <option value="9">90,000km</option>
            <option value="10">100,000km</option>
            <option value="11">110,000km</option>
            <option value="12">120,000km</option>
            <option value="13">130,000km</option>
            <option value="14">140,000km</option>
            <option value="15">150,000km</option>
            <option value="16">160,000km</option>
            <option value="17">170,000km</option>
            <option value="18">180,000km</option>
            <option value="19">190,000km</option>
            <option value="20">200,000km</option>
            {/* 주행거리 선택 항목들 */}
          </Select>
        </div>

        <div>
          <Label htmlFor="fuel">연료</Label>
          <Select id="fuel" value={fuel} onChange={(e) => setFuel(e.target.value)}>
            <option selected>연료 선택</option>
            <option value="1">가솔린</option>
            <option value="2">디젤</option>
            <option value="3">LPG</option>
            <option value="4">가솔린+전기</option>
            <option value="5">디젤+전기</option>
            <option value="6">가솔린+LPG</option>
            <option value="7">가솔린+CNG</option>
            <option value="8">전기</option>
            {/* 연료 선택 항목들 */}
          </Select>
        </div>

        <div>
          <Label htmlFor="price">차량 판매 가격</Label>
          <Select id="price" value={price} onChange={(e) => setPrice(e.target.value)}>
            <option selected>판매가격 선택</option>
            <option value="100">100만원</option>
            <option value="200">200만원</option>
            <option value="300">300만원</option>
            <option value="400">400만원</option>
            <option value="500">500만원</option>
            <option value="600">600만원</option>
            <option value="700">700만원</option>
            <option value="800">800만원</option>
            <option value="900">900만원</option>
            <option value="1000">1,000만원</option>
            <option value="1100">1,100만원</option>
            <option value="1200">1,200만원</option>
            <option value="1300">1,300만원</option>
            <option value="1400">1,400만원</option>
            <option value="1500">1,500만원</option>
            <option value="1600">1,600만원</option>
            <option value="1700">1,700만원</option>
            <option value="1800">1,800만원</option>
            <option value="1900">1,900만원</option>
            <option value="2000">2,000만원</option>
            <option value="3000">3,000만원</option>
            <option value="4000">4,000만원</option>
            <option value="5000">5,000만원</option>
            <option value="6000">6,000만원</option>
            <option value="7000">7,000만원</option>
            <option value="8000">8,000만원</option>
            <option value="9000">9,000만원</option>
            <option value="10000">1억 이상</option>
            {/* 가격 선택 항목들 */}
          </Select>
        </div>

        <div>
           <Label htmlFor="color">차량 색깔</Label>
           <Select id="color" value={color} onChange={(e) => setColor(e.target.value)}>
             <option selected>색깔 선택</option>
             <option value="1">흰색</option>
             <option value="2">검정색</option>
             <option value="3">쥐색</option>
             <option value="4">은색</option>
             <option value="5">청색</option>
             <option value="6">기타</option>
           </Select>
         </div>

        <div>
          <Label htmlFor="carImage">차량 사진</Label>
          <Input type="file" id="carImage" 
                 onChange={(e) => setCarImage(e.target.files[0])}
          />
        </div>

        <ButtonGroup>
          <Button type="submit" className="save">저장</Button>
          <Button type="reset" className="cancel">취소</Button>
        </ButtonGroup>
      </form>
      {/* 모달 컴포넌트 */}
      <Modal showModal={showModal} handleClose={handleCloseModal} message={errorMessage} />
    </FormContainer>
  );
};

export default SellForm;
