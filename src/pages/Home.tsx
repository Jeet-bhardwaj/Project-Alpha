import styles from "./Home.module.css";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import GoogleReviews from "../components/GoogleReviews";
import Carousel from "../components/Carousel";
import TopBar from "../components/TopBar";

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <TopBar />
            <div className={styles.section}>
                <Carousel />
            </div>
            <div className={styles.section}>
                <Hero />
            </div>
            <div className={styles.section}>
                <Features />
            </div>
            <div className={styles.section}>
                <GoogleReviews />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
