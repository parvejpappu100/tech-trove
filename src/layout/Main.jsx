import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from '../components/Header/Header';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <ScrollRestoration></ScrollRestoration>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;