import React, { useState } from 'react';
import { ListGroupItem, CollapseContent, Table } from './mypageStyle';
import axios from 'axios';

const OrderHistory = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleCollapse = () => {
      setIsOpen(!isOpen);
    };

    return (
      <>
        <ListGroupItem onClick={toggleCollapse}>
          주문 내역 <i className="fas fa-chevron-down action-icon"></i>
        </ListGroupItem>
        {isOpen && (
          <CollapseContent>
            <Table>
              <thead>
                <tr>
                  <th>상품명</th>
                  <th>가격</th>
                  <th>수량</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>상품 A</td>
                  <td>10,000원</td>
                  <td>1개</td>
                </tr>
              </tbody>
            </Table>
          </CollapseContent>
        )}
      </>
    );
  
  //이는 styled components css로 바꾸기 전 걍 div로 렌더링만 한거
  //   return (
  //     <nav aria-label="Main menu">
  //       <ul>
  //         <li className="list-group-item" onClick={toggleCollapse}>
  //           주문 내역 <i className="fas fa-chevron-down action-icon"></i>
  //         </li>
  //         {isOpen && (
  //           <div id="orderHistory" className="collapse-content">
  //             <table className="table">
  //               <thead>
  //                 <tr>
  //                   <th>상품명</th>
  //                   <th>가격</th>
  //                   <th>수량</th>
  //                 </tr>
  //               </thead>
  //               <tbody>
  //                 <tr>
  //                   <td>상품 A</td>
  //                   <td>10,000원</td>
  //                   <td>1개</td>
  //                 </tr>
  //               </tbody>
  //             </table>
  //           </div>
  //         )}
  //       </ul>
  //     </nav>
  //   );
  };
  
  export default OrderHistory;