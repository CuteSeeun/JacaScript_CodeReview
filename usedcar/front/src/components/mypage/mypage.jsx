// MyPage.js
import React from 'react';
import ProfileInfo from './ProfileInfo';
import OrderHistory from './OrderHistory';
import WishList from './Wish';
import SoldItems from './SoldItems';
import EditInfoLink from './EditInfo';

const MyPage = () => {
  return (
    <div>
      <ProfileInfo id="user100" />
      <OrderHistory />
      <WishList />
      <SoldItems />
      <EditInfoLink />
    </div>
  );
};

export default MyPage;
