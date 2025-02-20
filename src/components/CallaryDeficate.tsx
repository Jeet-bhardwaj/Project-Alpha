import React, { useState } from 'react';
import styles from './CalorieDeficit.module.css';

const CalorieDeficit = () => {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [result, setResult] = useState<number | null>(null);

  const calculateBMR = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    const ageNum = parseFloat(age);

    if (!weightNum || !heightNum || !ageNum) {
      alert('Please fill in all fields');
      return;
    }

    let bmr;
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weightNum) + (4.799 * heightNum) - (5.677 * ageNum);
    } else {
      bmr = 447.593 + (9.247 * weightNum) + (3.098 * heightNum) - (4.330 * ageNum);
    }

    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9
    };

    const tdee = bmr * activityMultipliers[activityLevel as keyof typeof activityMultipliers];
    const deficitCalories = tdee - 500; // 500 calorie deficit for weight loss
    setResult(Math.round(deficitCalories));
  };

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.calculator}>
        <h2>Calorie Deficit Calculator</h2>
        <div className={styles.form}>
          <div className={styles.formGroup}>
            <label>Gender:</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Years"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Weight:</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="kg"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Height:</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="cm"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Activity Level:</label>
            <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
              <option value="sedentary">Sedentary (little or no exercise)</option>
              <option value="light">Light (exercise 1-3 times/week)</option>
              <option value="moderate">Moderate (exercise 3-5 times/week)</option>
              <option value="active">Active (exercise 6-7 times/week)</option>
              <option value="veryActive">Very Active (hard exercise daily)</option>
            </select>
          </div>

          <button className={styles.calculateBtn} onClick={calculateBMR}>
            Calculate
          </button>

          {result && (
            <div className={styles.result}>
              <h3>Your Daily Calorie Target:</h3>
              <p>{result} calories/day</p>
              <small>This represents a 500-calorie deficit for weight loss</small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalorieDeficit;
