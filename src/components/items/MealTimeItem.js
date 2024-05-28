import React from 'react';
import './MealTimeItem.css';

const MealTimeItem = ({timeName}) => {
    return (
        <div className="meal-list">
          <div className="add-meal">
            <text className="meal-time">{timeName}</text>
            <button className='add-btn' onClick={() => {
              var breakfast = document.createElement('li');
              breakfast.innerHTML = {timeName}.timeName +' added 1';
              document.querySelector('.meal-list ul').appendChild(breakfast);
              console.log({timeName} +'added 1');
            }}> ➕ </button>
          </div>
          <ul>
          </ul>
        </div>
    );
}

export default MealTimeItem;