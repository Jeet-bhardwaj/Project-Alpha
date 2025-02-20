import React from 'react';
import styles from './ServiceCSS/Yoga.module.css';

const Yoga = () => {
  const services = [
    {
      title: "Hatha Yoga",
      description: "Traditional yoga practice focusing on basic postures and breathing techniques, perfect for beginners.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Vinyasa Flow",
      description: "Dynamic flowing sequences that synchronize breath with movement for strength and flexibility.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Power Yoga",
      description: "Vigorous, fitness-based approach to yoga practice, emphasizing strength and flexibility.",
      image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Meditation & Mindfulness",
      description: "Guided sessions focusing on mental clarity, stress reduction, and inner peace.",
      image: "https://images.unsplash.com/photo-1470137237906-d8a4f71e1966?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Restorative Yoga",
      description: "Gentle, healing practice using props to support the body in restful poses.",
      image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Private Sessions",
      description: "One-on-one instruction tailored to your specific needs and goals in yoga practice.",
      image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Yoga Practice</h1>
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

export default Yoga;
