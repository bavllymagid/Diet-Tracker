// DietTracker.jsx
import React, { useEffect, useReducer, useCallback } from 'react';
import './DietTracker.css';
import MealTimeItem from './items/MealTimeItem.js';
import ProgressBar from './items/ProgressContainer.js';
import { sumAllCalories } from './utils/DataStorage';
import { useNavigate} from "react-router-dom";
import ProfilePage from './ProfilePage';


const initialState = {
  goal: localStorage.getItem('goal') || 2000,
  consumed: 0,
  percentage: 0
};

function reducer(state, action) {
  switch (action.type) {
    case 'update':
      const consumedCalories = sumAllCalories(new Date().toISOString().split('T')[0]);
      const consumedPercentage = (consumedCalories / state.goal) * 100;
      return { ...state, consumed: consumedCalories, percentage: consumedPercentage };
    default:
      throw new Error();
  }
}

const DietTracker = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/profile');
  const [state, dispatch] = useReducer(reducer, initialState);
  const updateConsumedCalories = useCallback(() => {
    dispatch({ type: 'update' });
  }, []);

  useEffect(() => {
    updateConsumedCalories();
  }, [updateConsumedCalories]);

  return (
    <div className="diet-tracker">
      <header>
        <h1 className="history-text">History</h1>
        <div className="profile-icon" onClick={handleClick}>👤</div>
      </header>
      <ProgressBar percentage={state.percentage} />
      <div className="calories">
        <span>Calories Consumed</span>
        <span>{state.consumed} / {state.goal}</span>
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
