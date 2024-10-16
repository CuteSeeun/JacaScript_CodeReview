// Header.js
import React from "react";
import logo from "../../assets/icons/logo.png";
import { HeaderWrap } from "./headerStyle.js";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderWrap>
    <header className="header">
      <Link to="" className="navbar-brand">
        <img src={logo} alt="KRCAR" style={{ height: "40px" }} />
      </Link>
      <nav className="ms-auto">
       <Link to="/">
          판매하기
       </Link> 
       <Link to="/">
          로그인
       </Link>
       <Link to="/">
          마이페이지
       </Link>
      </nav>
    </header>
    </HeaderWrap>
  );
};

export default Header;
