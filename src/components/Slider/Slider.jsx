import React from 'react';
import Slider from 'react-slick';
import image1 from '../img/image1.jpg';
import image2 from '../img/image2.jpg';
import image3 from '../img/image3.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Slider Component
const SliderComponent = () => {
  const sliderSettings = {
    dots: true, // Display dots for navigation
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed in ms
    cssEase: "ease-in-out", // Transition easing
    fade: true, // Enable fade transition
    arrows: true, // Show navigation arrows
    adaptiveHeight: true, // Adjust height for each slide
    pauseOnHover: true, // Pause on hover
  };

  return (
    <div className="slider-container">
      <Slider {...sliderSettings}>
        {[image1, image2, image3].map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* <h2 className="text-white text-3xl font-bold">Slide {index + 1}</h2> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
