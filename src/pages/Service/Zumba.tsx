import React from 'react';
import styles from './ServiceCSS/Zumba.module.css';

const Zumba = () => {
  const services = [
    {
      title: "Zumba Basic",
      description: "Perfect for beginners! Learn the fundamental moves of Zumba in a fun, supportive environment.",
      image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Zumba Cardio Party",
      description: "High-energy dance workouts combining Latin rhythms with cardio intervals for maximum calorie burn.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Zumba Toning",
      description: "Sculpt and tone your body using light weights while dancing to Latin-inspired beats.",
      image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Aqua Zumba",
      description: "Take your Zumba workout to the pool for a low-impact, high-energy water dance fitness party.",
      image: "https://plus.unsplash.com/premium_photo-1663054933667-fb307cea9aab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8enVtYmF8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Zumba Gold",
      description: "Modified Zumba class that recreates the original moves at a lower-intensity, perfect for active older adults.",
      image: "https://media.istockphoto.com/id/674981348/photo/sportive-woman-jumpimg.webp?a=1&b=1&s=612x612&w=0&k=20&c=vUoAQ25KtSrPJD1NukvY4IWU9-Jc1t-XR_v-cathOCw="
    },
    {
      title: "Private Sessions",
      description: "One-on-one Zumba training tailored to your fitness level and dance goals.",
      image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Zumba Classes</h1>
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

export default Zumba;
