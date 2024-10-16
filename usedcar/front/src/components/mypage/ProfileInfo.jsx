import React, { useState } from 'react';
import axios from 'axios';
import { MyPageContainer, MyPageHeader ,ProfileInfo as StyledProfileInfo } from './mypageStyle';

const ProfileInfo = ({ id }) => {
  return (
    <MyPageContainer>
      <div>
        <MyPageHeader>마이 페이지</MyPageHeader>
      </div>

      <StyledProfileInfo>
        <div>
          <p>{`${id}님, 안녕하세요`}</p>
        </div>
        <nav className="icons" aria-label="User actions">
          <a href="/main.html"><i className="fas fa-home"></i></a>
          <i className="fas fa-bell"></i>
        </nav>
      </StyledProfileInfo>
    </MyPageContainer>
  );
};

//이는 styled components css로 바꾸기 전 걍 div로 렌더링만 한거
// const ProfileInfo = ({ id }) => {
//   return (
//     <main className="mypage-container">
//       <div>
//         <h1>마이 페이지</h1>
//       </div>

//       <section className="profile-info">
//         <div>
//           <p>{`${id}님, 안녕하세요`}</p>
//         </div>
//         <nav className="icons" aria-label="User actions">
//           <a href="/main.html"><i className="fas fa-home"></i></a>
//           <i className="fas fa-bell"></i>
//         </nav>
//       </section>
//     </main>
//   );
// };

export default ProfileInfo;