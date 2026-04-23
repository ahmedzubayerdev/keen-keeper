import React from 'react';
import Navbar from "../components/shared/navbar/Navbar"
import Footer from '../components/shared/footer/Footer';
import { Outlet } from 'react-router';

const Mainlayout = () => {
    return (
        <>
            <Navbar ></Navbar>
            <Outlet></Outlet>
            <Footer ></Footer>
        </>
            
    );
};

export default Mainlayout;