import React from 'react';
import coursera from '../../images/coursera.png';

const Certificate = () => {
    return(
        <div className="content-item">
            <div className="achievement-card">
                <img className="achievement-img" src={coursera} alt="coursera"/>
                <div className="card-title">
                    <span>Front-End Web Development with React</span>
                </div>
                <div className="overlay">
                    <div className="text">
                        <div className="overlay-content">
                            <p className="description">
                            We get an introduction to the use of Reactstrap for Bootstrap 4-based responsive UI design. 
                            We also introduced to various aspects of React components. We learn about React router and its use 
                            in developing single-page applications. We were introduced to the Flux architecture and Redux etc..
                            </p>
                            <button>
                                <a rel="noreferrer" href="https://www.coursera.org/account/accomplishments/certificate/GBX9L4T4WK2G" target="_blank">view Certificate</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="achievement-card">
                <img className="achievement-img" src={coursera} alt="coursera"/>
                <div className="card-title">
                    <span>Multiplatform mobile app development with React-Native</span>
                </div>
                <div className="overlay">
                    <div className="text">
                        <div className="overlay-content">
                            <p className="description">
                                React Native combines the best parts of native development with React. React Native lets us create truly native apps and doesn't compromise your users' experiences. 
                                It provides a core set of platform agnostic native components like View, Text, and Image that map directly to the platform’s native UI building blocks.
                            </p>
                            <button>
                                <a rel="noreferrer" href="https://www.coursera.org/account/accomplishments/certificate/JGBVAWXY7BMK" target="_blank">View certificate</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="achievement-card">
                <img className="achievement-img" src={coursera} alt="coursera"/>
                <div className="card-title">
                    <span>Front-End Web UI Framework and Tools: Bootstrap 4</span>
                </div>
                <div className="overlay">
                    <div className="text">
                        <div className="overlay-content">
                            <p className="description">
                            This course give me an overview of client-side web UI frameworks, in particular Bootstrap 4. 
                            We learn about grids and responsive design, Bootstrap CSS and JavaScript components. 
                            We also learn about CSS preprocessors, Less and Sass.
                            </p>
                            <button>
                                <a rel="noreferrer" href="https://www.coursera.org/account/accomplishments/certificate/DYG7UPXT6GMK" target="_blank">view certificate</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="achievement-card">
                <img className="achievement-img" src={coursera} alt="coursera"/>
                <div className="card-title">
                    <span>Programming for Everybody(Getting Started with Python)</span>
                </div>
                <div className="overlay">
                    <div className="text">
                        <div className="overlay-content">
                            <p className="description">
                            This course aims to teach everyone the basics of programming computers using Python. We learn the basics of how one 
                            constructs a program from a series of simple instructions in Python.  The course has no pre-requisites and avoids 
                            all but the simplest mathematics.
                            </p>
                            <button>
                                <a rel="noreferrer" href="https://www.coursera.org/account/accomplishments/certificate/YQPK2JLWDKFL" target="_blank">View Certificate</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certificate;