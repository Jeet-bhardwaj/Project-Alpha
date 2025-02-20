import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServiceCSS/Cardio.module.css';

const Cardio: React.FC = () => {
  const services = [
    {
      title: "High-Intensity Interval Training (HIIT)",
      description: "Maximize calorie burn and improve endurance with our HIIT sessions. Perfect for efficient, effective workouts.",
      image: "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Endurance Training",
      description: "Build stamina and improve your long-distance performance through structured cardio programs.",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Circuit Training",
      description: "Combine cardio and strength exercises for full-body workouts that boost your overall fitness.",
      image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Group Cardio Classes",
      description: "Join energetic group sessions with motivating instructors and like-minded fitness enthusiasts.",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Personalized Programs",
      description: "Get a customized cardio training program designed to meet your specific fitness goals and needs.",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Heart Rate Training",
      description: "Learn to optimize your workouts using heart rate zones for maximum cardiovascular benefits.",
      image: "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Cardio Training</h1>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.imageContainer}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.description}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cardio;
