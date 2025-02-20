import { useState } from 'react';
import { FaQuoteLeft, FaGoogle } from 'react-icons/fa';
import styles from './GoogleReviews.module.css';

// Sample review data
const sampleReviews = [
    {
        id: 1,
        userImg: "https://i.pravatar.cc/150?img=1",
        name: "John Smith",
        rating: 5,
        description: "Amazing gym experience! The trainers are incredibly knowledgeable and supportive. The facility is always clean and well-maintained, with state-of-the-art equipment. I've seen remarkable progress in my fitness journey since joining. The atmosphere is motivating and the community is very welcoming. Highly recommend to anyone serious about their fitness goals!"
    },
    {
        id: 2,
        userImg: "https://i.pravatar.cc/150?img=2",
        name: "Sarah Johnson",
        rating: 5,
        description: "Best gym I've ever been to! The personal training sessions are excellent, and the variety of equipment meets all my needs. The staff is friendly and always ready to help. They offer great classes and the scheduling is very flexible. The environment is perfect for both beginners and advanced fitness enthusiasts."
    },
    {
        id: 3,
        userImg: "https://i.pravatar.cc/150?img=3",
        name: "Mike Wilson",
        rating: 4,
        description: "Great atmosphere and excellent equipment. The trainers are professional and the workout programs are well-structured. I particularly enjoy the group classes and the supportive community. The only minor drawback is it can get a bit crowded during peak hours."
    },
    {
        id: 4,
        userImg: "https://i.pravatar.cc/150?img=4",
        name: "Emily Davis",
        rating: 5,
        description: "This gym has transformed my fitness journey! The trainers create personalized workout plans that actually work. The facility is spacious and modern, with all the equipment you could need. I love the positive environment and how clean everything is kept. Worth every penny!"
    }
];

// Add this right after the sampleReviews array
const overallRating = {
    score: 4.8,
    total: 467
};

const GoogleReviews = () => {
    const [currentReview, setCurrentReview] = useState(0);
    const [expandedReviews, setExpandedReviews] = useState<number[]>([]);

    const nextReview = () => {
        setCurrentReview((prev) => (prev + 1) % sampleReviews.length);
    };

    const prevReview = () => {
        setCurrentReview((prev) => (prev - 1 + sampleReviews.length) % sampleReviews.length);
    };

    const toggleReadMore = (reviewId: number) => {
        setExpandedReviews(prev => 
            prev.includes(reviewId) 
                ? prev.filter(id => id !== reviewId)
                : [...prev, reviewId]
        );
    };

    const truncateText = (text: string, maxLength: number = 150) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    };

    const renderStars = (rating: number) => {
        return "★".repeat(rating) + "☆".repeat(5 - rating);
    };

    return (
        <div className={styles.reviewsContainer}>
            <h2 className={styles.title}>What Our Clients Say</h2>
            <div className={styles.overallRating}>
                <h2 className={styles.ratingNumber}>{overallRating.score}</h2>
                <div className={styles.ratingStars}>
                    {"★".repeat(5)}
                </div>
                <div className={styles.totalReviews}>
                    {overallRating.total} Google reviews
                </div>
                <div className={styles.googleLogo}>
                    <FaGoogle /> Google Reviews
                </div>
            </div>
            <div className={styles.reviewsWrapper}>
                <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevReview}>
                    ‹
                </button>
                <div className={styles.reviewsSlider} 
                     style={{ transform: `translateX(-${currentReview * 100}%)` }}>
                    {sampleReviews.map((review) => (
                        <div key={review.id} className={styles.reviewCard}>
                            <div className={styles.reviewHeader}>
                                <img
                                    src={review.userImg}
                                    alt={review.name}
                                    className={styles.authorImage}
                                />
                                <div className={styles.reviewMeta}>
                                    <h3 className={styles.authorName}>{review.name}</h3>
                                    <div className={styles.stars}>
                                        {renderStars(review.rating)}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.reviewBody}>
                                <FaQuoteLeft className={styles.quoteIcon} />
                                <p className={styles.reviewText}>
                                    {expandedReviews.includes(review.id) 
                                        ? review.description 
                                        : truncateText(review.description)}
                                    {review.description.length > 150 && (
                                        <button 
                                            className={styles.readMoreBtn}
                                            onClick={() => toggleReadMore(review.id)}
                                        >
                                            {expandedReviews.includes(review.id) ? 'Read Less' : 'Read More'}
                                        </button>
                                    )}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextReview}>
                    ›
                </button>
            </div>
            <div className={styles.dots}>
                {sampleReviews.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${index === currentReview ? styles.activeDot : ''}`}
                        onClick={() => setCurrentReview(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default GoogleReviews;