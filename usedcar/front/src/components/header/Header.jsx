// Header.jsx
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from "../../assets/icons/logo.png";

const Header = () => {
  const uNo = localStorage.getItem('uNo');
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

  return (
    <header className="header">
      <Link to="/carListMain">
        <img src={logo} alt="KRCAR" style={{ height: "40px" }} />
      </Link>
      <nav className="ms-auto">
        {uNo ? (
          <>
            <label>{name}님 어서오세요</label>
            <Link>로그아웃</Link>
            <Link to="/sell">판매하기</Link>
            <Link to="/mypage">마이페이지</Link>
          </>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
