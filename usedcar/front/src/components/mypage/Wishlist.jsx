import React, { useState } from 'react';
import axios from 'axios';
import { ListGroupItem, CollapseContent, StyledWishList, WishListItem, WishListContainer } from './mypageStyle';


const WishList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ListGroupItem onClick={toggleCollapse}>
        찜한 차 <i className="fas fa-chevron-down action-icon"></i>
      </ListGroupItem>
      {isOpen && (
        <CollapseContent>
          <WishListContainer>
            <StyledWishList>  {/* 여기서 StyledWishList만 사용 */}
              <WishListItem>
                <img src="/src/assets/images/car.jpg" alt="기아 더 뉴 카니발" />
                <a href="/car-details/1.html">기아 더 뉴 카니발</a>
                <i className="fas fa-heart wish-icon"></i>
              </WishListItem>
              {/* 추가된 항목 */}
              <WishListItem>
                <img src="/src/assets/images/car.jpg" alt="현대 아반떼" />
                <a href="/car-details/2.html">현대 아반떼</a>
                <i className="fas fa-heart wish-icon"></i>
              </WishListItem>
              <WishListItem>
                <img src="/src/assets/images/car.jpg" alt="현대 아반떼" />
                <a href="/car-details/2.html">현대 아반떼</a>
                <i className="fas fa-heart wish-icon"></i>
              </WishListItem>
              <WishListItem>
                <img src="/src/assets/images/car.jpg" alt="현대 아반떼" />
                <a href="/car-details/2.html">현대 아반떼</a>
                <i className="fas fa-heart wish-icon"></i>
              </WishListItem>
              <WishListItem>
                <img src="/src/assets/images/car.jpg" alt="현대 아반떼" />
                <a href="/car-details/2.html">현대 아반떼</a>
                <i className="fas fa-heart wish-icon"></i>
              </WishListItem>
              <WishListItem>
                <img src="/src/assets/images/car.jpg" alt="현대 아반떼" />
                <a href="/car-details/2.html">현대 아반떼</a>
                <i className="fas fa-heart wish-icon"></i>
              </WishListItem>
              <WishListItem>
                <img src="/src/assets/images/car.jpg" alt="현대 아반떼" />
                <a href="/car-details/2.html">현대 아반떼</a>
                <i className="fas fa-heart wish-icon"></i>
              </WishListItem>
            </StyledWishList>
          </WishListContainer>
        </CollapseContent>
      )}
    </>
    // <>
    //   <ListGroupItem onClick={toggleCollapse}>
    //     찜한 차 <i className="fas fa-chevron-down action-icon"></i>
    //   </ListGroupItem>
    //   {isOpen && (
    //     <CollapseContent>
    //       <WishListContainer>
    //         <WishList>
    //           <WishListItem>
    //             <img src="/src/assets/images/car.jpg" alt="기아 더 뉴 카니발" />
    //             <a href="/car-details/1.html">기아 더 뉴 카니발</a>
    //             <i className="fas fa-heart wish-icon"></i>
    //           </WishListItem>
    //           {/* 다른 항목들 */}
    //         </WishList>
    //       </WishListContainer>
    //     </CollapseContent>
    //   )}
    // </>
  );


  //이는 styled components css로 바꾸기 전 걍 div로 렌더링만 한거
  // return (
  //   <>
  //     <li className="list-group-item" onClick={toggleCollapse}>
  //       찜한 차 <i className="fas fa-chevron-down action-icon"></i>
  //     </li>
  //     {isOpen && (
  //       <div id="wishlist" className="collapse-content">
  //         <div className="wish-list-container">
  //           <ul className="wish-list">
  //             <li>
  //               <img src="/src/assets/images/car.jpg" alt="기아 더 뉴 카니발" />
  //               <a href="/car-details/1.html">기아 더 뉴 카니발</a>
  //               <i className="fas fa-heart wish-icon"></i>
  //             </li>
  //             <li>
  //               <img src="/src/assets/images/car.jpg" alt="현대 아반떼" />
  //               <a href="/car-details/2.html">현대 아반떼</a>
  //               <i className="fas fa-heart wish-icon"></i>
  //             </li>
  //             {/* 추가 리스트 항목들 */}
  //           </ul>
  //         </div>
  //       </div>
  //     )}
  //   </>
  // );
};

export default WishList;