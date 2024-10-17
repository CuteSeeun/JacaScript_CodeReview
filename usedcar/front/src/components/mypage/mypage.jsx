// MyPage.js
import React from 'react';
import ProfileInfo from './ProfileInfo';
import OrderHistory from './OrderHistory';
import WishList from './Wish';
import SoldItems from './SoldItems';
import EditInfoLink from './EditInfo';
import { Link } from 'react-router-dom';

const MyPage = () => {
  return (
    <div>
      <ProfileInfo id="user100" />
      <OrderHistory />
      <WishList />
      <SoldItems />
      <Link to="EditInfo">회원정보 수정</Link>
    </div>
  );
};

export default MyPage;
