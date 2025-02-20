import styles from "./Home.module.css";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import GoogleReviews from "../components/GoogleReviews";
import Carousel from "../components/Carousel";
import Gallery from "../pages/Gallery";

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <Carousel />
            <div className={styles.section}>
                <Hero />
            </div>
            <div className={styles.section}>
                <Features />
            </div>
            <div className={styles.section}>
                <GoogleReviews />
            </div>
            <div className={styles.section}>
                <Gallery />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
