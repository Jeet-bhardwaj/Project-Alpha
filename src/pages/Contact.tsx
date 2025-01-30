import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.title}>Get in Touch</h1>
      <p>Email: info@fitnessplatinum.com</p>
      <p>Phone: +1 (234) 567-890</p>
    </div>
  );
};

export default Contact;
