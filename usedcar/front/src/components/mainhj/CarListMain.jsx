import React, { useEffect, useState } from 'react';
import CarListBanner from './CarListBanner';
import CarListOutput from './CarListOutput';
import CarListTop from './CarListTop';
import { CarListMainWrap, ContentWrap } from './carListStyle';
import axios from 'axios';

const CarListMain = () => {
    const [carList, setCarList] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredCars, setFilteredCars] = useState([]);

    const [input , setInput] = useState('');

    const [filters, setFilters] = useState({
        brand: '',
        year: '',
        mileage: '',
        fueltype: '',
        price: '',
        color: '',
    });

    const [currentPage , setCurrentPage] = useState(1);

    useEffect(() => {
        const carListData = async () => {
            const user_uno = localStorage.getItem('uNo');  // 유저 번호 가져오기
            try {
                const response = await axios.get(`http://localhost:3333/car?user_uno=${user_uno}`);
                setCarList(response.data);
                console.log('이펙트 :',response.data);
                
                setFilteredCars(response.data);
            } catch (error) {
                console.error('carList error', error);
            }
        };
        carListData();
    }, []);

    useEffect(() => {
        const filtered = filterCars(carList, filters, search);
        setFilteredCars(filtered);
        setCurrentPage(1);
    }, [filters, search, carList]);

    const filterCars = (cars, filters, search) => {
        return cars.filter(car => {
            const isBrandMatch = !filters.brand || car.brand === filters.brand;
            const isMileageMatch = !filters.mileage || filterMileage(car.mileage, filters.mileage);
            const isYearMatch = !filters.year || car.year === parseInt(filters.year, 10);
            const isPriceMatch = !filters.price || filterPrice(car.price, filters.price);
            const isSearchMatch = !search || car.name.toLowerCase().includes(search.toLowerCase());
            const isFuelTypeMatch = !filters.fueltype || car.fueltype === filters.fueltype;
            const isColorMatch = !filters.color || car.color === filters.color;

            return isBrandMatch && isMileageMatch && isYearMatch && isPriceMatch && isSearchMatch && isFuelTypeMatch && isColorMatch;
        });
    };

    const filterMileage = (carMileage, selectedMileageRange) => {
        const [minMileage, maxMileage] = selectedMileageRange.split('-').map(v => (v === '+' ? Number.MAX_SAFE_INTEGER : +v));
        return carMileage >= minMileage && carMileage <= (maxMileage || Number.MAX_SAFE_INTEGER);
    };

    const filterPrice = (carPrice, selectedPriceRange) => {
        const priceLimits = {
            '2000-5000': [2000, 5000],
            '5000-7000': [5000, 7000],
            '7000-10000': [7000, 10000],
            '10000+': [10000, Number.MAX_SAFE_INTEGER]
        };
        
        const [minPrice, maxPrice] = priceLimits[selectedPriceRange] || [0, Number.MAX_SAFE_INTEGER];
        return carPrice >= minPrice && carPrice <= maxPrice;
    };

    const searchValue = value =>{
        setSearch(value);

        const matchedCars = carList.filter(car => car.name.toLowerCase().includes(value.toLowerCase()));
        
        if(matchedCars.length > 0){
            const carBrand = matchedCars.brand;
            setFilters(prevCar =>({
                ...prevCar,
                brand:carBrand,
            }))
        }
    }

    return (
        <CarListMainWrap>
            <CarListTop setSearch={searchValue} input={input} setInput={setInput} />
            <ContentWrap>
                <CarListBanner filters={filters} setFilters={setFilters} setSearch={setSearch} setInput={setInput} />
                <CarListOutput carList={filteredCars} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </ContentWrap>
        </CarListMainWrap>
    );
};

export default CarListMain;
