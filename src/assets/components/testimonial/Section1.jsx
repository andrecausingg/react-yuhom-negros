import Carousel from '../Carousel'

const Section1 = () => {
  return (
    <>
      <div className='yot-content-space-mt-120 yot-container'>
          {/* Title */}
          <div className='yot-text-center yot-mb-48'>
            <h1 className='yot-mb-8'>Testimonial</h1>
            <p>Embrace Fashion with Hugotero: Where Style Meets Heartfelt Expression.</p>
          </div>
      </div>

      <div>
        <Carousel images={images} />
      </div>
    </>
  )
}

export default Section1