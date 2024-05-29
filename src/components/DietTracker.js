// DietTracker.jsx
import React, { useState, useEffect, useCallback } from 'react';
import './DietTracker.css';
import MealTimeItem from './items/MealTimeItem.js';
import ProgressBar from './items/ProgressContainer.js';
import { sumAllCalories } from './utils/DataStorage';

const DietTracker = () => {
  const goal = localStorage.getItem('goal') || 2000;

  const [consumed, setConsumed] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const updateConsumedCalories = useCallback(() => {
    const consumedCalories = sumAllCalories(new Date().toISOString().split('T')[0]);
    const consumedPercentage = (consumedCalories / goal) * 100;
    setConsumed(consumedCalories);
    setPercentage(consumedPercentage);
  }, [goal]);

  useEffect(() => {
    updateConsumedCalories();
  }, [updateConsumedCalories]);

  return (
    <div className="diet-tracker">
      <header>
        <h1 className="history-text">History</h1>
        <div className="profile-icon" onClick={() => {
          // redirect to profile page
          window.location.href = './ProfilePage.js';
        }}>👤</div>
      </header>
      <ProgressBar percentage={percentage} />
      <div className="calories">
        <h2>Calories Consumed</h2>
        <p>{consumed}/{goal}</p>
      </div>
      <div className="meal-tracker">
        <MealTimeItem timeName='Breakfast' onMealChange={updateConsumedCalories} />
        <MealTimeItem timeName='Lunch' onMealChange={updateConsumedCalories} />
        <MealTimeItem timeName='Dinner' onMealChange={updateConsumedCalories} />
        <MealTimeItem timeName='Snack' onMealChange={updateConsumedCalories} />
      </div>
    </div>
  );
};

export default DietTracker;


