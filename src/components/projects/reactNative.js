import React from 'react';
import weather from '../../images/weather.jpg';

const ReactNative = () => {
    return (
        <div className="content-item">
            <div className="project-card">
                <img className="project-img" src={weather} alt="weather-app" title="weather-app" />
            </div>
        </div>
    )
}

export default ReactNative;