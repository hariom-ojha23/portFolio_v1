import React from 'react';
import js from '../../images/js-logo.png'
import python from '../../images/python-logo.png'
import cpp from '../../images/c++-logo.png';
import java from '../../images/java-logo.png'
import kotlin from '../../images/kotlin-logo.png'


const ProgrammingLanguages = () => {
    
    return(
        <div className="content-item">
            <div className="card"> 
                <img className="skill-img" src={js} alt="javascript" title="javascript" />
            </div>
            <div className="card"> 
                <img className="skill-img" src={python} alt="python" title="python" />
            </div>
            <div className="card"> 
                <img className="skill-img" src={cpp} alt="c++" title="c++" />
            </div>
            <div className="card"> 
                <img className="skill-img" src={java} alt="java" title="java" />
            </div>
            <div className="card"> 
                <img className="skill-img" src={kotlin} alt="kotlin" title="kotlin" />
            </div>
        </div>
    )
}

export default ProgrammingLanguages;