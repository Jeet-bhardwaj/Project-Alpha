import { useEffect, useState } from 'react';
import styles from "./Gallery.module.css";
import { Cloudinary } from 'cloudinary-core';

interface Image {
  url: string;
  name: string;
}

const cloudinary = new Cloudinary({ cloud_name: 'dtnakrubh' }); // Use correct Cloudinary name

const Gallery = () => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    // Fetch images from backend API
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/images'); // Correct API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await response.json();

        const fetchedImages = data.map((img: any) => ({
          url: img.url, // Directly use secure_url from backend
          name: img.public_id
        }));

        setImages(fetchedImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
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
