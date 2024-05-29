// DietTracker.jsx
import React from 'react';
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './DietTracker.css';
import './items/MealTimeItem.js';
import MealTimeItem from './items/MealTimeItem.js';

const DietTracker = () => {
  const goal = localStorage.getItem('goal') || 2000;
  const consumed = localStorage.getItem('consumed') || 500;
  const percentage = (consumed / goal) * 100; 

  return (
    <div className="diet-tracker">
      <header>
        <h1 className="history-text">Histroy</h1>
        <div className="profile-icon">👤</div>
      </header>
      <div className="progress-container">
        <CircularProgressbarWithChildren value={percentage}>
          {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
          <img style={{ width: 60, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
          <div style={{ fontSize: 12, marginTop: -5 }}>
            <text className='bar-text'>{percentage}%</text>
            <text className='bar-text'> Mate</text>
          </div>
        </CircularProgressbarWithChildren>;
      </div>
      <div className="calories">
        <h2>Calories Consumed</h2>
        <p>0/2000</p>
      </div>
      <div className="meal-tracker">
        <MealTimeItem timeName='Breakfast' />
        <MealTimeItem timeName='Lunch' />
        <MealTimeItem timeName='Dinner' />
        <MealTimeItem timeName='Snack' />
      </div>
    </div>
  );
};

export default DietTracker;
