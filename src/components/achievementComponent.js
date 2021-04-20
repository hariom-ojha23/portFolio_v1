import React, { useState } from 'react';
import Certificate from './achievements/certificate';
import Competitive from './achievements/competitive';
import Programming from './achievements/programming';
import ShowAll from './achievements/showAll';
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Achievements = () => {

    const [show, setShow] = useState(<ShowAll />);

    const arr = [<ShowAll />, <Certificate />, <Competitive />, <Programming />];

    const clickHandler = (id) => {
        
        for(var i = 0; i < arr.length; i++)
        {
            if(id === i)
            {
                setShow(arr[i]);
            }
        }
    }

    return (
        <div className="container skill-container">
            <div className="back grid-item">
                <Link to="/projects" ><AiOutlineLeft className="back-icon" /></Link>
            </div>
            <div className="grid-item main">
            <div className="skills">
                <h1>my achievements</h1>
                <div className="bullets">
                    <span onClick={ () => clickHandler(0) } >show all</span>
                    <span onClick={ () => clickHandler(1) } >Liscence & Certification</span>
                    <span onClick={ () => clickHandler(2) } >Competitive Coding</span>
                    <span onClick={ () => clickHandler(3) } >Programming language</span>
                </div>
                    <p>showing all achievements. Use the filters to list them by their category</p>
                </div>
                <div className="contents">
                    {show}
                </div>
            </div>
            <div className="grid-item next">
                <Link to="/contact" ><AiOutlineRight className="next-icon" /></Link>
            </div>
        </div>
    );
}

export default Achievements;