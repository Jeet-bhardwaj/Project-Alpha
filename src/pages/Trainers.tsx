import { useState, useEffect } from "react";
import styles from "./Trainers.module.css";

interface Trainer {
    url: string;
    public_id: string;
    name: string;
    specialty: string;
}

const Trainers = () => {
    const [trainers, setTrainers] = useState<Trainer[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTrainers = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/trainers');
                if (!response.ok) throw new Error('Failed to fetch trainers');
                const data = await response.json();
                setTrainers(data);
            } catch (err) {
                console.error('Error fetching trainers:', err);
                setError('Failed to load trainers. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchTrainers();
    }, []);

    if (loading) return <div className={styles.loading}>Loading trainers...</div>;
    if (error) return <div className={styles.error}>{error}</div>;

    return (
        <div className={styles.trainers}>
            <h1 className={styles.title}>Meet Our Expert Trainers</h1>
            <p className={styles.description}>
                Our certified fitness professionals are passionate about helping you achieve your goals
            </p>
            <div className={styles.profiles}>
                {trainers.length > 0 ? (
                    trainers.map((trainer, index) => (
                        <div className={styles.trainer} key={trainer.public_id || index}>
                            <div className={styles.imageWrapper}>
                                <img src={trainer.url} alt={trainer.name} />
                            </div>
                            <h3>{trainer.name}</h3>
                            <p className={styles.specialty}>{trainer.specialty}</p>
                            <p className={styles.bio}>
                                "Dedicated to helping you achieve your fitness goals"
                            </p>
                        </div>
                    ))
                ) : (
                    <p className={styles.noTrainers}>No trainers available at the moment.</p>
                )}
            </div>
        </div>
    );
};

export default Trainers;
