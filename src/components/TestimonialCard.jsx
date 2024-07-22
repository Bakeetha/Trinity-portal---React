import React, {useState, useRef } from 'react';
import Slider from 'react-slick';
import Rating from "./ratingType";
import '../style.css';

export default function TestimonialCard() {
  const [showLess, setShowLess] = useState(true);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    autoplay: true,  // Enable auto-scrolling
    autoplaySpeed: 3000,  // Set auto-scrolling speed in milliseconds
    pauseOnHover: true,  // Pause auto-scrolling on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const testimonials = [
    {
      rating: <Rating />,
      name: "Jeff Sparfven",
      date: "4/6/2024",
      text: "We have had our system for two full years. Works great and looks great. Salesman was very professional and knowledgeable."
    },
    {
      rating: <Rating />,
      name: "Noman Gondal",
      date: "12/7/2023",
      text: "Great communication, easy to work with. Matthew was very professional and helpful, will recommend trinity solar for solar installation."
    },
    {
      rating: <Rating />,
      name: "Danielle Morales",
      date: "2/8/2024",
      text: "Matthew Cuccurese came to our home and made it a no brainer. I have met with 5 other companies over the years and it always felt like it was car salesman. Matthew and his company make it clear. If you are looking for a fixed financial set up for your long term and generous cash from fed/state for any near future purchase/investment -enjoy the tax credit. For me, I loved the purchase option. Nice company!"
    },
    {
      rating: <Rating />,
      name: "Raffi Ohanian",
      date: "2/28/2024",
      text: "I recently had an exceptional experience with Trinity Solar for solar panel installation in Kings Park, Long Island. From the initial consultation to the final installation, the team demonstrated unparalleled professionalism and expertise. Robbie, our primary contact at Trinity, exemplified outstanding customer service and in-depth knowledge about solar solutions. He was always available to answer our questions, ensuring that we were informed and comfortable throughout the process. His dedication and genuine approach made our journey to solar energy seamless and enjoyable. The support from the entire Trinity team was impressive, throughout the entire process. Our interactions, mainly with Robbie, roofers and panel installation team were positive and productive. Their coordinated efforts made the entire experience stress-free. The solar panel installation itself was a breeze. They worked fast, maintained a clean work environment, and were very good at communicating. I wholeheartedly recommend Trinity Solar to anyone on Long Island considering a transition to solar energy. Their reputation as a top-notch solar provider in Kings Park and beyond is well deserved. These guys are seasoned solar pros, no doubt about it."
    },
    {
      rating: <Rating />,
      name: "Selena Razzaq",
      date: "12/13/2023",
      text: "This has been a wonderful experience. Thad was very professional and I recommend him highly."
    },
    {
      rating: <Rating />,
      name: "Ivan Maldonado",
      date: "12/19/2023",
      text: "Amazing service, from first meeting, to dealing with the HOA, to completion of installation, trinity handled it all and exceeded my expectations. Caleb was extremely professional and an extreme help throughout the process."
    }
  ];
  const [expandedIndex, setExpandedIndex] = useState(null);
  const cardRefs = useRef([]);

  const toggleExpand = (index) => {
    setShowLess(!showLess);
    setExpandedIndex(expandedIndex === index ? null : index);
  };


  

  return (
    <div>
      <section>
        <div id="slider-container" className="max-w-6xl mx-auto mt-2">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <article key={index} 
              ref={(el) => cardRefs.current[index] = el}
              // className="shadow-2xl drop-shadow-xl w-80 p-6 rounded-lg gap-2 h-80 overflow-hidden">
                className={`shadow-lg  drop-shadow-xl w-80 p-6 rounded-lg gap-2 overflow-hidden transition-all duration-300 ${
                  expandedIndex === index ? 'h-auto' : 'h-80'
                }`}
                style={{ maxHeight: expandedIndex === index ? 'none' : '200px', overflow: 'hidden' }}
              >

                {testimonial.rating && testimonial.rating}
                <h2 className="text-l font-semibold">{testimonial.name} {testimonial.date}</h2>
                {/* <p className="text-gray-800 text-sm">
                  {showLess ? testimonial.text.slice(0, 250) : testimonial.text}</p>
                {testimonial.name && !testimonial.date && <span className="text-lg text-gray-700 font-semibold">{testimonial.name}</span>}
                {testimonial.text.length > 250 && (
                  <button className="text-blue-500 mt-2" onClick={() => toggleExpand(index)} 
                  // onClick={() => setShowLess(!showLess, index)}
                  
                    >
                    {showLess ? "Show More" : "Show Less"}
                  </button>
                )} */}

<p className="text-gray-800 text-sm">
                  {expandedIndex === index ? testimonial.text : `${testimonial.text.slice(0, 250)}${testimonial.text.length > 250 ? '...' : ''}`}
                </p>
                {testimonial.text.length > 250 && (
                  <button className="text-blue-500 mt-2" onClick={() => toggleExpand(index)}>
                    {expandedIndex === index ? "Show Less" : "Show More"}
                  </button>
                )}


              </article>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}