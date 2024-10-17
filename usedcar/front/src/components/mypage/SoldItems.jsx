import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ListGroupItem, CollapseContent, WishListItem, StyledWishList } from './mypageStyle';
import { Link, useLocation } from 'react-router-dom';

const SoldItems = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [soldItems, setSoldItems] = useState([]); // soldItems 상태에 데이터를 저장
    // 로그인된 사용자의 user_uno를 localStorage에서 가져옴
    const user_uno = localStorage.getItem('uNo');
  
    
    const toggleCollapse = () => {
      setIsOpen(!isOpen);
    };

    // useEffect로 데이터 가져오기
  useEffect(() => {
    const fetchSoldItems = async () => {
      try {
        const response = await axios.get('http://localhost:3333/sold', {
          params: { user_uno }  // user_uno 값을 백엔드로 전송
        }); // 백엔드 API 호출
        setSoldItems(response.data); // 데이터를 상태에 저장
        console.log('데이터 상태에 저장 성공');
        console.log(response.data); // 데이터 출력
      } catch (error) {
        console.log('데이터 가져오기 실패: ' + error);
      }
    };
    fetchSoldItems();
  }, [user_uno]);  // user_uno가 변경될 때마다 데이터 가져오기

    return (
      <>
        <ListGroupItem onClick={toggleCollapse}>
          판매하기 <i className="fas fa-chevron-down action-icon"></i>
        </ListGroupItem>
        {isOpen && (
          <CollapseContent>
            <StyledWishList>
              <WishListItem>
                <Link to="/add" className="add-icon">
                  <i className="fas fa-plus"> 판매</i>
                </Link>
              </WishListItem>

            {/* soldItems 데이터를 map으로 렌더링 */}
            {soldItems.map((item) => (
              <WishListItem key={item.bNo}>  {/* bNo를 key로 설정 */}
                <img src={`http://localhost:3333${item.image}`} alt={item.name} /> {/* car의 이미지 */}
                <a href={`/car-details/${item.bNo}`}>{item.name}</a> {/* car의 이름 */}
                {/* <img src="/src/assets/images/car.jpg" alt="기아 더 뉴 카니발" />
                <a href="/car-details/1.html">기아 더 뉴 카니발</a> */}
              </WishListItem>
            ))}
            </StyledWishList>
          </CollapseContent>
        )}
      </>
    );
  
     //이는 styled components css로 바꾸기 전 걍 div로 렌더링만 한거
    // return (
    //   <>
    //     <li className="list-group-item" onClick={toggleCollapse}>
    //       판매하기 <i className="fas fa-chevron-down action-icon"></i>
    //     </li>
    //     {isOpen && (
    //       <div id="soldItems" className="collapse-content">
    //         <div className="car-list-container">
    //           <ul className="car-list">
    //             <li>
    //               <a href="/add-new-car.html" className="add-icon">
    //                 <i className="fas fa-plus"> 판매</i>
    //               </a>
    //             </li>
    //             <li>
    //               <img src="/src/assets/images/car.jpg" alt="기아 더 뉴 카니발" />
    //               <a href="/car-details/1.html">기아 더 뉴 카니발</a>
    //             </li>
    //             {/* 추가 리스트 항목들 */}
    //           </ul>
    //         </div>
    //       </div>
    //     )}
    //   </>
    // );
  };
  
  export default SoldItems;