import { useState, useEffect } from 'react';
import styles from './Carousel.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [desktopImages, setDesktopImages] = useState<string[]>([]);
    const [mobileImages, setMobileImages] = useState<string[]>([]);
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
        const fetchImages = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/images');
                if (!response.ok) throw new Error('Failed to fetch images');
                const data = await response.json();
                console.log('Fetched images:', data); // Log the fetched images
                
                // Separate images into desktop and mobile based on folder structure
                setDesktopImages(data.filter((img: any) => img.public_id.startsWith('gym Carousel/')).map((img: any) => img.url));
                setMobileImages(data.filter((img: any) => img.public_id.startsWith('mob-gym/')).map((img: any) => img.url));
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
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