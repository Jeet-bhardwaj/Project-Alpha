import styles from "./Pricing.module.css";

const Pricing = () => {
    return (
        <>
            <div className={styles.pricing}>
                <h1 className={styles.title}>Membership Pricing</h1>
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

export default Pricing;
