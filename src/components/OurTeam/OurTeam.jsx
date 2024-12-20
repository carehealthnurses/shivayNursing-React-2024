import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../../components/OurTeam/OurTeam.scss';
import image1 from '../img/team-1.jpg';
import image2 from '../img/team.4.jpg';
import image3 from '../img/team-2.jpg';
import image4 from '../img/6.png';
import image5 from '../img/10.png';

const teamMembers = [
  {
    name: 'Mr. Rupendra Singh Sengar (MBA)',
    position: 'Managing Director',
    contact: '',
    img: image1,
  },
  {
    name: 'Mr. Vineet Pandey',
    position: 'Personal Assistant of M.D',
    contact: '9999320665',
    img: image2,
  },
  {
    name: 'Mr. Shivang Dwivedi',
    position: "Operation's Manager",
    contact: '9999407473',
    img: image3,
  },
  {
    name: 'Mr. Parshant Rajput',
    position: "Account's Manager",
    contact: '9654966792',
    img: image4,
  },
  {
    name: 'Miss. Poornima Singh',
    position: 'MIS Manager',
    contact: '7290817962',
    img: image5,
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

      {/* Managing Director Card */}
      <div className="managing-card split-layout">
        <div className="img-wrapper">
          <img src={teamMembers[0].img} alt={teamMembers[0].name} />
        </div>
        <div className="caption">
          <h3>{teamMembers[0].name}</h3>
          <p>{teamMembers[0].position}</p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="team-grid">
        {teamMembers.slice(1).map((member, index) => (
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






// import React, { useEffect, useState } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import '../../components/OurTeam/OurTeam.scss';
// import image1 from '../img/team-1.jpg';
// import image3 from '../img/team-2.jpg';
// import image2 from '../img/7.png';
// import image4 from '../img/6.png';
// import image5 from '../img/10.png';

// const teamMembers = [
//   { 
//     name: 'Mr. Rupendra Singh Sengar (MBA)', 
//     position: 'Managing Director', 
//     contact: '', 
//     img: image1 
//   },
//   {  
//     name: 'Mr. Vineet Pandey', 
//     position: 'Personal Assistant of M.D', 
//     contact: '9999320665', 
//     img: image2 
//   },
//   { 
//     name: 'Mr. Shivang Dwivedi', 
//     position: "Operation's Manager", 
//     contact: '9999407473', 
//     img: image3 
//   },
//   { 
//     name: 'Mr. Parshant Rajput', 
//     position: "Account's Manager", 
//     contact: '9654966792', 
//     img: image4 
//   },
//   { 
//     name: 'Miss. Poornima Singh', 
//     position: "MIS Manager", 
//     contact: '7290817962', 
//     img: image5
//   },
// ];

// const TeamSection = () => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ triggerOnce: true });

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     }
//   }, [controls, inView]);

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
//   };

//   const zoomVariants = {
//     hidden: { scale: 0.8, opacity: 0 },
//     visible: { scale: 1, opacity: 1, transition: { duration: 0.7 } },
//   };

//   return (
//     <div className="team-section" ref={ref}>
//       <motion.h2 
//         className="section-title" 
//         initial="hidden" 
//         animate={controls} 
//         variants={cardVariants}
//       >
//         Meet Our Team
//       </motion.h2>

//       {/* Managing Director Card with Split Layout */}
//       <motion.div 
//         className="managing-card split-layout" 
//         initial="hidden" 
//         animate={controls} 
//         variants={zoomVariants}
//       >
//         <div className="img-wrapper">
//           <img src={teamMembers[0].img} alt={teamMembers[0].name} />
//         </div>
//         <div className="caption">
//           <h3>{teamMembers[0].name}</h3>
//           <p>{teamMembers[0].position}</p>
//         </div>
//       </motion.div>

//       <div className="team-grid">
//         {teamMembers.slice(1).map((member, index) => (
//           <motion.div 
//             className="profile-card split-layout" 
//             key={index}
//             initial="hidden"
//             animate={controls}
//             variants={cardVariants}
//           >
//             <div className="img-wrapper">
//               <img src={member.img} alt={member.name} />
//             </div>
//             <div className="caption">
//               <h3>{member.name}</h3>
//               <p>{member.position}</p>
//               {member.contact && <p>Mob. no : {member.contact}</p>}
//               <div className="social-links">
//                 <a href="#"><i className="fab fa-facebook"></i></a>
//                 <a href="#"><i className="fab fa-instagram"></i></a>
//                 <a href="#"><i className="fab fa-twitter"></i></a>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeamSection;