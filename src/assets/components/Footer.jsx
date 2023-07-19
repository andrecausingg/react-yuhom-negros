// React
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

// Images
import logo from '../images/logo/yuhom-negros-logo-text.png';
import facebookIcon from '../images/icons/square-facebook.svg';
import emailIcon from '../images/icons/envelope-solid.svg';
import mobileIcon from '../images/icons/mobile-solid.svg';
import locationIcon from '../images/icons/location-dot-solid.svg';

// Components
import WaterMark from '../components/z-etc/WaterMark';



const Footer = () => {
    const [activeLink, setActiveLink] = useState('');

    const socMed = [
      { name: 'Facebook', path: facebookIcon, value: 'https://web.facebook.com/yuhomsanegros' }
    ];
    
    const contact = [
      { name: 'Mobile', path: mobileIcon, value: '09672844016' },
      { name: 'Email', path: emailIcon, value: 'dcsmktgservices@gmail.com' }
    ];
    
    const locationData = [
      { name: 'Location', path: locationIcon, value: 'Negros, Occidental Philippines'}
    ];

      
    // Update active link based on current URL
    useEffect(() => {
        const path = location.pathname;
        setActiveLink(path === '/' ? 'home' : path.slice(1));
    }, [location]);


  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="yot-bg-white yot-content-space-mt-80">
        <nav className="yot-container grid-container-1csm-2cm-4cl yot-pa-16">
          {/* <!-- Nav Links --> */}
          <div className="yot-flex yot-flex-fd-c-ai-c">
            <img className="yot-mb-8" src={logo} alt="" width="150" />
            {/* <!-- Nav Links --> */}
            <div className="yot-flex yot-flex-fd-c-ai-c-jc-c yot-nav-active-footer">
                {/* Home */}
                <Link
                    to="/"
                    className={`${activeLink === 'home' ? 'yot-active-bg-green1' : ''}`}
                    onClick={() => setActiveLink('home')}
                >
                    Home
                </Link>

                {/* Blogs */}
                <Link
                    to="/blogs"
                    className={` ${activeLink === 'blogs' ? 'yot-active-bb-white' : ''}`}
                    onClick={() => setActiveLink('blogs')}
                >
                    Blogs
                </Link>

                {/* Look Book */}
                <Link
                    to="/gallery"
                    className={` ${activeLink === 'gallery' ? 'yot-active-bb-white' : ''}`}
                    onClick={() => setActiveLink('gallery')}
                >
                    Gallery
                </Link>

                {/* About Us */}
                <Link
                    to="/about-us"
                    className={` ${activeLink === 'about-us' ? 'yot-active-bb-white' : ''}`}
                    onClick={() => setActiveLink('about-us')}
                >
                    About Us
                </Link>

                {/* Contact Us */}
                <Link
                    to="/contact-us"
                    className={`${activeLink === 'contact-us' ? 'yot-active-bb-white' : ''}`}
                    onClick={() => setActiveLink('contact-us')}
                >
                    Contact Us
                </Link>
            </div>
          </div>

        {/* <!-- Social Media --> */}
        <div className="yot-flex yot-flex-fd-c-ai-c">
            <h4 className="yot-tc-green1">Location</h4>
            {socMed.map((item, index) => (
              <div
                key={index}
                className="yot-flex yot-flex-fd-c-ai-c yot-text-center"
              >
                <img
                  className="yot-mb-4 yot-cursor-pointer"
                  src={item.path}
                  style={{ width: "30px" }}
                  alt={item.name}
                />
                <span>{item.value}</span>
              </div>
            ))}
          </div>

          {/* <!-- Contact --> */}
          <div className="yot-flex yot-flex-fd-c-ai-c">
            <h4 className="yot-tc-green1">Contact</h4>
            {contact.map((item, index) => (
              <div
                key={index}
                className="yot-flex yot-flex-fd-c-ai-c yot-mb-8"
              >
                <img
                  className="yot-mb-4 yot-cursor-pointer"
                  src={item.path}
                  style={{ width: "30px" }}
                  alt={item.name}
                />
                <span>{item.value}</span>
              </div>
            ))}
          </div>

          {/* <!-- Location --> */}
          <div className="yot-flex yot-flex-fd-c-ai-c">
            <h4 className="yot-tc-green1">Location</h4>
            {locationData.map((item, index) => (
              <div
                key={index}
                className="yot-flex yot-flex-fd-c-ai-c yot-text-center"
              >
                <img
                  className="yot-mb-4 yot-cursor-pointer"
                  src={item.path}
                  style={{ width: "30px" }}
                  alt={item.name}
                />
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </nav>

        <WaterMark />
      </footer>
    </>
  );
};

export default Footer;
