import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import styles from './SocialMedia.module.css';

const SocialMedia = () => {
    return (
        <div className={styles.socialContainer}>
            <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialIcon}
            >
                <FaInstagram />
            </a>
            <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialIcon}
            >
                <FaFacebook />
            </a>
            <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialIcon}
            >
                <FaYoutube />
            </a>
        </div>
    );
};

export default SocialMedia;
