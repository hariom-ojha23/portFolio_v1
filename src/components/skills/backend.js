import React from 'react';
import node from '../../images/node-logo.png';
import express from '../../images/Expressjs-logo.png';

const Backend = () => {
    
    return(
        <div className="content-item">
            <div className="card">
                <img className="skill-img" src={node} alt="nodejs" title="nodejs" />
            </div>
            <div className="card">
                <img className="skill-img" src={express} alt="expressjs" title="expressjs" />
            </div>
        </div>
    )
}

export default Backend;