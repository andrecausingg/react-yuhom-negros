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
    setActiveLink(path);
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
