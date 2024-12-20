import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaComment } from "react-icons/fa";
import './Form.scss'; // Ensure this is the correct path for your SCSS file
import Image from '../../components/img/Form.png'; // Update path to image if needed

const FormPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const rect = document.getElementById("form-container").getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleFocus = (e) => {
    const parent = e.target.parentNode;
    parent.classList.add("focus");
  };

  const handleBlur = (e) => {
    const parent = e.target.parentNode;
    if (e.target.value === "") {
      parent.classList.remove("focus");
    }
  };

  return (
    <div className="form-page">
      <div className="form-container" id="form-container">
        <motion.div
          className="form-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Enquiry Form</h2>
          <form className="enquiry-form">
            <div className="form-group">
              <FaUser className="icon" />
              <input
                type="text"
                placeholder="Enter your name"
                required
                className="input"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <label>Name</label>
              <span>Name</span>
            </div>
            <div className="form-group">
              <FaEnvelope className="icon" />
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="input"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <label>Email</label>
              <span>Email</span>
            </div>
            <div className="form-group">
              <FaPhone className="icon" />
              <input
                type="tel"
                placeholder="Enter your phone number"
                required
                className="input"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <label>Phone</label>
              <span>Phone</span>
            </div>
            <div className="form-group">
              <FaComment className="icon" />
              <textarea
                placeholder="Enter your message"
                required
                className="input"
                onFocus={handleFocus}
                onBlur={handleBlur}
              ></textarea>
              <label>Message</label>
              <span>Message</span>
            </div>
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </form>
        </motion.div>
        <div className="form-image">
          <img src={Image} alt="Form Illustration" />
        </div>
      </div>
    </div>
  );
};

export default FormPage;
