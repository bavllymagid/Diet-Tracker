import React, { useState, useEffect } from 'react';
import './MealTimeItem.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MealTimeItem = ({ timeName }) => {
    const [mealList, setMealList] = useState({});
    const [isHidden, setIsHidden] = useState(true);

    useEffect(() => {
        const storedMeals = JSON.parse(localStorage.getItem(timeName));
        if (storedMeals) {
            setMealList(storedMeals);
        }
    }, [timeName]);

    const toggleMealList = (flag) => {
        setIsHidden(flag ? !isHidden : false);
    };

    const addMeal = () => {
        const meal = prompt("Enter meal name");
        const cal = parseInt(prompt("Enter calories in 100 grams of food"), 10);
        if (!meal || isNaN(cal)) {
            toast.error("Please Enter Valid Data!");
            toggleMealList(false);
            return;
        }
        const updatedMealList = { ...mealList, [meal]: cal };
        setMealList(updatedMealList);
        localStorage.setItem(timeName, JSON.stringify(updatedMealList));
        toast.success("Meal Added Successfully!");
    };

    return (
        <div className="meal-list">
            <div className="add-meal">
                <span className="meal-time" onClick={() => toggleMealList(true)}>
                    {timeName}
                </span>
                <button className='add-btn' onClick={()=>{
                    addMeal();
                    toggleMealList(false);
                }}> ➕ </button>
            </div>
            <ul id={timeName} hidden={isHidden}>
                {Object.keys(mealList).map((meal, index) => (
                    <li key={index}>
                        <span>{meal}</span>
                        <span>{mealList[meal]} cal</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MealTimeItem;
