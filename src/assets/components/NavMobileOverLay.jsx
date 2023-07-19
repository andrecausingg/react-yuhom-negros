import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

// Images
import logo from '../images/logo/yuhom-negros-logo-text.png';
import angleRight from "../images/icons/angle-right-solid-white.svg";

const NavMobileOverlay = ({ onClose }) => {
  const [isShopOpen, setShopOpen] = useState(false);
  const [isRegularOpen, setRegularOpen] = useState(false);
  const [isStreetWearOpen, setStreetWearOpen] = useState(false);
  const [isAccessoriesOpen, setAccessoriesOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  // Close the Nav Bar
  const handleOverlayClick = () => {
    onClose();
  };

  const handleClickShop = () => {
    setShopOpen(!isShopOpen);
  };

  const handleClickRegular = () => {
    setRegularOpen(!isRegularOpen);
  };

  const handleClickStreetWear = () => {
    setStreetWearOpen(!isStreetWearOpen);
  };

  const handleClickAccessories = () => {
    setAccessoriesOpen(!isAccessoriesOpen);
  };

  // Update active link based on current URL
  useEffect(() => {
    const path = location.pathname;
    setActiveLink(path === '/' ? 'home' : path.slice(1));
  }, [location]);
  

  return (
    <>
      <div className="yot-overlay-bg-trans yot-animate-slide-right yot-hide-for-x-large-laptop-up yot-z-index-1" onClick={handleOverlayClick}></div>
      <div className="yot-overlay-left yot-bg-green1 yot-pa-16 yot-hide-for-x-large-laptop-up yot-tc-white yot-vh-100 yot-scrollbar-white yot-animate-slide-right yot-z-index-2" style={{overflowY:"auto"}}>
        <div className="yot-flex yot-flex-fd-c yot-text-fs-xxl yot-nav-active-mobile">
          {/* Home */}
          <Link
            to="/react-yuhom-negros/"
            style={{ overFlow: "hidden" }}
            onClick={() => setActiveLink('home')}
          >
            Home
          </Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </div>
    </>
  );
};

export default NavMobileOverlay;
