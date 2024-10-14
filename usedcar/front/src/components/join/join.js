// join.js
import { useNavigate } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

function Join() {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        passwordConfirm: '',
        phone: '',
        email: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const verifyBtnRef = useRef(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    useEffect(() => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(formData.email)) {
            verifyBtnRef.current.style.display = 'block'; // 이메일 유효할 경우 버튼 표시
        } else {
            verifyBtnRef.current.style.display = 'none'; // 이메일 유효하지 않을 경우 버튼 숨기기
        }
    }, [formData.email]);

    const back = () => {
        navigate('/login'); // '/login' 경로로 이동
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.passwordConfirm) {
            setError('비밀번호가 일치하지 않습니다.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:3333/user/saveUser', formData);
            console.log(response.data);
            navigate('/login'); // 성공적으로 저장된 후 로그인 페이지로 이동
        } catch (error) {
            console.error('Error saving user:', error);
            setError('사용자 저장 중 오류가 발생했습니다.');
        }
    };

    return (
        <div className="signup-container shadow-lg">
            <i className="fas fa-arrow-left back-btn" onClick={back}></i>
            <h1>회원가입</h1>
            <form onSubmit={handleSubmit}>
                {/* 이름 입력 */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">이름 <span className="required-label">*</span></label>
                    <input type="text" className="form-control" id="name" placeholder="이름 입력"
                        value={formData.name} onChange={handleChange} />
                </div>

                {/* 아이디 입력 */}
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">아이디 <span className="required-label">*</span></label>
                    <input type="text" className="form-control" id="username" placeholder="영문과 숫자 포함 4-12자리"
                        value={formData.username} onChange={handleChange} />
                </div>

                {/* 비밀번호 입력 */}
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">비밀번호 <span className="required-label">*</span></label>
                    <input type="password" className="form-control" id="password" placeholder="비밀번호 입력"
                        value={formData.password} onChange={handleChange} />
                </div>

                {/* 비밀번호 확인 */}
                <div className="mb-3">
                    <label htmlFor="passwordConfirm" className="form-label">비밀번호 확인 <span className="required-label">*</span></label>
                    <input type="password" className="form-control" id="passwordConfirm" placeholder="비밀번호 확인"
                        value={formData.passwordConfirm} onChange={handleChange} />
                </div>

                {/* 휴대전화번호 입력 */}
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">휴대전화번호 <span className="required-label">*</span></label>
                    <input type="text" className="form-control" id="phone" placeholder="'-' 제외하고 숫자만 입력"
                        value={formData.phone} onChange={handleChange} />
                </div>

                {/* 이메일 입력 */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">이메일</label>
                    <input type="email" className="form-control" id="email" placeholder="example@encar.com"
                        value={formData.email} onChange={handleChange} />
                </div>

                {/* 이메일 인증 버튼 (초기에는 숨겨져 있음) */}
                <button ref={verifyBtnRef} className="btn btn-success w-100 email-verify-btn" style={{ display: 'none', marginBottom: '15px' }}>이메일 인증하기</button>

                {/* 완료 버튼 */}
                <button type="submit" className="btn btn-danger w-100 signup-btn">완료</button>
            </form>
            {error && <p className="text-danger">{error}</p>}
        </div>
    );
}

export default Join;
