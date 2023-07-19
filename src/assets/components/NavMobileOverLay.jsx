import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

// Images
const NavMobileOverlay = ({ onClose }) => {
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  // Close the Nav Bar
  const handleOverlayClick = () => {
    onClose();
  };

  // Update active link based on current URL
  useEffect(() => {
    const path = location.pathname;
    setActiveLink(path === '/' ? 'home' : path.slice(1));
  }, [location]);

  
  // Scroll to top when link is clicked
  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    onClose();
  };

  // Update active link based on current URL
  useEffect(() => {
    const path = location.pathname;
    setActiveLink(path);
  }, [location]);
  

  return (
    <>
      <div className="yot-overlay-bg-trans yot-animate-slide-right yot-hide-for-x-large-laptop-up yot-z-index-1" onClick={handleOverlayClick}></div>
      <div className="yot-overlay-left yot-bg-green1 yot-pa-16 yot-hide-for-x-large-laptop-up yot-tc-white yot-vh-100 yot-scrollbar-white yot-animate-slide-right yot-z-index-2" style={{overflowY:"auto"}}>
        <div className="yot-flex yot-flex-fd-c yot-text-fs-xxl yot-nav-active-mobile">
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
    </>
  );
};

export default NavMobileOverlay;
