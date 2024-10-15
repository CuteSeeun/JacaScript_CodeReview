import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            {/* 헤더 */}
            <div className='inner'>
                <Outlet/>
            </div>
            {/* 푸터 */}
        </div>
    );
};

export default Layout;