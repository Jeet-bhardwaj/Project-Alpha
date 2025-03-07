import { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import styles from './TopBar.module.css';

const TopBar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <div className={`${styles.topBar} ${isVisible ? styles.visible : styles.hidden}`}>
            <div className={styles.container}>
                <div className={styles.leftSection}>
                    <a href="tel:+1234567890" className={styles.contactItem}>
                        <FaPhone /> +91 9097936714
                    </a>
                    <a href="mailto:info@fitnessplatinum.com" className={styles.contactItem}>
                        <FaEnvelope /> fitnessplatinum@gmail.com
                    </a>
                </div>
                <div className={styles.centerSection}>
                    <span className={styles.welcomeText}>Welcome to Fitness Platinum</span>
                </div>
                <div className={styles.rightSection}>
                    <div className={styles.socialLinks}>
                        <a href="https://www.facebook.com/fitnessplatinumgym?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="https://www.instagram.com/fit_plat?utm_source=qr&igsh=ZnoxcnhsYm5kbWs4" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://youtube.com/@fitnessplatinumboxer?si=OzOYckLUTFrGF542" target="_blank" rel="noopener noreferrer">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar; 