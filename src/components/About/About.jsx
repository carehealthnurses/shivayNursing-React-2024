import React from "react";
import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaStethoscope,
  FaMedkit,
  FaProcedures,
} from "react-icons/fa";
import "./about.scss";
import Image1 from "../img/about-1.png";
import Image2 from "../img/about-3.png";

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        {/* Welcome Section */}
        <motion.div
          className="heading-section"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
          viewport={{ once: true }} // Ensures it triggers only once
        >
          <h1 className="heading">
            <FaHeartbeat className="heading-icon" /> Welcome to Care Health Nurses Pvt. Ltd
          </h1>
        </motion.div>

        {/* About Content Section */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }} // Trigger animation when in view
          viewport={{ once: true }} // Ensures it triggers only once
          transition={{ duration: 1 }}
        >
          <div className="about-layout">
            <div className="image-section">
              <motion.img
                src={Image1}
                alt="Care Health Nurses"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
              />
            </div>
            <div className="text-section card">
              <motion.p
                className="intro"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Care Health Nurses Pvt. Ltd is a leading nursing agency in India,
                established in 2014. We provide quality professionals for homecare
                services in New Delhi, Noida, Gurugram, and Lucknow.
              </motion.p>
              <motion.p
                className="mission"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Customer satisfaction is our sole motto, and we aim to consistently
                improve our services to meet the evolving needs of our clients.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          className="why-choose-us"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} // Trigger animation when in view
          viewport={{ once: true }} // Ensures it triggers only once
          transition={{ duration: 1 }}
        >
          <h2>
            <FaStethoscope className="why-icon" /> Why Choose Us?
          </h2>
          <div className="reasons">
            {[
              { title: "Complete Satisfaction", description: "Best attention and selfless care for the patients." },
              { title: "Experienced Attendants", description: "Experts in caring for bedridden patients, knee replacement, paralysis, and more." },
              { title: "Full Range of Services", description: "Comprehensive care for senior citizens and patients." },
              { title: "Advanced Equipment", description: "State-of-the-art equipment for quality patient care." },
            ].map((reason, index) => (
              <motion.div
                className="reason card"
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }} // Trigger animation when in view
                viewport={{ once: true }} // Ensures it triggers only once
                transition={{ delay: index * 0.2 }}
              >
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Special Services Section */}
        <motion.div
          className="special-services"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }} // Trigger animation when in view
          viewport={{ once: true }} // Ensures it triggers only once
          transition={{ duration: 1 }}
        >
          <h2>
            <FaHeartbeat className="special-service-icon" /> Our Special Services
          </h2>
          <ul>
            <li>
              <FaMedkit className="service-icon" /> Patient Care Attendant
            </li>
            <li>
              <FaProcedures className="service-icon" /> Tracheostomy Care Nurses
            </li>
            <li>
              <FaMedkit className="service-icon" /> ICU Care Attendant
            </li>
            <li>
              <FaHeartbeat className="service-icon" /> Home Care
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
