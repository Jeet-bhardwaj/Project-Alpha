import { useEffect, useState } from 'react';
import styles from "./Gallery.module.css";

interface Image {
  url: string;
  name: string;
  storageRef: string;
}

const Gallery = () => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    // Get images from localStorage
    const storedImages = JSON.parse(localStorage.getItem('gymImages') || '[]');
    setImages(storedImages);
  }, []);

  return (
    <div className={styles.gallery}>
      <h1 className={styles.title}>Our Gym Gallery</h1>
      <p className={styles.description}>
        Explore our state-of-the-art gym facilities and training areas.
      </p>
      <div className={styles.images}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageContainer}>
            <img src={image.url} alt={image.name} />
            <p className={styles.imageName}>{image.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
