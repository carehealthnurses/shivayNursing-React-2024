import React from 'react';
import { motion } from 'framer-motion';
import {
  FaUserNurse,
  FaHandHoldingHeart,
  FaBaby,
  FaUserShield,
  FaHeartbeat,
} from 'react-icons/fa';
import {
  GiHeartBeats,
  GiStethoscope,
  GiMedicines,
  GiHealthNormal,
} from 'react-icons/gi';

const OurServices = () => {
  const services = [
    {
      id: 'nurses',
      icon: FaUserNurse,
      title: 'Experienced Nurses',
      subtitle: 'Best Care Guaranteed',
      description:
        'Our nurses are well qualified and trained to provide the best care possible.',
    },
    {
      id: 'elder-care',
      icon: FaHandHoldingHeart,
      title: 'Elder Care',
      subtitle: 'Compassionate Assistance',
      description: 'We follow every step according to the needs of our elders.',
    },
    {
      id: 'trusted-attendants',
      icon: FaUserShield,
      title: 'Trusted Attendants',
      subtitle: 'Reliable Caregivers',
      description:
        'Experts in caring for bedridden, knee replacement, neuro, and paralysis patients.',
    },
    {
      id: 'nanny-care',
      icon: FaBaby,
      title: 'Nanny Baby Care',
      subtitle: 'Happiness & Safety',
      description:
        'Dedicated to caring for children and ensuring their happiness and safety.',
    },
    {
      id: 'comprehensive-care',
      icon: FaHeartbeat,
      title: 'Comprehensive Care',
      subtitle: 'Holistic Wellness',
      description:
        'We provide holistic care tailored to individual health needs and preferences.',
    },
    {
      id: 'complete-satisfaction',
      icon: GiHealthNormal,
      title: 'Complete Satisfaction',
      subtitle: 'Selfless Care & Attention',
      description:
        "Best attention and selfless care for the patients is the most benevolent service in today's tough world.",
    },
    {
      id: 'attendants',
      icon: GiStethoscope,
      title: 'Exp Male Female Attendants',
      subtitle: 'Expert Caregivers',
      description:
        'Experts in caring for bedridden, knee replacement, neuro, and paralysis patients.',
    },
    {
      id: 'specialized-services',
      icon: GiMedicines,
      title: 'Full Range of Specialized Services',
      subtitle: 'Experienced Professionals',
      description:
        'We are backed with a team of experienced professionals who are engaged in taking proper care of senior citizens.',
    },
    {
      id: 'advanced-equipment',
      icon: GiHeartBeats,
      title: 'Advanced Equipment',
      subtitle: 'State-of-the-Art Care',
      description:
        'Care Health Nursing has remarkable experience in the field of patient care and medical equipment.',
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-blue-900 mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        <motion.div
          className="flex flex-wrap justify-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group bg-white text-gray-700 m-4 p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-blue-800 hover:text-white max-w-xs"
              custom={index}
              variants={containerVariants}
            >
              <div className="mb-4 text-sm font-medium text-blue-600 group-hover:text-white">
                {service.subtitle}
              </div>
              <service.icon className="text-6xl mb-4 mx-auto text-blue-600 group-hover:text-white" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurServices;
