import React from 'react';
import rqm from '../../images/rqm.png';
import confusion from '../../images/confusion.png';
import felix from '../../images/felix.png';
import calc from '../../images/calc.png';

const ReactJs = () => {
    return (
        <div className="content-item">
            <div className="project-card">
                <img className="project-img" src={rqm} alt="random-quote-machine" title="random-quote-machine" />
            </div>
            <div className="project-card">
                <img className="project-img" src={confusion} alt="conFusion" title="conFusion" />
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

export default ReactJs;