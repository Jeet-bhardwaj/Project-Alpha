import styles from "./Trainers.module.css";

const Trainers = () => {
    return (
        <div className={styles.trainers}>
            <h1 className={styles.title}>Meet Our Expert Trainers</h1>
            <p className={styles.description}>
                Our certified fitness professionals are passionate about helping you achieve your goals
            </p>
            <div className={styles.profiles}>
                <div className={styles.trainer}>
                    <div className={styles.imageWrapper}>
                        <img
                            src="https://source.unsplash.com/400x500/?fitness-trainer,man"
                            alt="Boxer Bhiya"
                        />
                    </div>
                    <h3>Boxer Bhiya</h3>
                    <p className={styles.specialty}>Strength & Conditioning</p>
                    <p className={styles.bio}>
                        "Dedicated to helping you build strength and reach your fitness potential"
                    </p>
                </div>
                <div className={styles.trainer}>
                    <div className={styles.imageWrapper}>
                        <img
                            src="https://source.unsplash.com/400x500/?personal-trainer,woman"
                            alt="Jane Smith"
                        />
                    </div>
                    <h3>Jane Smith</h3>
                    <p className={styles.specialty}>Yoga & Flexibility</p>
                    <p className={styles.bio}>
                        "Bringing balance to body and mind through mindful movement"
                    </p>
                </div>
                <div className={styles.trainer}>
                    <div className={styles.imageWrapper}>
                        <img
                            src="https://source.unsplash.com/400x500/?gym-trainer,man"
                            alt="Mike Johnson"
                        />
                    </div>
                    <h3>Mike Johnson</h3>
                    <p className={styles.specialty}>HIIT & Cardio</p>
                    <p className={styles.bio}>
                        "Push your limits and transform your cardiovascular fitness"
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Trainers;
