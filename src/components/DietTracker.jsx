// DietTracker.jsx
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './DietTracker.css';
import './items/MealTimeItem.js';
import MealTimeItem from './items/MealTimeItem.js';

const DietTracker = () => {
  const percentage = 56; // This would be dynamic in a real app

  return (
    <div className="diet-tracker">
      <header>
        <h1 className="history-text">Histroy</h1>
        <div className="profile-icon">👤</div>
      </header>
      <div className="progress-container">
        <CircularProgressbar 
          className='progress-circle'
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: '#000',
            pathColor: '#007BFF',
            trailColor: '#FF5733'
          })}
        />
      </div>
      <div className="calories">
          <h2>Calories Consumed</h2>
          <p>0/2000</p>
      </div>
      <div className="meal-tracker">
        <MealTimeItem timeName='Breakfast'/>
        <MealTimeItem timeName='Lunch'/>
        <MealTimeItem timeName='Dinner'/>
        <MealTimeItem timeName='Snack'/>
      </div>
    </div>
  );
};

export default DietTracker;
