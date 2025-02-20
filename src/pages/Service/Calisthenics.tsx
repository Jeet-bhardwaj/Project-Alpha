import React from 'react';
import styles from './ServiceCSS/Calisthenics.module.css';

const ServicesPage = () => {
  const services = [
    {
      title: "Bodyweight Basics",
      description: "Master fundamental calisthenics movements including push-ups, pull-ups, and squats with proper form and progression techniques.",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Advanced Skills",
      description: "Learn impressive skills like muscle-ups, handstands, human flag, and front lever through structured progression programs.",
      image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Strength & Mobility",
      description: "Develop full-body strength and flexibility through targeted mobility work and progressive calisthenics exercises.",
      image: "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Group Training",
      description: "Join our motivating group sessions where you'll train alongside others while receiving personalized guidance.",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Skills Workshop",
      description: "Specialized workshops focusing on specific calisthenics skills, perfect for breaking through plateaus.",
      image: "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Custom Programs",
      description: "Get a tailored calisthenics program designed specifically for your goals and current fitness level.",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Calisthenics Training</h1>
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

export default ServicesPage;
