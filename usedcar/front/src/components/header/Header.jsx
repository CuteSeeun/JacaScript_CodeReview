// Header.js
import React from "react";
import "./HeaderStyle.css"; // CSS 파일을 임포트합니다.
import logo from "../../assets/icons/logo.png";

const Header = () => {
  return (
    <header className="header">
      <a href="/main.html" className="navbar-brand">
        <img src={logo} alt="KRCAR" style={{ height: "40px" }} />
      </a>
      <nav className="ms-auto">
        <a href="/sell.html" className="sell-btn">
          판매하기
        </a>
        <a href="/login.html" className="me-3 text-decoration-none">
          로그인
        </a>
        <a href="/mypage.html" className="text-decoration-none">
          마이페이지
        </a>
      </nav>
    </header>
  );
};

export default Header;
