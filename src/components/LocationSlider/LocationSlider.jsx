import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import '../../components/LocationSlider/LocationSlider.scss';
import { FaPhoneAlt, FaGlobe } from 'react-icons/fa';

const locations = [

  {
    address: "1/21 Gali No.1, Lalita Park, Laxmi Nagar, Delhi :110092",
    website: "www.carehealthhome.com",
    phones: ["+91-8447307473", "+91-9625436163"],
  },
  {
    address: "BS-807, 8th Floor, Galaxy Diamond Plaza, Near Gaur City Mall, Gr. Noida West 201309",
    website: "www.carehealth24x7.in",
    phones: ["+91-9999407473", "+91-9999320665"],
  },
  {
    address: "1195, Near Out Gate Back Side Sahara Mall, Maruti Vihar, Gurgaon",
    website: "www.carehealth24x7.com",
    phones: [" +91-9205981026"],
  },
  
  {
    address: "LGF-17, Rajhans Market, Ahinsa Khand - 1, Near Aditya Mall, Indirapuram, Gzb",
    website: "www.carehealthathome.in",
    phones: ["+91-9999407473", "+91-9999320665"],
  },

  
];

const LocationSlider = () => {
  return (
    <motion.div
      className="slider-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Title Section */}
      <motion.h2
        className="slider-title"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Our Locations
      </motion.h2>

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >
        {locations.map((location, index) => (
          <SwiperSlide key={index} className="card-slide">
            <motion.div
              className="location-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <p className="location-address">{location.address}</p>
              <a
                href={`https://${location.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="location-website"
                aria-label={`Visit website for ${location.address}`}
              >
                <FaGlobe className="icon" />
                {location.website}
              </a>
              <div className="location-phones">
                {location.phones.map((phone, i) => (
                  <p key={i} className="phone" aria-label={`Phone number: ${phone}`}>
                    <FaPhoneAlt className="icon" />
                    {phone}
                  </p>
                ))}
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default LocationSlider;
