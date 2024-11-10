import React, { useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import img from '../../../assets/images/auth/landing-page/carousal-img1.png'

const TestimonialCarousel = () => {
  const carouselRef1 = useRef(null);

  const handlePrev = () => {
    carouselRef1.current.prev();
  };

  const handleNext = () => {
    carouselRef1.current.next();
  };
  

  return (
    <div className="testimonial-carousel">
      <button className="carousel-control prev" onClick={handlePrev}>
        ←
      </button>

      <Carousel ref={carouselRef1} interval={null} controls={false} indicators={false}>
        <Carousel.Item>
          <div className="testimonial-card rounded-4">
            <div className="testimonial-content row">
              <div className="d-flex flex-column w-25 col-12 col-md-5 col-lg-5">
             <div className="img-container w-100">
             <img
                src={img}
                alt="Person"
                className="testimonial-image img-fluid"
              />
             </div>
             <div className="details">
             <h4 className='mt-3'>Emily R</h4>
             <p>Marketing Specialist</p>
             </div>
              </div>
              <div className="testimonial-text col-12 col-md-7 col-lg-7 d-flex justify-content-center align-items-center">
                <blockquote>
                "I had been struggling to find a job that truly matched my skills and interests. After creating my profile on the HireFast platform, I was amazed by the personalized job recommendations I received. The AI-driven insights helped me refine my application, and the interview preparation resources were invaluable. Within weeks, I landed an amazing role at a company that perfectly aligned with my career goals. I can't thank HireFast enough for making my job search so efficient and successful!"
                </blockquote>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="testimonial-card rounded-4">
            <div className="testimonial-content row">
              <div className="d-flex flex-column w-25 col-12 col-md-5 col-lg-5">
             <div className="img-container w-100">
             <img
                src={img}
                alt="Person"
                className="testimonial-image img-fluid"
              />
             </div>
             <div className="details">
             <h4 className='mt-3'>Emily R</h4>
             <p>Marketing Specialist</p>
             </div>
              </div>
              <div className="testimonial-text col-12 col-md-7 col-lg-7 d-flex justify-content-center align-items-center">
                <blockquote>
                "I had been struggling to find a job that truly matched my skills and interests. After creating my profile on the HireFast platform, I was amazed by the personalized job recommendations I received. The AI-driven insights helped me refine my application, and the interview preparation resources were invaluable. Within weeks, I landed an amazing role at a company that perfectly aligned with my career goals. I can't thank HireFast enough for making my job search so efficient and successful!"
                </blockquote>
              </div>
            </div>
          </div>
        </Carousel.Item>
        
        {/* Add more Carousel.Items for additional testimonials */}
      </Carousel>

      <button className="carousel-control next" onClick={handleNext}>
        →
      </button>
    </div>
  );
};

export default TestimonialCarousel;
