function Login() {
    return (<>
        <div class="login-container shadow-lg">
            {/* <!-- 화살표 아이콘 --> */}
            <i class="fas fa-arrow-left back-btn" onclick="history.back()"></i>
            <h1>로그인</h1>

            {/* <!-- 아이디 입력 --> */}
            <div class="mb-3">
                <input type="text" class="form-control" placeholder="아이디 입력" />
            </div>

            {/* <!-- 비밀번호 입력 --> */}
            <div class="mb-3">
                <input type="password" class="form-control" placeholder="비밀번호 입력" />
            </div>

            {/* <!-- 자동 로그인 --> */}
            <div class="form-check mb-3 save-id">
                <input class="form-check-input" type="checkbox" id="save-id" />
                <label class="form-check-label" for="save-id">아이디 저장</label>
            </div>

            {/* <!-- 로그인 버튼 --> */}
            <button class="btn btn-danger w-100 login-btn mb-3" id="loginBtn" data-bs-toggle="modal" data-bs-target="#loadingModal">로그인</button>

            {/* <!-- 기타 로그인 옵션 --> */}
            <div class="text-center login-options mb-3">
                <a href="#">회원가입</a> |
                <a href="#">아이디찾기</a> |
                <a href="#">비밀번호 찾기</a>
            </div>

            {/* <!-- 구분선 --> */}
            <div class="divider">
                <hr />
            </div>

            {/* <!-- SNS 로그인 --> */}
            <div class="sns-login text-center">
                <p>3초 만에 로그인</p>
                <a href="#"><img src="https://via.placeholder.com/40x40?text=N" alt="Naver 로그인" /></a>
                <a href="#"><img src="https://via.placeholder.com/40x40?text=G" alt="Google 로그인" /></a>
                <a href="#"><img src="https://via.placeholder.com/40x40?text=K" alt="Kakao 로그인" /></a>
            </div>
        </div>

        {/* <!-- 모달 창-- > */}
        <div class="modal fade" id="loadingModal" tabindex="-1" aria-labelledby="loadingModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body text-center" id="modalBody">
                        {/* <!-- 로딩 스피너 --> */}
                        <div id="loadingSpinner">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <p>로그인 확인 중...</p>
                        </div>
                        {/* <!-- 확인 후 나오는 성공 메시지 (초기엔 숨김 처리) --> */}
                        <div id="successMessage" class="success-message" style="display: none;">
                            <i class="fas fa-check-circle"></i>
                            <p id="welcomeMessage">안녕하세요, OOO님</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}