import React from 'react';
import weather from '../../images/weather.jpg';

const ReactNative = () => {
    return (
        <div className="content-item">
            <div className="project-card">
                <img className="project-img" src={weather} alt="weather-app" title="weather-app" />
                <div className="overlay">
                    <div className="text">
                        <div className="overlay-content">
                            <p className="description">
                                weather app, using openweathermap.org api to fetch information
                                and then parse it into json to arrange data.
                            </p>
                            <button>
                                <a href="https://github.com/hariom-ojha23/weather-app" target="_blank">github</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReactNative;