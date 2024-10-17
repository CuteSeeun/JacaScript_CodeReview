import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from "../../assets/icons/logo.png";
import { useAuth } from '../../AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const [name, setName] = useState('');


  useEffect(() => {
    const fetchUserName = async () => {
      if (user?.uNo) {
        try {
          const response = await axios.get(`http://localhost:3333/header/${user.uNo}`);
          const userName = response.data.name;
          setName(userName);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchUserName();
  }, [user?.uNo]);

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="KRCAR" style={{ height: "40px" }} />
      </Link>
      <nav className="ms-auto">
        {user?.uNo ? (
          <>
            <label>{name}님 어서오세요</label>
            <Link to="#" onClick={logout}>로그아웃</Link>
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
