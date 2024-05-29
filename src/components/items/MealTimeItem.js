import React, { useState, useEffect, useCallback } from 'react';
import './MealTimeItem.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../utils/DataStorage';
import { getLocalData, setLocalData } from '../utils/DataStorage';

const MealTimeItem = ({ timeName, onMealChange}) => {
    const [mealList, setMealList] = useState({});
    const [isHidden, setIsHidden] = useState(true);

    // Helper function to generate unique key with date
    const generateKey = useCallback(() => {
        const date = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
        return `${timeName}-${date}`;
    }, [timeName]);

    useEffect(() => {
        const uniqueKey = generateKey
        const data = getLocalData(uniqueKey);
        if (data) {
            setMealList(data);
        }
    }
    , [generateKey]);

    useEffect(() => {
        onMealChange();
    }
    , [mealList, onMealChange]);

    const toggleMealList = (flag) => {
        setIsHidden(flag ? !isHidden : false);
    };

    const addMeal = () => {
        const meal = prompt("Enter meal name");
        let cal = parseInt(prompt("Enter calories in 100 grams of food"), 10);
        const weight = parseInt(prompt("Enter weight in grams"), 10);
        if (!meal || isNaN(cal) || isNaN(weight)) {
            toast.error("Please Enter Valid Data!");
            toggleMealList(false);
            return;
        }
        cal = (weight * cal) / 100;
        const updatedMealList = { ...mealList, [meal]: cal };
        setMealList(updatedMealList);

        const uniqueKey = generateKey();
        setLocalData(uniqueKey, updatedMealList);
        toast.success("Meal Added Successfully!");
    };

    return (
        <div className="meal-list">
            <div className="add-meal">
                <span className="meal-time" onClick={() => toggleMealList(true)}>
                    {timeName}
                </span>
                <button className='add-btn' onClick={() => {
                    addMeal();
                    toggleMealList(false);
                }}> ➕ </button>
            </div>
            <ul id={timeName} hidden={isHidden}>
                {Object.keys(mealList).map((meal, index) => (
                    <li key={index} onClick={()=>{
                        /*pop up to ask do you want to delete the meal and has yes and no button*/
                        const flag = window.confirm("Are you sure you want to delete this meal: "+ meal + " ?");
                        if(!flag){
                            return;
                        }
                        const updatedMealList = { ...mealList };
                        delete updatedMealList[meal];
                        setMealList(updatedMealList);
                        const uniqueKey = generateKey();
                        setLocalData(uniqueKey, updatedMealList);
                        toast.success("Meal Deleted Successfully!");
                    }}>
                        <span>{meal}</span>
                        <span>{mealList[meal]} cal</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MealTimeItem;
