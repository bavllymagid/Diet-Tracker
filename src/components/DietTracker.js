import React, { useEffect, useReducer, useCallback, useState } from 'react';
import './DietTracker.css';
import MealTimeItem from './items/MealTimeItem.js';
import ProgressBar from './items/ProgressContainer.js';
import { sumAllCalories } from './utils/DataStorage';
import { useNavigate } from "react-router-dom";

const initialState = {
  goal: parseInt(localStorage.getItem('goal'), 10) || 2000,
  consumed: 0,
  percentage: 0
};

function reducer(state, action) {
  switch (action.type) {
    case 'update':
      const consumedCalories = sumAllCalories(new Date().toISOString().split('T')[0]);
      const consumedPercentage = (consumedCalories / state.goal) * 100;
      console.log('Reducer update:', { consumedCalories, consumedPercentage }); 
      return { ...state, consumed: consumedCalories, percentage: consumedPercentage };
    default:
      throw new Error('Unknown action type');
  }
}

const DietTracker = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/profile');
  const hisClick = () => navigate('/history');
  const [state, dispatch] = useReducer(reducer, initialState);
  const [updateTrigger, setUpdateTrigger] = useState(false); 

  const updateConsumedCalories = useCallback(() => {
    console.log('Updating consumed calories'); 
    dispatch({ type: 'update' });
  }, []);

  useEffect(() => {
    console.log('Component mounted or updated'); 
    updateConsumedCalories();
  }, [updateConsumedCalories, updateTrigger]); 

  const handleMealChange = () => {
    console.log('Meal changed'); 
    setUpdateTrigger(prev => !prev); 
  };

  console.log('Render state:', state); 

  return (
    <div className="diet-tracker">
      <header>
        <h1 className="history-text" onClick={hisClick}>History</h1>
        <div className="profile-icon" onClick={handleClick}>👤</div>
      </header>
      <ProgressBar percentage={state.percentage} />
      <div className="calories">
        <span>Calories Consumed</span>
        <span>{state.consumed} / {state.goal}</span>
      </div>
      <div className="meal-tracker">
        <MealTimeItem timeName='Breakfast' onMealChange={handleMealChange} />
        <MealTimeItem timeName='Lunch' onMealChange={handleMealChange} />
        <MealTimeItem timeName='Dinner' onMealChange={handleMealChange} />
        <MealTimeItem timeName='Snack' onMealChange={handleMealChange} />
      </div>
    </div>
  );
};

export default DietTracker;
