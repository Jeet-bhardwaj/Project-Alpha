import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Dumbbell, Users, Calendar, Award } from 'lucide-react';
import styles from './Features.module.css';

const features = [
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    description: "State-of-the-art fitness equipment for all your workout needs"
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Professional trainers to guide and motivate you"
  },
  {
    icon: Calendar,
    title: "Flexible Classes",
    description: "Wide range of classes to fit your schedule"
  },
  {
    icon: Award,
    title: "Premium Facilities",
    description: "Clean and modern facilities for the best workout experience"
  }
];

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <h2 className={styles.title}>Why Choose Us</h2>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.feature}
            >
              <feature.icon className={styles.icon} />
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;