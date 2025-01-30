import styles from "./Trainers.module.css";

const Trainers = () => {
    return (
        <>
            <div className={styles.trainers}>
                <h1 className={styles.title}>Meet Our Trainers</h1>
                <p className={styles.description}>
                    Our expert trainers are here to guide you every step of the
                    way.
                </p>
                <div className={styles.profiles}>
                    <div className={styles.trainer}>
                        <img
                            src="https://source.unsplash.com/150x150/?trainer,man"
                            alt="Trainer 1"
                        />
                        <p>John Doe</p>
                    </div>
                    <div className={styles.trainer}>
                        <img
                            src="https://source.unsplash.com/150x150/?trainer,woman"
                            alt="Trainer 2"
                        />
                        <p>Jane Smith</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Trainers;
