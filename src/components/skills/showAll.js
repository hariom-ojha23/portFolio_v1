import React from 'react';
import Backend from './backend';
import Frontend from './frontend';
import Cloud from './cloud';
import Database from './database';
import DevelopmentTools from './developmentTools';
import ProgrammingLanguages from './programmingLanguages';

const ShowAll = () => {

    return(
        <div className="all-container">
            <h3>Programming Languages</h3>
            <ProgrammingLanguages />
            
            <h3>Backend</h3>
            <Backend />

            <h3>Frontend</h3>
            <Frontend />

            <h3>Cloud</h3>
            <Cloud />

            <h3>Database</h3>
            <Database />

            <h3>Development Tools</h3>
            <DevelopmentTools />
        </div>
    )
    
}

export default ShowAll;