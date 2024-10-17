// login.js
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { LoginStyle } from './loginStyle';




function Login() {
    const [formData, setFormData] = useState({
        userid: '',
        passwd: ''
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3333/login/loginUser', formData);
            if (response.data.success) {
                const uNo = response.data.uNo; // 데이터베이스에서 가져온 uNo 값
                // 로컬 스토리지에 uNo 저장
                localStorage.setItem('uNo', uNo);
                // carListMain으로 이동
                navigate('/');// 테스트 해보려고 Header로 이어둠,원래는 carListMain
                window.location.reload();
            } else {
                setError('로그인 실패: ' + response.data.message);
            }
            // window.location.reload();
        } catch (error) {
            console.error('로그인 중 오류:', error);
            setError('로그인 중 오류가 발생했습니다.');
        }
    }

    return (
        <LoginStyle>
            <div className="login-container shadow-lg">
                {/* 화살표 아이콘 */}

                <Link to="/"><i className="fas fa-arrow-left back-btn"></i></Link>
                {/* 화살표 링크 다시 지정해줘야됨 테스트 해보려고 Header로 이어둠,원래는 carListMain */}

                <h1>로그인</h1>
                {/* 아이디 입력 */}
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="userid"
                        value={formData.userid}
                        onChange={handleChange}
                        placeholder="아이디 입력"
                    />
                </div>
                {/* 비밀번호 입력 */}
                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="passwd"
                        value={formData.passwd}
                        onChange={handleChange}
                        placeholder="비밀번호 입력"
                    />
                </div>
                {/* 자동 로그인 */}
                <div className="form-check mb-3 save-id">
                    <input className="form-check-input" type="checkbox" id="save-id" />
                    <label className="form-check-label" htmlFor="save-id">
                        아이디 저장
                    </label>
                </div>
                {/* 로그인 버튼 */}
                <button
                    className="btn btn-danger w-100 login-btn mb-3"
                    type="submit"
                    onClick={handleSubmit}
                >
                    로그인
                </button>
                {/* 기타 로그인 옵션 */}
                <div className="text-center login-options mb-3">
                    <Link to="/join">회원가입</Link> | <a href="#">아이디찾기</a> | <a href="#">비밀번호 찾기</a>
                </div>
                {/* 구분선 */}
                <div className="divider">
                    <hr />
                </div>
                {/* SNS 로그인 */}
                <div className="sns-login text-center">
                    <p>3초 만에 로그인</p>
                    <a href="#"><img src="https://via.placeholder.com/40x40?text=N" alt="Naver 로그인" /></a>
                    <a href="#"><img src="https://via.placeholder.com/40x40?text=G" alt="Google 로그인" /></a>
                    <a href="#"><img src="https://via.placeholder.com/40x40?text=K" alt="Kakao 로그인" /></a>
                </div>
            </div>
            {/* 모달 창 */}
            <div className="modal fade" id="loadingModal" tabIndex="-1" aria-labelledby="loadingModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body text-center" id="modalBody">
                            {/* 로딩 스피너 */}
                            <div id="loadingSpinner">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <p>로그인 확인 중...</p>
                            </div>
                            {/* 확인 후 나오는 성공 메시지 (초기엔 숨김 처리) */}
                            <div id="successMessage" className="success-message" style={{ display: 'none' }}>
                                <i className="fas fa-check-circle"></i>
                                <p id="welcomeMessage">안녕하세요, OOO님</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LoginStyle>
    );
}

export default Login;
