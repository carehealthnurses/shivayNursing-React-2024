import React, { useState, useEffect } from "react";
import image from "../img/logo5.png";
import "./Navigation.scss";


const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scrolling for anchor links
  const handleSmoothScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false); // Close mobile menu on link click
  };

  return (
    <nav
      className={`navigation bg-white dark:bg-gray-900 fixed w-full z-20 top-0 border-b border-gray-200 dark:border-gray-600 ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img src={image} className="h-14 w-auto mt-2" alt="CareHealth Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">
            {/* CareHealthNurses */}
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-end items-center space-x-3">
          <ul className="flex space-x-4 text-gray-900 dark:text-gray-300">
            {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleSmoothScroll(e, `#${item.toLowerCase()}`)}
                  className="menu-item "
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button className="call-now bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 ml-4">
            Call Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbar-sticky"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            // xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu md:hidden bg-gray-50 dark:bg-gray-800 ${
            isOpen ? "open" : ""
          }`}
        >
          <ul className="flex flex-col space-y-4 mt-4 text-gray-900 dark:text-white p-4 rounded-md">
            {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleSmoothScroll(e, `#${item.toLowerCase()}`)}
                  className=""
                >
                  {item}
                </a>
              </li>
            ))}
            <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
              Call Now
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
