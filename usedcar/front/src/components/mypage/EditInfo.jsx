import React, { useState } from 'react';
import axios from 'axios';
import { ListGroupItem } from './mypageStyle';

const EditInfoLink = () => {
  return (
    <ListGroupItem>
      <a href="/editInfo.html" className="text-decoration-none text-dark">회원정보 수정</a>
    </ListGroupItem>
  );
};

//이는 styled components css로 바꾸기 전 걍 div로 렌더링만 한거
// const EditInfoLink = () => {
//     return (
//       <li className="list-group-item">
//         <a href="/editInfo.html" className="text-decoration-none text-dark">
//           회원정보 수정
//         </a>
//       </li>
//     );
//   };
  
  export default EditInfoLink;