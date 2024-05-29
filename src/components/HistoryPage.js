import './HistoryPage.css'
import React, { useState, useEffect } from 'react';
import { getLocalData } from './utils/DataStorage';

const HistoryPage = () => {
    const [history, setHistory] = useState({});
    useEffect(() => {
        const data = getLocalData('history');
        if (data) {
            setHistory(data);
        }
    }, []);

    return (
        <div className="history-page">
            <header>
                <span className='history-title'>History</span>
                <div className="home-icon" onClick={()=>{
                    window.location.href = './';
                }}>🏠</div>
            </header>
            <ul className="history-list">
                {Object.keys(history).map((date, index) => (
                    <li key={index}>
                        <span>{date}</span>
                        <span>{history[date]} cal</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HistoryPage;
