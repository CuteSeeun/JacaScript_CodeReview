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
    const [filters, setFilters] = useState({
        brand: '',
        year: '',
        mileage: '',
        fueltype: '',
        price: '',
        color: ''
    });

    useEffect(() => {
        const carListData = async () => {
            try {
                const response = await axios.get('http://localhost:3333/car');
                setCarList(response.data);
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

    return (
        <CarListMainWrap>
            <CarListTop setSearch={setSearch} />
            <ContentWrap>
                <CarListBanner filters={filters} setFilters={setFilters} setSearch={setSearch}/>
                <CarListOutput carList={filteredCars} />
            </ContentWrap>
        </CarListMainWrap>
    );
};

export default CarListMain;
