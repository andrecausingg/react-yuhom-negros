import React, {useEffect } from 'react';
import Section1 from '../components/gallery/Section1';

const Gallery = () => {
    useEffect(() => {
        document.title = 'Home - Yuhom Negros';
    }, []);

  return (
    <>
      <Section1 />
    </>
  )
}

export default Gallery