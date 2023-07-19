// react
import React, {useEffect } from 'react';

// Components
import Section1 from '../components/blogs/Section1';

const Blogs = () => {
    useEffect(() => {
        document.title = 'Blogs - Yuhom Negros';
    }, []);

  return (
    <>
        <Section1 />
    </>
  )
}

export default Blogs