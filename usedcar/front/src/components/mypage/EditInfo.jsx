import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { EditInfoStyle } from './EditInfoStyle';

const EditInfo = () => {
  const uNo = localStorage.getItem('uNo');
  const [formData, setFormData] = useState({
    name: '',
    userid: '',
    tel: '',
    email: '',
  });

  useEffect(() => {
    const fetchUser = async () => {
      if (uNo) {
        try {
          const response = await axios.get(`http://localhost:3333/edituser/${uNo}`);
          const userData = response.data;
          setFormData({
            name: userData.name,
            userid: userData.userid,
            tel: userData.tel,
            email: userData.email,
          });
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchUser();
  }, [uNo]);

  return (
    <EditInfoStyle>
      {/* <!-- 내 정보 섹션 --> */}
      <div className="container shadow-lg">
        {/* <!-- 화살표 아이콘 --> */}
        <Link to="/mypage"><i className="fas fa-arrow-left back-btn"></i></Link>
        <h1>내 정보</h1>
        {/* <!-- 이름 입력 --> */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">이름</label>
          <span id="nameDisplay" className="data-display">: {formData.name}</span>
        </div>
        {/* <!-- 아이디 입력 --> */}
        <div className="mb-3">
          <label htmlFor="userid" className="form-label">아이디</label>
          <span id="idDisplay" className="data-display">: {formData.userid}</span>
        </div>
        {/* <!-- 휴대전화번호 입력 --> */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">휴대폰 번호</label>
          <input type="text" className="form-control" id="phone" placeholder={formData.tel} />
        </div>
        {/* <!-- 이메일 입력 --> */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">이메일</label>
          <input type="email" className="form-control" id="email" placeholder={formData.email} />
        </div>
        {/* <!-- 현재 비밀번호 --> */}
        <div className="mb-3">
          <label htmlFor="current-password" className="form-label">현재 비밀번호</label>
          <input type="password" className="form-control" id="current-password" placeholder="현재 비밀번호를 입력해 주세요." />
        </div>
        {/* <!-- 새 비밀번호 --> */}
        <div className="mb-3">
          <label htmlFor="new-password" className="form-label">새 비밀번호</label>
          <input type="password" className="form-control" id="new-password" placeholder="새로운 비밀번호를 입력해 주세요." />
        </div>
        {/* <!-- 버튼들 --> */}
        <div className="d-flex justify-content-between">
          <button className="modify btn btn-primary" data-bs-toggle="modal" data-bs-target="#confirmationModal">변경하기</button>
        </div>
      </div>
      {/* <!-- 모달 --> */}
      <div className="modal fade" id="confirmationModal" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">확인</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>변경하시겠습니까?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">취소</button>
              <button type="button" className="confirm btn btn-primary">확인</button>
            </div>
          </div>
        </div>
      </div>
    </EditInfoStyle>
  );
};

export default EditInfo;
