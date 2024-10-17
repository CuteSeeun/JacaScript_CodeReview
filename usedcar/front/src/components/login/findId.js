import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function FindId() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });
    const [error, setError] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setResult('');
        try {
            const response = await axios.post('http://localhost:3333/login/findId', formData);
            console.log(response.data); // 응답 데이터가 올바른지 확인하기 위해 추가
            if (response.data.userid) {
                setResult(`${formData.name}님의 아이디는 ${response.data.userid}`)
            } else {
                setError('해당하는 사용자가 없습니다');
            }
        } catch (error) {
            console.error(error);
            setError('해당하는 사용자가 없습니다');
        }
    }


    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    return (
        <div className="login-container shadow-lg">
            {/* <!-- 화살표 아이콘 --> */}
            <i className="fas fa-arrow-left back-btn"></i>
            <h1>아이디 찾기</h1>
            {/* <!-- 아이디 입력 --> */}
            <div className="mb-3">
                <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="이름 입력" />
            </div>
            {/* <!-- 비밀번호 입력 --> */}
            <div className="mb-3">
                <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="이메일 입력" />
            </div>
            {error && <p className="text-danger">{error}</p>}
            {/* <!-- 로그인 버튼 --> */}
            <button className="btn btn-danger w-100 login-btn mb-3" id="loginBtn" onClick={handleSubmit} >아이디 찾기</button>
            {result && <p className="text-danger">{result}</p>}
            {/* <!-- 기타 로그인 옵션 --> */}
            {/* <div className="text-center login-options mb-3">
                <a href="#">아이디찾기</a> |
                <a href="#">비밀번호 찾기</a>
            </div> */}
        </div>
    );
}

export default FindId;
