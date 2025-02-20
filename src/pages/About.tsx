import styles from "./About.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const About = () => {
    return (
        <>
            <div className={styles.about}>
                <h1 className={styles.title}>About Us</h1>
                <p>
                    Welcome to Fitness Platinum, the premier gym for all fitness
                    levels.
                </p>
                
                <div className={styles.infoSection}>
                    <h2>Overview</h2>
                    <p>Established in 2017, Fitness Platinum in Rajiv Nagar, Patna is a leading name in the Gyms industry, with a rating of 4.7 based on 535 customer reviews.</p>
                    
                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>500+</div>
                            <div className={styles.statLabel}>Active Members</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>15+</div>
                            <div className={styles.statLabel}>Expert Trainers</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>1000+</div>
                            <div className={styles.statLabel}>Success Stories</div>
                        </div>
                    </div>

                    <div className={styles.locationInfo}>
                        <div className={styles.addressBox}>
                            <FaMapMarkerAlt className={styles.mapIcon} />
                            <p>Near Nala, Rajeev Nagar, Patna, Bihar 800024</p>
                        </div>
                        <iframe 
                            className={styles.map}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.043618249145!2d85.13249!3d25.599444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce6732fb7%3A0x4b7f43b962af7c6!2sFitness+Platinum+Gym!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
