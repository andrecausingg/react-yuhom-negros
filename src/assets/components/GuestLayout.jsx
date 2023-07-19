// React
import React, {useEffect } from 'react';
import { Outlet } from 'react-router-dom'

// Library Aos
import AOS from 'aos';
import 'aos/dist/aos.css';

// Component
import Header from "./Header";
import Footer from '../components/Footer'

const GuestLayout = () => { 
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default GuestLayout