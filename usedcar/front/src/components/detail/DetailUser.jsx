import { DetailUserWrap } from './detailStyle';

const DetailUser = () => {



    return (
        <DetailUserWrap>
             <div className="image-section">
                <img src={require('../../assets/images/car.jpg')} alt="" />
            </div>

            <div className='info-section'>

                <div className='info-card'>
                    <h3>차량 정보</h3>
                    <div className="input-group">
                    <span>모델명: </span>
                    <input type="text" />
                    </div>
                    <div className="input-group">
                    <span>브랜드: </span>
                    <input type="text" />
                    </div>
                    <div className="input-group">
                    <span>연식: </span>
                    <input type="number"  />
                    </div>
                    <div className="input-group">
                    <span>주행 거리: </span>
                    <input type="number"  />
                    </div>
                    <div className="input-group">
                    <span>연료:</span> 
                    <input type="text"  />
                    </div>
                    <div className="input-group">
                    <span>가격:</span> 
                    <input type="number"  />
                    </div>

                    <div className="info-card">
                    <h3>차량 리뷰</h3>
                    <input type="text" />
                </div>
                    
            </div>


                <div className='sellState'>
                    <h3>판매 상태</h3>
                    <select>
                        <option value="판매중">판매중</option>
                        <option value="판매완료">판매완료</option>
                    </select>
                </div>

                <div className='userBtn'>
                <button className='editBtn'>수정하기</button>
                <button className='delBtn'>삭제하기</button>
                </div>

            </div>
        </DetailUserWrap>
    );
};

export default DetailUser;