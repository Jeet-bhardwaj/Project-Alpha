import React from 'react';
import styles from './ServiceCSS/Cardio.module.css';

const Cardio: React.FC = () => {
  const services = [
    {
      title: "High-Intensity Interval Training (HIIT)",
      description: "Maximize calorie burn and improve endurance with our HIIT sessions. Perfect for efficient, effective workouts.",
      image: "https://plus.unsplash.com/premium_photo-1664910207555-fac63513e7ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Endurance Training",
      description: "Build stamina and improve your long-distance performance through structured cardio programs.",
      image: "https://plus.unsplash.com/premium_photo-1664301226369-1b8fdf5bef6f?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Circuit Training",
      description: "Combine cardio and strength exercises for full-body workouts that boost your overall fitness.",
      image: "https://plus.unsplash.com/premium_photo-1664299680539-a53bd5d597ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Group Cardio Classes",
      description: "Join energetic group sessions with motivating instructors and like-minded fitness enthusiasts.",
      image: "https://media.istockphoto.com/id/1768444808/photo/muscle-health-workout-and-training-with-retirement-community.webp?a=1&b=1&s=612x612&w=0&k=20&c=hnHU8w0IwxSSeGMYMd27Wz5_AdaJJ_M70_IZAg77AB4="
    },
    {
      title: "Personalized Programs",
      description: "Get a customized cardio training program designed to meet your specific fitness goals and needs.",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Heart Rate Training",
      description: "Learn to optimize your workouts using heart rate zones for maximum cardiovascular benefits.",
      image: "https://plus.unsplash.com/premium_photo-1661766044121-f6325da7b145?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SGVhcnQlMjBSYXRlJTIwVHJhaW5pbmd8ZW58MHx8MHx8fDA%3D"
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
