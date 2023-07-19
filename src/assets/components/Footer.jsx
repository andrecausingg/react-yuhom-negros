import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  // Scroll to top when link is clicked
  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  // Update active link based on current URL
  useEffect(() => {
    const path = location.pathname;
    setActiveLink(path);
  }, [location]);
  
  const socMed = [
    { name: 'Facebook', path: facebookIcon, value: 'https://web.facebook.com/yuhomsanegros' },
  ];

  const contact = [
    { name: 'Mobile', path: mobileIcon, value: '09672844016' },
    { name: 'Email', path: emailIcon, value: 'dcsmktgservices@gmail.com' },
  ];

  const locationData = [
    { name: 'Location', path: locationIcon, value: 'Negros, Occidental Philippines' },
  ];

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
                to="/react-yuhom-negros/"
                className={`yot-nav-link ${activeLink === '/react-yuhom-negros/' ? 'yot-active-bg-green1' : ''}`}
                onClick={() => {
                  handleLinkClick();
                }}
              >
                Home
              </Link>

              {/* Blogs */}
              <Link
                to="/react-yuhom-negros/blogs"
                className={`yot-nav-link ${activeLink === '/react-yuhom-negros/blogs' ? 'yot-active-bg-green1' : ''}`}
                onClick={() => {
                  handleLinkClick();
                }}
              >
                Blogs
              </Link>

              {/* Gallery */}
              <Link
                to="/react-yuhom-negros/gallery"
                className={`yot-nav-link ${activeLink === '/react-yuhom-negros/gallery' ? 'yot-active-bg-green1' : ''}`}
                onClick={() => {
                  handleLinkClick();
                }}
              >
                Gallery
              </Link>

              {/* About Us */}
              <Link
                to="/react-yuhom-negros/about-us"
                className={`yot-nav-link ${activeLink === '/react-yuhom-negros/about-us' ? 'yot-active-bg-green1' : ''}`}
                onClick={() => {
                  handleLinkClick();
                }}
              >
                About Us
              </Link>

              {/* Contact Us */}
              <Link
                to="/react-yuhom-negros/contact-us"
                className={`yot-nav-link ${activeLink === '/react-yuhom-negros/contact-us' ? 'yot-active-bg-green1' : ''}`}
                onClick={() => {
                  handleLinkClick();
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* <!-- Social Media --> */}
          <div className="yot-flex yot-flex-fd-c-ai-c">
            <h4 className="yot-tc-green1">Social Media</h4>
            {socMed.map((item, index) => (
              <div key={index} className="yot-flex yot-flex-fd-c-ai-c yot-text-center">
                <a href={item.value} target="_blank" rel="noopener noreferrer">
                  <img
                    className="yot-mb-4 yot-cursor-pointer"
                    src={item.path}
                    style={{ width: '30px' }}
                    alt={item.name}
                  />
                </a>
                <span>{item.value}</span>
              </div>
            ))}
          </div>

          {/* <!-- Contact --> */}
          <div className="yot-flex yot-flex-fd-c-ai-c">
            <h4 className="yot-tc-green1">Contact</h4>
            {contact.map((item, index) => (
              <div key={index} className="yot-flex yot-flex-fd-c-ai-c yot-mb-8">
                <img
                  className="yot-mb-4 yot-cursor-pointer"
                  src={item.path}
                  style={{ width: '30px' }}
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
              <div key={index} className="yot-flex yot-flex-fd-c-ai-c yot-text-center">
                <img
                  className="yot-mb-4 yot-cursor-pointer"
                  src={item.path}
                  style={{ width: '30px' }}
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
