import React from 'react';
import py from '../../images/py.png';
import creditCard from '../../images/credit-card.png';

const Programming = () => {
    return (
        <div className="content-item">
            <div className="project-card">
                <img className="project-img" src={py} alt="adventure game" title="adventure game" />
                <div className="overlay">
                    <div className="text">
                        <div className="overlay-content">
                            <p className="description">
                                a text based adventure game using python language which tells you a story, 
                                and based on your decission the result of story will be decided.
                            </p>
                            <button>
                                <a rel="noreferrer" href="https://github.com/hariom-ojha23/text-based-adventure-game" target="_blank">github</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img className="project-img" src={creditCard} alt="Credit-Card" title="Credit-Card" />
                <div className="overlay">
                    <div className="text">
                        <div className="overlay-content">
                            <p className="description">
                                credit card program in c++, which will track your payment and balance track after each 
                                payment.
                            </p>
                            <button>
                                <a rel="noreferrer" href="https://github.com/hariom-ojha23" target="_blank">github</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programming;