import React from 'react';
import Android from './android';
import Html from './html';
import Programming from './programming';
import ReactJs from './react';

const ShowAll = () => {

    return(
        <div className="all-container">
            <ReactJs />
            <Android />
            <Html />
            <Programming />
        </div>
    )
}

export default ShowAll;