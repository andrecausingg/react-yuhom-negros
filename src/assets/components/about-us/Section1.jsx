import image7 from '../../images/upload/images7.jpg';
import image8 from '../../images/upload/images8.jpg';

const Section1 = () => {
  return (
    <>
          <div className='yot-content-space-mt-120 yot-container' style={{overflow:'hidden'}}>
            {/* Title */}
            <div className='yot-text-center yot-mb-48'>
              <h1 className='yot-resize-font-64 yot-mb-8 yot-tc-green1' data-aos="fade-up" data-aos-delay="800" data-aos-duration="800" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom" data-aos-once="true">About Us</h1>
              <h4 data-aos="zoom-out-up" data-aos-delay="700" data-aos-duration="700" data-aos-easing="ease-in-out" data-aos-once="true">Unveiling Negro's Hidden Treasures: Embark on a Journey of Discovery</h4>
            </div>

            {/* Grid Container */}
            <div className='grid-container-1csm-2cl' style={{alignItems:'center'}}>
              {/* Contact Information */}
              <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="800" data-aos-easing="ease-in-out" data-aos-once="true">
                <p className="yot-mb-8">Welcome to Uncover Negro's Treasures! We are a passionate team of travel enthusiasts dedicated to showcasing the hidden gems and unique experiences in the Negro region. Our mission is to provide travelers with a platform to uncover the rich cultural heritage, breathtaking landscapes, and captivating stories that make this region truly special.</p> 
              
                <p className="yot-mb-8">With our deep love for exploration and adventure, we aim to go beyond the well-trodden path and delve into the lesser-known corners of the Negro region. We believe that travel should be more than just visiting popular tourist destinations; it should be about immersing yourself in the local culture, connecting with the people, and uncovering the authentic essence of a place.</p>
              
                <p className="yot-mb-8">Through our carefully curated content, we will take you on a journey to uncover the treasures of Negro. From quaint villages tucked away in the mountains to vibrant markets brimming with local crafts and flavors, we will guide you to the hidden spots that reveal the soul of this remarkable region. Get ready to embark on a transformative travel experience where you'll create lasting memories and forge a deeper connection with the places you visit.</p>
              
                <p className="yot-mb-8">Join us as we embark on this exciting adventure of uncovering the treasures of Negro. Whether you're an intrepid solo traveler, a curious family, or a group of friends seeking new horizons, we invite you to explore the richness and diversity of this enchanting region. Let's discover the hidden gems together and create unforgettable moments along the way. Get ready to uncover the treasures of Negro and experience the magic that awaits you!</p>
              </div>

              <div data-aos="fade-down" data-aos-delay="500" data-aos-duration="800" data-aos-easing="ease-in-out" data-aos-once="true">
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

            {/* Mission */}
            <div className='yot-text-center yot-content-space-mt-80 yot-container'>
              <h1 className='yot-mb-8 yot-tc-green1' data-aos="zoom-in" data-aos-delay="800" data-aos-duration="800" data-aos-easing="ease-in-out" data-aos-once="true">Mission</h1>
              <p data-aos="zoom-in-down" data-aos-delay="800" data-aos-duration="800" data-aos-easing="ease-in-out" data-aos-once="true">Our mission is to unveil the hidden treasures of the Negro region, showcasing its rich cultural heritage, breathtaking landscapes, and 
captivating stories. We strive to provide travelers with a platform to explore and immerse themselves in the unique experiences this region 
has to offer. By highlighting the lesser-known gems, we aim to foster a deeper appreciation for the local communities, their traditions, and the 
natural wonders that make the Negro region an extraordinary destination.</p>
            </div>

            {/* Vission */}
            <div className='yot-text-center yot-mt-48'>
              <h1 className='yot-mb-8 yot-tc-green1' data-aos="zoom-in" data-aos-delay="800" data-aos-duration="800" data-aos-easing="ease-in-out" data-aos-once="true">Vission</h1>
              <p data-aos="zoom-in-down" data-aos-delay="800" data-aos-duration="800" data-aos-easing="ease-in-out" data-aos-once="true">Our vision is to be the go-to resource for travelers seeking authentic and off-the-beaten-path experiences in the Negro region. We aspire to inspire 
wanderlust and curiosity, encouraging visitors to venture beyond the well-trodden tourist paths and discover the true essence of this remarkable 
region. Through our platform, we aim to connect travelers with local communities, promote sustainable tourism practices, and create lasting 
memories that celebrate the cultural richness and natural beauty of the Negro region.</p>
            </div>
        </div>
    </>
  )
}

export default Section1