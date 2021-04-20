import React from 'react';
import Certificate from './certificate';
import Competitive from './competitive';
import Programming from './programming';

const ShowAll = () => {
    return(
        <div className="all-container">
            
            <h3>Course Certificate</h3>
            <Certificate />

            <h3>Competitive</h3>
            <Competitive />

            <h3>Programming</h3>
            <Programming />
        </div>
    )
}

export default ShowAll;