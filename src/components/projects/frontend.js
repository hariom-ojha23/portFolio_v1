import React from 'react';
import calc from '../../images/calc.png';
import rqm from '../../images/rqm.png';
import felix from '../../images/felix.png';

const Frontend = () => {
    return (
        <div className="content-item">
            <div className="project-card">
                <img className="project-img" src={rqm} alt="random-quote-machine" title="random-quote-machine" />
            </div>
            <div className="project-card">
                <img className="project-img" src={felix} alt="Felix-social_media_app" title="Felix_socail_media_app" />
            </div>
            <div className="project-card">
                <img className="project-img" src={calc} alt="calculator" title="claculator" />
            </div>
        </div>
    )
}

export default Frontend;