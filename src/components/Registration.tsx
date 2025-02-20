import { useState, FormEvent } from 'react';
import styles from './Registration.module.css';

// Add modal-related props
interface RegistrationProps {
    isOpen: boolean;
    onClose: () => void;
}

const Registration = ({ isOpen, onClose }: RegistrationProps) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        age: '',
        gender: '',
        membershipPlan: 'basic'
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.registrationContainer} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>&times;</button>
                <h2>Join Fitness Platinum</h2>
                <p>Start your fitness journey today!</p>
                
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="age">Age</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="gender">Gender</label>
                        <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="membershipPlan">Membership Plan</label>
                        <select
                            id="membershipPlan"
                            name="membershipPlan"
                            value={formData.membershipPlan}
                            onChange={handleChange}
                            required
                        >
                            <option value="basic">Basic Plan</option>
                            <option value="premium">Premium Plan</option>
                            <option value="platinum">Platinum Plan</option>
                        </select>
                    </div>

                    <button type="submit" className={styles.submitButton}>
                        Join Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Registration; 