// Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';

const Layout = () => {
    return (
        <div>
            <Header/>
            <div className='inner'>
                <Outlet/>
            </div>
            {/* 푸터 */}
        </div>
    );
};

export default Layout;