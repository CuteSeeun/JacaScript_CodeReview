// Header.jsx
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from "../../assets/icons/logo.png";
import HeaderWrap from "./headerStyle";

const Header = () => {
  const [uNo, setUNo] = useState(localStorage.getItem('uNo'));
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      if (uNo) {
        try {
          const response = await axios.get(`http://localhost:3333/header/${uNo}`);
          const userName = response.data.name;
          setName(userName);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchUserName();
  }, [uNo]);

  const Logout = () => {
    localStorage.removeItem('uNo');
    setUNo(null);
  };

  return (
    <HeaderWrap>
      <header className="header">
        <Link to="/">
          <img src={logo} alt="KRCAR" style={{ height: "40px" }} />
        </Link>
        <nav className="ms-auto">
          {uNo ? (
            <>
              <label>{name}님 어서오세요</label>
              <Link to="/" onClick={Logout}>로그아웃</Link>
              <Link to="/add">판매하기</Link>
              <Link to="/mypage">마이페이지</Link>
            </>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </nav>
      </header>
    </HeaderWrap>
  );
};

export default Header;
