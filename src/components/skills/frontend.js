import React from 'react';
import react from '../../images/react-logo.png'
import html from '../../images/html-logo.png'
import css from '../../images/css-logo.png'
import bootstrap from '../../images/bootstrap-logo.png'
import sass from '../../images/sass-logo.png'
import jquery from '../../images/jquery-logo.png'


const Frontend = () => {
    
    return(
        <div className="content-item">
            <div className="card"> 
                <img className="skill-img" src={react} />
            </div>
            <div className="card"> 
                <img className="skill-img" src={html} />
            </div>
            <div className="card"> 
                <img className="skill-img" src={css} />
            </div>
            <div className="card"> 
                <img className="skill-img" src={bootstrap} />
            </div>
            <div className="card"> 
                <img className="skill-img" src={sass} />
            </div>
            <div className="card"> 
                <img className="skill-img" src={jquery} />
            </div>
        </div>
    )
}

export default Frontend;