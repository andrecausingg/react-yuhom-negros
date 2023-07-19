import React, {useEffect } from 'react';

import Section1 from '../components/contact-us/Section1'

const ContactUs = () => {
  useEffect(() => {
    document.title = 'Contact Us - Yuhom Negros';
  }, []);


  return (
    <>
        <Section1 />
    </>
  )
}

export default ContactUs