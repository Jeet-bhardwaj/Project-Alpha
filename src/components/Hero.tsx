import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div 
        className={styles.background}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
        }}
      />
      <div className={styles.content}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.textContent}
          >
            <h1 className={styles.title}>
              Transform Your Body,
              <br />
              Transform Your Life
            </h1>
            <p className={styles.description}>
              Join Fitness Platinum and start your fitness journey today. 
              Expert trainers, state-of-the-art equipment, and a 
              supportive community await you.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.button}
            >
              Start Free Trial
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
