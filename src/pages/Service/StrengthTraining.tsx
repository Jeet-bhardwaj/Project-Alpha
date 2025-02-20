import React from 'react';
import styles from './ServiceCSS/StrengthTraining.module.css';

const StrengthTraining = () => {
  const services = [
    {
      title: "Powerlifting",
      description: "Master the fundamentals of powerlifting with expert coaching in squat, bench press, and deadlift techniques.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Bodybuilding",
      description: "Structured training programs focused on muscle hypertrophy and aesthetic development.",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Functional Strength",
      description: "Build practical strength that translates to everyday activities and improved physical performance.",
      image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Olympic Weightlifting",
      description: "Technical training in the snatch and clean & jerk with progressive programming.",
      image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Strength Assessment",
      description: "Comprehensive evaluation of your current strength levels and personalized program design.",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Personal Training",
      description: "One-on-one coaching sessions tailored to your specific strength goals and needs.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Strength Training</h1>
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

export default StrengthTraining; 