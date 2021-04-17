import React from 'react';
import github from '../../images/github-logo.png'
import git from '../../images/git-logo.png'
import vs from '../../images/vs-logo.png'
import as from '../../images/as-logo.png'

const DevelopmentTools = () => {
    
    return(
        <div className="content-item">
            <div className="card"> 
                <img className="skill-img" src={github} alt="github" title="github" />
            </div>
            <div className="card"> 
                <img className="skill-img" src={git} alt="git" title="git"  />
            </div>
            <div className="card"> 
                <img className="skill-img" src={vs} alt="vs code" title="vs code"  />
            </div>
            <div className="card"> 
                <img className="skill-img" src={as} alt="android studio" title="android studio"  />
            </div>
        </div>
    )
}

export default DevelopmentTools;