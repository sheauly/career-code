import React from 'react';
import { Outlet } from 'react-router';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';


const RootLayOut = () => {
    return (
        <div>
            <header>
            <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto bg-base-200'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayOut;