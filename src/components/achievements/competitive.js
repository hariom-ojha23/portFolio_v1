import React from 'react';
import codechef from '../../images/codechef.png';
import { AiFillStar } from "react-icons/ai";


const Competitive = () => {
    return(
        <div className="content-item">
            <div className="achievement-card">
                <img className="achievement-img" src={codechef} alt="codechef"/>
                <div className="card-title">
                    <span>2 <i className="star"><AiFillStar /></i> at CodeChef</span>
                </div>
                <div className="overlay">
                    <div className="text">
                        <div className="overlay-content">
                            <p className="description">
                                Achieve 2 star at CodeChef in Competitive Programming in python and c++ language
                            </p>
                            <button>
                                <a rel="noreferrer" href="https://www.codechef.com/users/hari_om_ojha" target="_blank">view profile</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Competitive;