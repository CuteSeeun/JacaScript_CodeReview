// MyPage.js
import React from 'react';
import ProfileInfo from './ProfileInfo';
import OrderHistory from './OrderHistory';
import WishList from './Wish';
import SoldItems from './SoldItems';
import { Link } from 'react-router-dom';
import { MyPageWrap } from './mypageStyle';

const MyPage = () => {
  
  return (
    <MyPageWrap>
      <ProfileInfo id="user100" />
      {/* <OrderHistory /> */}
      <WishList />
      <SoldItems />
      <Link to="/EditInfo"><button className="modify">회원정보 수정</button></Link>
    </MyPageWrap>
  );
};

export default MyPage;
