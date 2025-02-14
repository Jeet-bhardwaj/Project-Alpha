import styles from "./Servicess.module.css";

const Servicess = () => {
    return (
        <>
            <div className={styles.Servicess}>
                <h1 className={styles.title}>Core Servicess</h1>
                <div className={styles.plans}>
                    <div className={styles.plan}>
                        <h3>Basic Plan</h3>
                        <p>$20/month</p>
                    </div>
                    <div className={styles.plan}>
                        <h3>Premium Plan</h3>
                        <p>$40/month</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Servicess;
