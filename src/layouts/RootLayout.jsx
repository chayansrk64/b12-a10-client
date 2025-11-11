import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;