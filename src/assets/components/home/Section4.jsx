import image7 from '../../images/upload/images7.jpg';
import image8 from '../../images/upload/images8.jpg';

const Section4 = () => {
  return (
    <>
    <div className="yot-pa-16 yot-content-space-mt-120 yot-container" style={{overflow:'hidden'}}>
        {/* Title */}
        <div className="yot-mb-16 yot-text-center">
            <h1 className="yot-tc-green1">About Us</h1>
          </div>
        {/* Grid Container */}
        <div className='yot-text-center'>
          <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="800" data-aos-duration="800" data-aos-easing="ease-in-out" data-aos-once="true">Welcome to Uncover Negro's Treasures! We are a passionate team of travel enthusiasts dedicated to 
showcasing the hidden gems and unique experiences in the Negro region. Our mission is to provide 
travelers with a platform to uncover the rich cultural heritage, breathtaking landscapes, and captivating
stories that make this region truly special.</p>
          <div className='yot-row-m yot-flex-ai-c-jc-c yot-mt-16'>
              <div className='yot-relative' data-aos="zoom-in-right" data-aos-delay="700" data-aos-duration="700" data-aos-easing="ease-in-out" data-aos-once="true">
                <img style={{ borderRadius: '10px', height:'300px', inset:0,}} src={image7} alt=""/>
                <img className='yot-absolute' style={{ borderRadius: '10px', height:'300px', inset:0, rotate:'-5deg', opacity:'0.5', zIndex:'-1'}} src={image7} alt=""/>
              </div>
                <div className='yot-mlr-4'></div>
              <div className='yot-relative' data-aos="zoom-in-left" data-aos-delay="700" data-aos-duration="700" data-aos-easing="ease-in-out" data-aos-once="true">
                <img style={{ borderRadius: '10px',height:'250px'}} src={image8} alt=""/>
                <img className='yot-absolute' style={{ borderRadius: '10px', height:'250px', inset:0, rotate:'5deg', opacity:'0.5',zIndex:'-1'}} src={image8} alt=""/>
              </div>
          </div>
        </div>
    </div>
    </>
  );
}

export default Section4