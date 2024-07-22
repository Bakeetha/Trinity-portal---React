import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Testimonials = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const testimonials = [
    {
      id: 1,
      imgSrc: 'https://i.imgur.com/mdpVkkK.jpg',
      quote:
        'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.',
      clientName: 'Client Name',
      profession: 'Profession',
      delay: 0.5,
    },
    {
      id: 2,
      imgSrc: 'https://i.imgur.com/A2KXFsL.jpg',
      quote:
        'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.',
      clientName: 'Client Name',
      profession: 'Profession',
      delay: 0.7,
    },
    {
      id: 3,
      imgSrc: 'https://i.imgur.com/0Q3OuWP.jpg',
      quote:
        'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.',
      clientName: 'Client Name',
      profession: 'Profession',
      delay: 0.9,
    },
  ];

  return (
    <div className="container-fluid bg-light py-5 my-5" id="testimonial">
      <div className="container-fluid py-5">
        <h1
          className="display-5 text-center mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          Testimonial
        </h1>
        <div className="row justify-content-center">
          <div className="col-lg-3 d-none d-lg-block">
            <div className="testimonial-left h-100">
              {testimonials.map((testimonial) => (
                <img
                  key={testimonial.id}
                  className="img-fluid wow fadeIn"
                  data-wow-delay={testimonial.delay}
                  src={testimonial.imgSrc}
                  alt=""
                />
              ))}
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <Slider {...sliderSettings}>
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="testimonial-item text-center"
                >
                  <div className="position-relative mb-5">
                    <img
                      className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
                      src={testimonial.imgSrc}
                      alt=""
                    />
                    <div className="testimonial-icon">
                      <FaQuoteLeft className="text-primary" />
                    </div>
                  </div>
                  <p className="fs-5 fst-italic">{testimonial.quote}</p>
                  <hr className="w-25 mx-auto" />
                  <h5>{testimonial.clientName}</h5>
                  <span>{testimonial.profession}</span>
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-lg-3 d-none d-lg-block">
            <div className="testimonial-right h-100">
              {testimonials.map((testimonial) => (
                <img
                  key={testimonial.id}
                  className="img-fluid wow fadeIn"
                  data-wow-delay={testimonial.delay}
                  src={testimonial.imgSrc}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
