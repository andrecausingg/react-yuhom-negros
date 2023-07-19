import React, {useEffect } from 'react';
import Section1 from '../components/about-us/Section1';


const AboutUs = () => {
    useEffect(() => {
        document.title = 'About Us - Yuhom Negros';
    }, []);

  return (
    <>
      <Section1 />
    </>
  )
}

export default AboutUs