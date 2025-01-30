import styles from "./About.module.css";

const About = () => {
    return (
        <>
            <div className={styles.about}>
                <h1 className={styles.title}>About Us</h1>
                <p>
                    Welcome to Fitness Platinum, the premier gym for all fitness
                    levels.
                </p>
            </div>
        </>
    );
};

export default About;
