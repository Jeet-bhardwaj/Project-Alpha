import { useState, useEffect } from 'react';
import styles from './GoogleReviews.module.css';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import reviewsData from '../../reviews.json';

interface Review {
    id: number;
    Userimg: string;
    name: string;
    rating: number;
    discription: string;
    photo: string;
}

interface ReviewsData {
    reviews: Review[];
}

const GoogleReviews = () => {
    const [currentReview, setCurrentReview] = useState(0);
    const reviews = reviewsData.reviews;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReview((prev) => (prev + 1) % reviews.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [reviews.length]);

    const renderStars = (rating: number) => {
        return [...Array(5)].map((_, index) => (
            <FaStar
                key={index}
                className={`${styles.star} ${
                    index < rating ? styles.filled : styles.empty
                }`}
            />
        ));
    };

    if (reviews.length === 0) {
        return <div className={styles.loading}>Loading reviews...</div>;
    }

    return (
        <div className={styles.reviewsContainer}>
            <h2 className={styles.title}>What Our Clients Say</h2>
            <div className={styles.reviewCard}>
                <FaQuoteLeft className={styles.quoteIcon} />
                <div className={styles.reviewContent}>
                    <img
                        src={reviews[currentReview].Userimg}
                        alt={reviews[currentReview].name}
                        className={styles.authorImage}
                    />
                    <div className={styles.stars}>
                        {renderStars(reviews[currentReview].rating)}
                    </div>
                    <p className={styles.reviewText}>{reviews[currentReview].discription}</p>
                    <p className={styles.authorName}>
                        {reviews[currentReview].name}
                    </p>
                </div>
            </div>
            <div className={styles.dots}>
                {reviews.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${
                            index === currentReview ? styles.activeDot : ''
                        }`}
                        onClick={() => setCurrentReview(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default GoogleReviews; 