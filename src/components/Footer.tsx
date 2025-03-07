import React from 'react';
import { Dumbbell, Facebook, Instagram, Twitter } from 'lucide-react';
import styles from './Footer.module.css';
import gymLogo from '../logo/gymLogo.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <div className={styles.logo}>
            <img src={gymLogo} alt="Gym Logo" />
              <span className={styles.brandName}>Fitness Platinum</span>
            </div>
            <p className={styles.description}>
              Transform your body and mind with our state-of-the-art facilities and expert trainers.
            </p>
          </div>
          <div>
            <h3 className={styles.title}>Quick Links</h3>
            <div className={styles.links}>
              <a href="#" className={styles.link}>About Us</a>
              <a href="#" className={styles.link}>Classes</a>
              <a href="#" className={styles.link}>Schedule</a>
              <a href="#" className={styles.link}>Contact</a>
            </div>
          </div>
          <div>
            <h3 className={styles.title}>Contact Info</h3>
            <div className={styles.links}>
              <p>Near Nala, Rajeev Nagar, Patna, Bihar 800024</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@fitnessplatinum.com</p>
            </div>
          </div>
          <div>
            <h3 className={styles.title}>Follow Us</h3>
            <div className={styles.social}>
              <a href="#" className={styles.socialIcon}>
                <Facebook />
              </a>
              <a href="#" className={styles.socialIcon}>
                <Instagram />
              </a>
              <a href="#" className={styles.socialIcon}>
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.border}>
          <p>&copy; {new Date().getFullYear()} Fitness Platinum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;