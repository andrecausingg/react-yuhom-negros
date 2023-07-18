import image6 from '../../images/upload/images6.jpg';

const HomeSection3 = () => {
  return (
    <>
    <div className="yot-pa-16 yot-content-space-mt-120 yot-container">
        {/* Title */}
        <div className="yot-mb-16">
            <h1 className="yot-tc-green1">Latest Gallery</h1>
          </div>
        {/* Grid Container */}
        <div className='yot-row-xl yot-flex-ai-c-jc-sb'>

          <div className='yot-col-50'>
            <div className='yot-row-m'>
              <img style={{ borderRadius: '10px', width:'100%'}} src={image6} alt=""/>
              <img style={{ borderRadius: '10px', width:'100%'}} src={image6} alt=""/>
            </div>
          </div>

          <div className='yot-pa-16 yot-col-50'>
            <h3>Explore more on our gallery</h3>
            <p>The blog post begins by examining the emerging technologies that are 
revolutionizing the industry landscape. We explore how these 
advancements are reshaping traditional practices and opening up new 
opportunities for businessesand professionals alike. Through in-depth 
analysis and real-life examples, we highlight the transformative power of 
these technologies and the impact they have on various sectors.</p>
            <button className="yot-btn-green1 yot-btn-shape-round yot-mt-8 yot-text-fs-xsm">View More</button>
          </div>
        </div>
    </div>
    </>
  );
}

export default HomeSection3