import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';
import styles from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    // In a real application, this would fetch from your backend
    // which would then fetch from Google Maps API
    const mockReviews = [
      {
        id: 1,
        author: "John Doe",
        rating: 5,
        text: "Amazing gym with great equipment and friendly staff!",
        profilePhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
      },
      {
        id: 2,
        author: "Jane Smith",
        rating: 5,
        text: "Best gym I've ever been to. The trainers are fantastic!",
        profilePhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
      },
      {
        id: 3,
        author: "Mike Johnson",
        rating: 4,
        text: "Great atmosphere and modern equipment. Highly recommended!",
        profilePhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
      }
    ];
    setReviews(mockReviews);
  }, []);

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <h2 className={styles.title}>What Our Members Say</h2>
        <div className={styles.grid}>
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.review}
            >
              <div className={styles.header}>
                <img
                  src={review.profilePhoto}
                  alt={review.author}
                  className={styles.profileImage}
                />
                <div className={styles.authorInfo}>
                  <h3>{review.author}</h3>
                  <div className={styles.stars}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className={styles.star} />
                    ))}
                  </div>
                </div>
              </div>
              <p className={styles.text}>{review.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;