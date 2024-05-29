// this page contains your profile info and could be updated this page includes : your name, age, weight, height, and goal calories

import React, { useState } from 'react';
import './ProfilePage.css';

const ProfilePage = () => {

    const [name, setName] = useState(localStorage.getItem('name') || '');
    const [age, setAge] = useState(localStorage.getItem('age') || '');
    const [weight, setWeight] = useState(localStorage.getItem('weight') || '');
    const [height, setHeight] = useState(localStorage.getItem('height') || '');
    const [goal, setGoal] = useState(localStorage.getItem('goal') || '');

    return (
        <div className="profile-page">
            <header>
                <h1 className="profile-text">Profile</h1>
                <div className="home-icon" onClick={() => {
                    // redirect to home page
                    window.location.href = './';
                }}>🏠</div>
            </header>
            <div className="profile-info">
                <h2>Name</h2>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <h2>Age</h2>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                <h2>Weight</h2>
                <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
                <h2>Height</h2>
                <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
                <h2>Goal Calories</h2>
                <input type="text" value={goal} onChange={(e) => setGoal(e.target.value)} />
            </div>
            <button onClick={() => {
                localStorage.setItem('name', name);
                localStorage.setItem('age', age);
                localStorage.setItem('weight', weight);
                localStorage.setItem('height', height);
                localStorage.setItem('goal', goal);
                window.location.href = './';
            }}>Save</button>
        </div>
    );
}

export default ProfilePage;