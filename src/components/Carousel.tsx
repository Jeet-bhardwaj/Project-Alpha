import { useState, useEffect } from 'react';
import styles from './Carousel.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const desktopImages = [
    '/src/gym Carousel/Fitness Platinum (1).png',
    '/src/gym Carousel/Fitness Platinum.png',
    '/src/gym Carousel/targets.png'
];

const mobileImages = [
    '/src/gym Carousel/mob-gym/mob-gym-1.png',
    '/src/gym Carousel/mob-gym/mob-gym-2.png',
    '/src/gym Carousel/mob-gym/mob-gym-3.png'
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const images = isMobile ? mobileImages : desktopImages;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, [images.length]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className={styles.carousel}>
            <button className={`${styles.arrow} ${styles.prevArrow}`} onClick={handlePrev}>
                &#8249;
            </button>
            <AnimatePresence mode='wait' initial={false}>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className={styles.carouselImage}
                />
            </AnimatePresence>
            <button className={`${styles.arrow} ${styles.nextArrow}`} onClick={handleNext}>
                &#8250;
            </button>
            <div className={styles.dots}>
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel; 