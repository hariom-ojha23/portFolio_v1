import React from 'react';
import py from '../../images/py.png';
import creditCard from '../../images/credit-card.png';

const Programming = () => {
    return (
        <div className="content-item">
            <div className="project-card">
                <img className="project-img" src={py} alt="adventure game" title="adventure game" />
            </div>
            <div className="project-card">
                <img className="project-img" src={creditCard} alt="Credit-Card" title="Credit-Card" />
            </div>
        </div>
    )
}

export default Programming;