import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { DetailUserWrap } from './detailStyle';
import { useEffect, useState } from 'react';
import axios from 'axios';

const DetailUser = () => {
    const location = useLocation();
    const {id} = useParams();
    const navigate = useNavigate();

    const [car,setCar] = useState(location.state);

    useEffect(()=>{
        const fetchCarData = async()=>{
            try {
                const response = await axios.get(`http://localhost:3333/car/${id}`)
                setCar(response.data);
            } catch (error) {
                console.log('error',error);
            }
        }
        fetchCarData();
    },[id,car])

    const inputChange = e =>{
        const {name,value} = e.target;
        setCar(prevCar => ({
            ...prevCar,
            [name]: value
        }));
    }

    const editUpdate = async()=>{
        try {
            await axios.put(`http://localhost:3333/car/${id}`,car);
            alert('차량 정보가 수정되었습니다!');
            navigate(`/detailmain/${id}`);
        } catch (error) {
            console.error('car update error ',error)
        }
    }

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
                    <input type="text" name="name" value={car.name} onChange={inputChange}  />
                    </div>
                    <div className="input-group">
                    <span>브랜드: </span>
                    <input type="text" name="brand" value={car.brand} onChange={inputChange}   />
                    </div>
                    <div className="input-group">
                    <span>연식: </span>
                    <input type="number" name="year" value={car.year} onChange={inputChange}    />
                    </div>
                    <div className="input-group">
                    <span>주행 거리: </span>
                    <input type="number" name="mileage" value={car.mileage} onChange={inputChange}    />
                    </div>
                    <div className="input-group">
                    <span>연료:</span> 
                    <input type="text" name="fueltype" value={car.fueltype} onChange={inputChange}    />
                    </div>
                    <div className="input-group">
                    <span>가격:</span> 
                    <input type="number"  name="price" value={car.price} onChange={inputChange}   />
                    </div>

                    {/* <div className="info-card">
                    <h3>차량 리뷰</h3>
                    <input type="text" />
                </div> */}
                    
            </div>


                <div className='sellState'>
                    <h3>판매 상태</h3>
                    <select>
                        <option value="판매중">판매중</option>
                        <option value="판매완료">판매완료</option>
                    </select>
                </div>

                <div className='userBtn'>
                <button className='editBtn' onClick={editUpdate}>수정하기</button>
                <button className='delBtn'>삭제하기</button>
                </div>

            </div>
        </DetailUserWrap>
    );
};

export default DetailUser;