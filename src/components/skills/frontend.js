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
                <img className="skill-img" src={react} alt="reactjs" title="reactjs" />
            </div>
            <div className="card"> 
                <img className="skill-img" src={html} alt="html5" title="html5" />
            </div>
            <div className="card"> 
                <img className="skill-img" src={css} alt="css3" title="css3" />
            </div>
            <div className="card"> 
                <img className="skill-img" src={bootstrap} alt="bootstrap" title="bootstrap" />
            </div>
            <div className="card"> 
                <img className="skill-img" src={sass} alt="sass" title="sass" />
            </div>
            <div className="card"> 
                <img className="skill-img" src={jquery} alt="jquery" title="jquery" />
            </div>
        </div>
    )
}

export default Frontend;