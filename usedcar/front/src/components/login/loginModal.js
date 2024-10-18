import React from 'react';

const Modal = ({ show, name }) => {
    if (!show) {
        return null;
    }
    return (
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
                            <p id="welcomeMessage">안녕하세요, {name}님</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
