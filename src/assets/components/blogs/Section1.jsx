import image1 from '../../images/upload/images1.jpg';
import image2 from '../../images/upload/images2.jpg';
import image3 from '../../images/upload/images3.jpg';


const images = [
  {
    image: image1,
    title: 'How collaboration makes us better designers',
    date: 'Jul 17, 2023',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    image: image2,
    title: 'How collaboration makes us better designers',
    date: 'Jul 17, 2023',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    image: image3,
    title: 'How collaboration makes us better designers',
    date: 'Jul 17, 2023',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    image: image1,
    title: 'How collaboration makes us better designers',
    date: 'Jul 17, 2023',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    image: image2,
    title: 'How collaboration makes us better designers',
    date: 'Jul 17, 2023',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    image: image3,
    title: 'How collaboration makes us better designers',
    date: 'Jul 17, 2023',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },{
    image: image1,
    title: 'How collaboration makes us better designers',
    date: 'Jul 17, 2023',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    image: image2,
    title: 'How collaboration makes us better designers',
    date: 'Jul 17, 2023',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    image: image3,
    title: 'How collaboration makes us better designers',
    date: 'Jul 17, 2023',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  }
  // Add more image objects here with the corresponding data
];

const Section1 = () => {
  return (
    <>
      <div className='yot-container yot-text-center yot-content-space-mt-160' style={{overflow:'hidden'}}>
        {/* Title */}
        <div className='yot-text-center yot-mb-48'>
          <h1 className='yot-resize-font-64 yot-mb-8 yot-tc-green1' data-aos="fade-up" data-aos-delay="800" data-aos-duration="800" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom" data-aos-once="true">Blogs</h1>
          <h4 data-aos="zoom-out-up" data-aos-delay="700" data-aos-duration="700" data-aos-easing="ease-in-out" data-aos-once="true">Unveiling the Vibrant Tapestry of Local Travel: Stay Updated with Negro's Here</h4>
        </div>

        {/* Grid Container */}
        <div className="grid-container-1csm-2cm-3cl">
          {images.map((image, index) => (
            <div key={index} style={{ overflow: 'hidden' }} data-aos="fade-down-right" data-aos-delay="600" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-once="true">
              <img style={{ borderRadius: '10px', width: '100%'}} src={image.image} alt=""/>
              <div>
                <h4>{image.title}</h4>
                <span className="yot-text-fs-t">{image.date}</span>
              </div>
              <p className="yot-text-fs-xsm">{image.description}</p>
            </div>
          ))}
        </div>
      </div>


    </>
  )
}

export default Section1