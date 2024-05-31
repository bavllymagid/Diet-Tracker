import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './ProgressBar.css';
import dogo from '../../imgs/dogo.png';
import sadDogo from '../../imgs/sadDogo.png';

const ProgressBar = ({ percentage }) => {
    // Conditional class to change the color of the CircularProgressbar when it exceeds 100%
    const progressBarClass = percentage > 100 ? 'progress-bar exceeded' : 'progress-bar';

    return (
        <div className="progress-container">
            <CircularProgressbarWithChildren value={percentage} className={progressBarClass}>
            {percentage < 100 ? <img className='dog-img' src={dogo} alt="dogo"/> : <img className='dog-img' src={sadDogo} alt="sad dogo"/>}
                <div className='text-container'>
                    <span className='bar-text'>{parseFloat(percentage).toFixed(2)}%</span> 
                    {percentage < 100 ? <span className='bar-text'> Mate</span> : <span className='bar-text'> Fat mate</span>} 
                </div>
            </CircularProgressbarWithChildren>
        </div>
    );
};

export default ProgressBar;
