import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../../Pages/About Page/AboutPage.scss';
import image1 from '../../components/img/team-1.jpg';
import image3 from '../../components/img/team-2.jpg';
import image2 from '../../components/img/team.4.jpg';
import image4 from '../../components/img/6.png';
import image5 from '../../components/img/10.png';
import image6 from '../../components/img/1.png';
import image7 from '../../components/img/8.png';
import image8 from '../../components/img/4.png';
import image9 from '../../components/img/5.png';
import image10 from '../../components/img/11.png';
import image11 from '../../components/img/12.png';
import image12 from '../../components/img/13.png';
import image13 from '../../components/img/14.png';





const teamMembers = [
  { 
    name: 'Mr. Rupendra Singh Sengar (MBA)', 
    position: 'Managing Director', 
    contact: '', 
    img: image1 
  },
  {  
    name: 'Mr. Vineet Pandey', 
    position: 'Personal Assistant of M.D', 
    contact: '9999320665', 
    img: image2 
  },
  { 
    name: 'Mr. Shivang Dwivedi', 
    position: "Operation's Manager", 
    contact: '9999407473', 
    img: image3 
  },
  { 
    name: 'Mr. Parshant Rajput', 
    position: "Account's Manager", 
    contact: '9654966792', 
    img: image4 
  },
  { 
    name: 'Miss. Poornima Singh', 
    position: "MIS Manager", 
    contact: '7290817962', 
    img: image5
  },
  { 
    name: 'Miss. Priyanka Naryal', 
    position: "Branch Manager", 
    contact: '9205981026', 
    img: image6
  },
  { 
    name: 'Miss. Kajal Kashyap', 
    position: "Relationship Manager", 
    contact: '9319337413', 
    img: image9
  },
  { 
    name: 'Mrs. Charu', 
    position: "Relationship Manager", 
    contact: '9910531897', 
    img: image13
  },


  { 
    name: 'Mr.Siddhartha Thakur', 
    position: "Relationship Manager", 
    contact: ' 9999215973', 
    img: image7
  },
  { 
    name: 'Mr.Vinay Singh', 
    position: "Branch Manager", 
    contact: ' 8881000186', 
    img: image8
  },
  { 
    name: 'Mr.Arun Kumar', 
    position: "Placement Manager", 
    contact: ' 9899478675', 
    img: image10
  },
  { 
    name: 'Mr.Avijit ', 
    position: "Placement Coordinator", 
    contact: ' 8929654124', 
    img: image12
  },
  { 
    name: 'Mr.Adarsh', 
    position: "Branch Manager", 
    contact: ' 8447307473', 
    img: image11
  },

];

const TeamSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  return (
    <div className="team-section" ref={ref}>
      <motion.h2 
        className="section-title" 
        initial="hidden" 
        animate={controls} 
        variants={cardVariants}
      >
        Meet Our Team
      </motion.h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <motion.div 
            className="profile-card" 
            key={index}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
          >
            <div className="img-wrapper">
              <img src={member.img} alt={member.name} />
            </div>
            <div className="caption">
              <h3>{member.name}</h3>
              <p>{member.position}</p>
              {member.contact && <p>Mob. no : {member.contact}</p>}
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
