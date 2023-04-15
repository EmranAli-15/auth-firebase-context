import React from 'react';
import { Outlet } from 'react-router-dom'
import Header from '../Header';

const Prime = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Prime;