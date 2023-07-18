import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

// Images Logo
import logo from '../images/logo/yuhom-negros-logo-text.png';

// Components
import NavMobileOverlay from '../components/NavMobileOverLay';

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  // Body OverFlow Hidden
  useEffect(() => {
    if (hamburgerOpen) {
      document.body.style.overflow = 'hidden'; // Apply the 'overflow: hidden' style to the body
    } else {
      document.body.style.overflow = ''; // Reset the style when the login is closed
    }

    return () => {
      document.body.style.overflow = ''; // Reset the style when the component unmounts
    };
  }, [hamburgerOpen]);

  // Hamburger Open
  const handleClickHamburgerOpen = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  // Update active link based on current URL
  useEffect(() => {
    const path = location.pathname;
    setActiveLink(path === '/' ? 'home' : path.slice(1));
  }, [location]);

  return (
    <>
      {/* <!-- Header --> */}
      <header className="yot-header yot-bg-white yot-z-index-3">
        {/* <!-- Nav --> */}
        <nav className="yot-container yot-pa-16 yot-flex yot-flex-ai-c-jc-sb">

          {/* <!-- Logo --> */}
          <Link to="#" className="yot-flex yot-flex-ai-c-jc-c">
            <img src={logo} alt="Yuhom Logo Text Green" style={{ width: "150px" }} />
          </Link>

          {/* <!-- Nav Links --> */}
          <div className="yot-flex yot-nav-active yot-hide-for-large-laptop-down">
            {/* Home */}
            <Link
              to="/"
              className={activeLink === 'home' ? 'yot-active-bg-green1' : ''}
              onClick={() => setActiveLink('home')}
            >
              Home
            </Link>

            {/* Blogs */}
            <Link
              to="/blogs"
              className={activeLink === 'blogs' ? 'yot-active-bb-white' : ''}
              onClick={() => setActiveLink('blogs')}
            >
              Blogs
            </Link>

            {/* Look Book */}
            <Link
              to="/gallery"
              className={activeLink === 'gallery' ? 'yot-active-bb-white' : ''}
              onClick={() => setActiveLink('gallery')}
            >
              Gallery
            </Link>

            
            {/* About Us */}
            <Link
              to="/about-us"
              className={activeLink === 'about-us' ? 'yot-active-bb-white' : ''}
              onClick={() => setActiveLink('about-us')}
            >
              About Us
            </Link>


            {/* Contact Us */}
            <Link
              to="/contact-us"
              className={activeLink === 'contact-us' ? 'yot-active-bb-white' : ''}
              onClick={() => setActiveLink('contact-us')}
            >
              Contact Us
            </Link>


          </div>

          {/* <!-- Hamburger --> */}
          <div 
            className={`yot-hamburger yot-hide-for-large-laptop-up ${hamburgerOpen ? "yot-hamburger-open" : ""}`}
            onClick={handleClickHamburgerOpen}
          >
            <span></span><span></span><span></span>
          </div>
        </nav>
      </header>

      {/* <!-- Mobile Overlay --> */}
      {hamburgerOpen && (
        <>
          <NavMobileOverlay onClose={handleClickHamburgerOpen} />
        </>
      )}
    </>
  );
};

export default Header;
