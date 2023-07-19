import facebookIcon from '../../images/icons/square-facebook.svg';
import emailIcon from '../../images/icons/envelope-solid.svg';
import mobileIcon from '../../images/icons/mobile-solid.svg';
import locationIcon from '../../images/icons/location-dot-solid.svg';

const Section5 = () => {
  
  const socMed = [
    { name: 'Facebook', path: facebookIcon, value: 'https://web.facebook.com/yuhomsanegros' }
  ];
  
  const contact = [
    { name: 'Mobile', path: mobileIcon, value: '09672844016' },
    { name: 'Email', path: emailIcon, value: 'dcsmktgservices@gmail.com' }
  ];
  
  const location = [
    { name: 'Location', path: locationIcon, value: 'Negros, Occidental Philippines'}
  ];

  return (
    <>
    <div className="yot-pa-16 yot-content-space-mt-120 yot-container" style={{overflow:'hidden'}}>
        {/* Grid Container */}
        <div className='grid-container-1csm-2cl' style={{alignItems:'center'}}>
          {/* Contact Information */}
          <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="800" data-aos-easing="ease-in-out" data-aos-once="true">
            <h1 className='yot-tc-green yot-mb-16'>Contact Information</h1>

            {/* SocMed */}
            {socMed.map((item, index) => (
              <div
                key={index}
                className="yot-flex yot-flex-ai-c yot-mb-8"
              >
                <img
                  className="yot-mb-4 yot-cursor-pointer"
                  src={item.path}
                  style={{ width: "30px" }}
                  alt={item.name}
                />
                <span className='yot-ml-4'>{item.value}</span>
              </div>
            ))}

            {/* Contact */}
            {contact.map((item, index) => (
              <div
                key={index}
                className="yot-flex yot-flex-ai-c yot-mb-8"
              >
                <img
                  className="yot-mb-4 yot-cursor-pointer"
                  src={item.path}
                  style={{ width: "30px" }}
                  alt={item.name}
                />
                <span className='yot-ml-4'>{item.value}</span>
              </div>
            ))}

            {/* Location */}
            {location.map((item, index) => (
              <div
                key={index}
                className="yot-flex yot-flex-ai-c"
              >
                <img
                  className="yot-mb-4 yot-cursor-pointer yot-mb-8"
                  src={item.path}
                  style={{ width: "30px" }}
                  alt={item.name}
                />
                <span className='yot-ml-4'>{item.value}</span>
              </div>
            ))}
          </div>

          <div data-aos="fade-down" data-aos-delay="500" data-aos-duration="800" data-aos-easing="ease-in-out" data-aos-once="true">
            <div className='yot-row-l yot-mb-8'>
                <div className='yot-form-group yot-col-50'>
                    <label htmlFor="firstName">First Name</label>
                    <input className='yot-form-input-bb' type="text" name="" id="" />
                </div>

                <div className='yot-form-group yot-col-50'>
                    <label htmlFor="Last Name">Last Name</label>
                    <input className='yot-form-input-bb' type="text" name="" id="" />
                </div>
            </div>

            <div className='yot-row-l yot-mb-8'>
                <div className='yot-form-group yot-col-50'>
                    <label htmlFor="email">Email</label>
                    <input className='yot-form-input-bb' type="text" name="" id="" />
                </div>

                <div className='yot-form-group yot-col-50'>
                    <label htmlFor="phone">Phone</label>
                    <input className='yot-form-input-bb' type="text" name="" id="" />
                </div>
            </div>

            <div className='yot-mb-8'>
                <div className='yot-text-center'>
                  <label htmlFor="message">Message</label>
                </div>
                <input className='yot-form-input-bb' type="text" name="" id="" />
            </div>
            
            <div className='yot-text-center'>
              <button className="yot-btn-green1 yot-btn-shape-round yot-mt-8 yot-text-fs-xsm">Submit</button>
            </div>
          </div>
        </div>
    </div>
    </>
  );
}

export default Section5