import React from 'react';
import OurGallery from '../../components/OurGallery/OurGallery';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import LocationSlider from '../../components/LocationSlider/LocationSlider';
import OurServices from '../../components/OurServices/OurServices';
import Slider from '../../components/Slider/Slider';
import About from '../../components/About/About';
import OurTeam from '../../components/OurTeam/OurTeam';
import Form from '../../components/Form/Form';
import AboutPage from '../../Pages/About Page/AboutPage';
import ServicesPage from '../../Pages/ServicesPage/ServicesPage'; 
import ContactPage from '../../Pages/ContactPage/ContactPage'; 
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import { Link } from "react-router-dom";

const HomePage = () => {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/About",
      element: <AboutPage />
    },
    {
      path: "/Services",
      element: <ServicesPage /> 
    },
    {
      path: "/Contact",
      element: <ContactPage /> 
    }
  ]);

  return (
    <div>
      <div>
        <Hero />  {/* Changed <a> to <Link> and added a path */}
      </div>
      <div>
        <Slider />
      </div>
      <div>
        <OurServices />
      </div>
      <div> {/* Fixed typo from <duv> to <div> */}
        <OurTeam />
      </div>
      <div>
        <About />
      </div>
      <div>
        <LocationSlider />
      </div>
      <div>
        <OurGallery />
      </div>
      <div>
        <Form />
      </div>
      <div>
        <AboutPage />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;