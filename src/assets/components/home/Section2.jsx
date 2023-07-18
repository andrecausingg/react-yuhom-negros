import image1 from '../../images/upload/images1.jpg';
import image2 from '../../images/upload/images2.jpg';
import image3 from '../../images/upload/images3.jpg';
import image4 from '../../images/upload/images4.jpg';
import image5 from '../../images/upload/images5.jpg';
import image6 from '../../images/upload/images6.jpg';

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
  }
  // Add more image objects here with the corresponding data
];

const HomeSection2 = () => {
  return (
    <>
      {/* Container */}
      <div className="yot-container yot-content-space-mt-120">
        {/* Title */}
        <div className="yot-mb-24">
          <h1 className="yot-tc-green1">Recent Blog Post</h1>
          <p>
            In our recent blog post, we explore a compelling topic that has been generating buzz in the industry. We delve into the nuances and implications of this subject, shedding light on its significance and providing valuable insights for our readers.
          </p>
          <button className="yot-btn-green1 yot-btn-shape-round yot-mt-8 yot-text-fs-xsm">See More</button>
        </div>
        {/* Grid Container */}
        <div className="grid-container-1csm-2cm-3cl">
          {images.map((image, index) => (
            <div key={index} style={{ overflow: 'hidden' }}>
              <img style={{ borderRadius: '10px', width: '100%'}} src={image.image} alt=""/>
              <div>
                <h4>{image.title}</h4>
                <span className="yot-text-fs-t">{image.date}</span>
              </div>
              <p className="yot-text-fs-xsm">{image.description}</p>
              <button className="yot-btn-green1 yot-btn-shape-round yot-mt-8 yot-text-fs-xsm">See More</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeSection2;
