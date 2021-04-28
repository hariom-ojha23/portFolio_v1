import React from 'react';
import hackerrank from '../../images/Hackerrank.png'
import pythonHr from '../../images/python-hr.jfif';
import { AiFillStar } from "react-icons/ai";


const Programming = () => {
    return(
        <div className="content-item">
            <div className="achievement-card">
                <img className="achievement-img" src={hackerrank} alt="hackerrank" />
                <div className="card-title">
                    <span>python Basic Hackerrank Skill Certificate</span>
                </div>
                <div className="overlay">
                    <div className="text">
                        <div className="overlay-content">
                            <p className="description">
                            It covers topics like Scalar Types, Operators and Control Flow, Strings, Collections and Iteration, Modularity, 
                            Objects and Types and Classes
                            </p>
                            <button>
                                <a rel="noreferrer" href="https://www.hackerrank.com/certificates/c70b5c0b9aea" target="_blank">View Certificate</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="achievement-card">
                <img className="achievement-img" src={pythonHr} alt="hackerrank"/>
                <div className="card-title">
                    <span>5 <i className="star"><AiFillStar /></i> in python at Hackerrank</span>
                </div>
                <div className="overlay">
                    <div className="text">
                        <div className="overlay-content">
                            <p className="description">
                                Achieved 5 star badge in python language at hackerrank
                            </p>
                            <button>
                                <a rel="noreferrer" href="https://www.hackerrank.com/Hari_om_Ojha" target="_blank">View Profile</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programming;