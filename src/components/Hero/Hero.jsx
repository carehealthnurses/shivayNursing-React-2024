import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import '../../components/Hero/Hero.scss';
import image from "../img/head1.png";

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Background Animation */}
      <div className="morphin-background"></div>

      {/* Image Section */}
      <motion.div
        className="hero-image-container"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={image} alt="Doctor" className="hero-image" />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="hero-text"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1>Welcome to</h1>
        <h2>
          <Typewriter
            words={["Care Health Nurses Pvt Ltd"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={1000}
          />
        </h2>
        <p>
          Providing personalized nursing care and home health services with compassion, 
          security, and reliability since 2014.
        </p>
        <motion.button
          className="hero-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HeroSection;
