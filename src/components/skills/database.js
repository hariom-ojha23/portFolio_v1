import React from 'react';
import mongo from '../../images/mongo-logo.png';
import sql from '../../images/sql-logo.png';

const Database = () => {
    
    return(
        <div className="content-item">
            <div className="card"> 
                <img className="skill-img" src={mongo} alt="mongoDB" title="mongoDB" />
            </div>
            <div className="card"> 
                <img className="skill-img" src={sql} alt="mySQL" title="mySQL" />
            </div>
        </div>
    )
}

export default Database;