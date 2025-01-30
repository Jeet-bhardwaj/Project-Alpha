import styles from "./Gallery.module.css";

const Gallery = () => {
  return (<>
    <div className={styles.gallery}>
      <h1 className={styles.title}>Our Gym Gallery</h1>
      <p className={styles.description}>
        Explore our state-of-the-art gym facilities and training areas.
      </p>
      <div className={styles.images}>
        <img src="https://source.unsplash.com/400x300/?gym,fitness" alt="Gym 1" />
        <img src="https://source.unsplash.com/400x300/?workout,exercise" alt="Gym 2" />
        <img src="https://source.unsplash.com/400x300/?dumbbells" alt="Gym 3" />
      </div>
    </div>
  </>
  );
};

export default Gallery;
