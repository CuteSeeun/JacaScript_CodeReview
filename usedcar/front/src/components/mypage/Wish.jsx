import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ListGroupItem, CollapseContent, StyledWishList, WishListItem, WishListContainer } from './mypageStyle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const WishList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]); // wishlist 데이터를 저장할 상태

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  // useEffect로 데이터 가져오기
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get('http://localhost:3333/wishList');  // 백엔드에서 만든 API 호출
        setWishlist(response.data);  // 데이터를 상태에 저장
        console.log('데이터 상태에 저장 성공');
      } catch (error) {
        // console.error('Failed to fetch wishlist:', error);
        console.log('데이터 가져오기 실패 : ' + error);
      }
    };
    fetchWishlist();
    console.log('fetchWishlist 함수 호출 성공');
  }, []);

  // 항목을 리스트에서 제거하고 백엔드로 데이터 전송하는 함수
  const removeFromWishlist = async (cNo) => {
    try {
      //   // 1. React 상태에서 항목 제거
      //   setWishlist((prevWishlist) => prevWishlist.filter((car) => car.cNo !== cNo));
      //   console.log(`Car with cNo ${cNo} removed from wishlist`);

      //   // 2. 백엔드로 PUT 요청 보내서 DB 업데이트
      //   await axios.put(`http://localhost:3333/wishList/${cNo}`, {
      //     user_uno: 10, // user_uno를 10으로 전달
      //   });
      //   console.log(`Car with cNo ${cNo} updated in DB`);

      // } catch (error) {
      //   console.error('Error while removing from wishlist:', error);
      // }

      // 백엔드로 DELETE 요청을 보내서 favorite 값을 0으로 업데이트
      await axios.put(`http://localhost:3333/wishList/${cNo}`, { user_uno: 10 });

      // 성공적으로 백엔드에서 업데이트 후, 로컬 상태에서 해당 항목을 삭제
      setWishlist(wishlist.filter((car) => car.cNo !== cNo));
      console.log('삭제 성공');
    } catch (error) {
      console.log('삭제 실패 : ' + error);
    }
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

              {/* <WishListItem>
                <img src="/src/assets/images/car.jpg" alt="기아 더 뉴 카니발" />
                <a href="/car-details/1.html">기아 더 뉴 카니발</a>
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
              <WishListItem>
                <img src="/src/assets/images/car.jpg" alt="현대 아반떼" />
                <a href="/car-details/2.html">현대 아반떼</a>
                <i className="fas fa-heart wish-icon"></i>
              </WishListItem> */}

              {wishlist.map((car) => (
                <WishListItem key={car.cNo}>
                  <img src={car.image} alt={car.name} /> {/*car의 이미지 출력*/}
                  <a href={`/car-details/${car.cNo}`}>{car.name}</a> {/* car의 모델명 출력 */}
                  {/* <i className="fas fa-heart wish-icon"
                  style={{width:"50px", height:"50px"}}
                                       onClick={(e) => {
                      console.log('하트 클릭됨'); 
                       }}
                  >abc</i> */}

{/* <i className="fas fa-heart wish-icon" onClick={() => alert('Icon clicked!')} style={{ display: 'inline-block', pointerEvents: 'all', cursor: 'pointer' }}></i> */}

      <FontAwesomeIcon icon={faHeart } onClick={()=> console.log('클릭')} style={{ cursor: 'pointer', fontSize: '24px', color: 'red' }} />

                  {/* <svg width="30" height="30" viewBox="0 0 24 24" style={{cursor: 'pointer', pointerEvents: 'all' }} onClick={() => alert('SVG clicked!')}>
        <path fill="red" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
      </svg> */}
                </WishListItem>
              ))}
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