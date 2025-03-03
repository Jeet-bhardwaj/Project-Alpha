import { useEffect, useState } from 'react';
import styles from "./Gallery.module.css";
// import { Cloudinary } from 'cloudinary-core';

interface Image {
  url: string;
  name: string;
  lastUpdated?: number;
}

const CACHE_KEY = 'gallery_images_cache';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
// const cloudinary = new Cloudinary({ cloud_name: 'dtnakrubh' });

const Gallery = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getCachedImages = (): Image[] | null => {
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (!cachedData) return null;

    const { images, timestamp } = JSON.parse(cachedData);
    // Check if cache is expired
    if (Date.now() - timestamp > CACHE_DURATION) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }
    return images;
  };

  const setCachedImages = (images: Image[]) => {
    const cacheData = {
      images,
      timestamp: Date.now()
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // First, try to get images from cache
        const cachedImages = getCachedImages();
        if (cachedImages) {
          setImages(cachedImages);
          setLoading(false);
          return;
        }

        setLoading(true);
        const response = await fetch('http://localhost:5000/api/images', {
          headers: {
            'Cache-Control': 'max-age=86400' // Tell browsers to cache for 24 hours
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        
        const data = await response.json();

        // Filter images to only include those from the 'fitness-platinum' folder
        const fetchedImages = data
          .filter((img: any) => img.public_id.startsWith('fitness-platinum/'))
          .map((img: any) => ({
            url: img.url,
            name: 'Gym Image', // Set a default name instead of using public_id
            lastUpdated: Date.now()
          }));

        setImages(fetchedImages);
        setCachedImages(fetchedImages);
        setError(null);
      } catch (error) {
        console.error("Error fetching images:", error);
        setError('Failed to load images. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Preload images function
  const preloadImage = (url: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = url;
    });
  };

  // Preload images when component mounts
  useEffect(() => {
    if (images.length > 0) {
      images.forEach(image => {
        preloadImage(image.url).catch(console.error);
      });
    }
  }, [images]);

  if (loading) {
    return (
      <div className={styles.gallery}>
        <div className={styles.loading}>Loading gallery...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.gallery}>
        <div className={styles.error}>{error}</div>
      </div>
    );
  }

  return (
    <div className={styles.gallery}>
      <h1 className={styles.title}>Our Gym Gallery</h1>
      <p className={styles.description}>
        Step into our world-class fitness facility through this virtual tour. 
        Experience our modern equipment, spacious training areas, and 
        the inspiring atmosphere that awaits you.
      </p>
      <div className={styles.images}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageContainer}>
            <img 
              src={image.url} 
              alt="Gym Image"
              loading="lazy"
              fetchPriority={index < 4 ? "high" : "low"}
              decoding="async"
              width="300"
              height="300"
              style={{ contentVisibility: 'auto' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
