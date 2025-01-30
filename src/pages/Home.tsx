import styles from "./Home.module.css";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.section}>
                <Hero />
            </div>
            <div className={styles.section}>
                <Features />
            </div>
            <div className={styles.section}>
                <Reviews />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
