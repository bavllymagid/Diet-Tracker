import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './ProgressBar.css'; // Assuming you have a CSS file for styling

const ProgressBar = ({ percentage }) => {
    // Conditional class to change the color of the CircularProgressbar when it exceeds 100%
    const progressBarClass = percentage > 100 ? 'progress-bar exceeded' : 'progress-bar';

    return (
        <div className="progress-container">
            <CircularProgressbarWithChildren value={percentage} className={progressBarClass}>
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizontally centered. */}
                <img className='dog-img' src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
                <div className='text-container'>
                    <span className='bar-text'>{parseFloat(percentage).toFixed(2)}%</span> {/* changed text to span */}
                    <span className='bar-text'> Mate</span> {/* changed text to span */}
                </div>
            </CircularProgressbarWithChildren>
        </div>
    );
};

export default ProgressBar;
