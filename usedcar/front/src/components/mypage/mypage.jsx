// MyPage.js
import React from 'react';
import ProfileInfo from './ProfileInfo';
import OrderHistory from './OrderHistory';
import WishList from './Wish';
import SoldItems from './SoldItems';
import EditInfo from './EditInfo';
import { Link } from 'react-router-dom';

const MyPage = () => {
  
  return (
    <div>
      <ProfileInfo id="user100" />
      <OrderHistory />
      <WishList />
      <SoldItems />
      <Link to="/EditInfo"><button className="modify btn btn-primary">회원정보 수정</button></Link>
    </div>
  );
};

export default MyPage;
