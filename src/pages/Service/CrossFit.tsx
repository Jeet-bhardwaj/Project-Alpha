import React from 'react';
import styles from './ServiceCSS/CrossFit.module.css';

const CrossFit = () => {
  const services = [
    {
      title: "WOD (Workout of the Day)",
      description: "Experience varied, high-intensity functional movements that combine gymnastics, weightlifting, and cardio.",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "CrossFit Fundamentals",
      description: "Learn proper form and technique for essential CrossFit movements in our beginner-friendly classes.",
      image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Olympic Lifting",
      description: "Master the snatch and clean & jerk with expert coaching and progressive programming.",
      image: "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Group Classes",
      description: "Join our supportive community in challenging, coach-led group workouts that push your limits.",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Skills and Drills",
      description: "Focus on specific CrossFit skills and movements to improve your overall performance.",
      image: "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Personal Training",
      description: "Get individualized attention and customized programming to reach your CrossFit goals faster.",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>CrossFit Training</h1>
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

export default CrossFit;
