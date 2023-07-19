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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [hamburgerOpen]);

  // Hamburger Open
  const handleClickHamburgerOpen = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  // Scroll to top when link is clicked
  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
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
              onClick={() => {
                setActiveLink('home');
                handleLinkClick();
              }}
            >
              Home
            </Link>

            {/* Blogs */}
            <Link
              to="/blogs"
              className={activeLink === 'blogs' ? 'yot-active-bg-green1' : ''}
              onClick={() => {
                setActiveLink('blogs');
                handleLinkClick();
              }}
            >
              Blogs
            </Link>

            {/* Look Book */}
            <Link
              to="/gallery"
              className={activeLink === 'gallery' ? 'yot-active-bg-green1' : ''}
              onClick={() => {
                setActiveLink('gallery');
                handleLinkClick();
              }}
            >
              Gallery
            </Link>

            {/* About Us */}
            <Link
              to="/about-us"
              className={activeLink === 'about-us' ? 'yot-active-bg-green1' : ''}
              onClick={() => {
                setActiveLink('about-us');
                handleLinkClick();
              }}
            >
              About Us
            </Link>

            {/* Contact Us */}
            <Link
              to="/contact-us"
              className={activeLink === 'contact-us' ? 'yot-active-bg-green1' : ''}
              onClick={() => {
                setActiveLink('contact-us');
                handleLinkClick();
              }}
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
