import React from "react";


function FindId() {
    return (
        <div className="login-container shadow-lg">
            {/* <!-- 화살표 아이콘 --> */}
            <i className="fas fa-arrow-left back-btn" onclick="history.back()"></i>
            <h1>아이디 찾기</h1>

            {/* <!-- 아이디 입력 --> */}
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="이름 입력" />
            </div>

            {/* <!-- 비밀번호 입력 --> */}
            <div className="mb-3">
                <input type="password" className="form-control" placeholder="이메일 입력" />
            </div>



            {/* <!-- 로그인 버튼 --> */}
            <button className="btn btn-danger w-100 login-btn mb-3" id="loginBtn" data-bs-toggle="modal" data-bs-target="#loadingModal">아이디 찾기</button>

            {/* <!-- 기타 로그인 옵션 --> */}
            <div className="text-center login-options mb-3">
                <a href="#">아이디찾기</a> |
                <a href="#">비밀번호 찾기</a>
            </div>
        </div>
    );
}

export default FindId;