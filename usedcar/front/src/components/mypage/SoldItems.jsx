import React, { useState } from 'react';
import axios from 'axios';
import { ListGroupItem, CollapseContent, WishListItem, StyledWishList } from './mypageStyle';

const SoldItems = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleCollapse = () => {
      setIsOpen(!isOpen);
    };

    return (
      <>
        <ListGroupItem onClick={toggleCollapse}>
          판매하기 <i className="fas fa-chevron-down action-icon"></i>
        </ListGroupItem>
        {isOpen && (
          <CollapseContent>
            <StyledWishList>
              <WishListItem>
                <a href="/add-new-car.html" className="add-icon">
                  <i className="fas fa-plus"> 판매</i>
                </a>
              </WishListItem>
              <WishListItem>
                <img src="/src/assets/images/car.jpg" alt="기아 더 뉴 카니발" />
                <a href="/car-details/1.html">기아 더 뉴 카니발</a>
              </WishListItem>
              <WishListItem>
                <img src="/src/assets/images/car.jpg" alt="기아 더 뉴 카니발" />
                <a href="/car-details/1.html">기아 더 뉴 카니발</a>
              </WishListItem>
              <WishListItem>
                <img src="/src/assets/images/car.jpg" alt="기아 더 뉴 카니발" />
                <a href="/car-details/1.html">기아 더 뉴 카니발</a>
              </WishListItem>
              <WishListItem>
                <img src="/src/assets/images/car.jpg" alt="기아 더 뉴 카니발" />
                <a href="/car-details/1.html">기아 더 뉴 카니발</a>
              </WishListItem>
              <WishListItem>
                <img src="/src/assets/images/car.jpg" alt="기아 더 뉴 카니발" />
                <a href="/car-details/1.html">기아 더 뉴 카니발</a>
              </WishListItem>
              <WishListItem>
                <img src="/src/assets/images/car.jpg" alt="기아 더 뉴 카니발" />
                <a href="/car-details/1.html">기아 더 뉴 카니발</a>
              </WishListItem>
              <WishListItem>
                <img src="/src/assets/images/car.jpg" alt="기아 더 뉴 카니발" />
                <a href="/car-details/1.html">기아 더 뉴 카니발</a>
              </WishListItem>
              {/* 다른 항목들 */}
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