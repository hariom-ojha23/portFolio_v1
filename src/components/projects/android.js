import React from 'react';
import tiptime from '../../images/tip-time.png';
import weather from '../../images/weather.jpg';

const Android = () => {
    return (
        <div className="content-item">
            <div className="project-card">
                <img className="project-img" src={tiptime} alt="random-quote-machine" title="random-quote-machine" />
                <div className="overlay">
                    <div className="text">
                        <div className="overlay-content">
                            <p className="description">
                                tip time, an android app, also has dark mode auto enabled based on theme of 
                                your device. one can calculate tip and choose to round of the tip or not.
                            </p>
                            <button>
                                <a href="https://github.com/hariom-ojha23/tip_calculator" target="_blank">github</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
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

export default Android;