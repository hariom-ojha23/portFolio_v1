import React from 'react';
import tiptime from '../../images/tip-time.png';
import weather from '../../images/weather.jpg';

const Android = () => {
    return (
        <div className="content-item">
            <div className="project-card">
                <img className="project-img" src={tiptime} alt="random-quote-machine" title="random-quote-machine" />
            </div>
            <div className="project-card">
                <img className="project-img" src={weather} alt="weather-app" title="weather-app" />
            </div>
        </div>
    )
}

export default Android;