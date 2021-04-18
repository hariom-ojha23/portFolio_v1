import React, { useState } from 'react';
import ShowAll from './projects/showAll';
import Frontend from './projects/frontend';
import Backend from './projects/backend';
import Android from './projects/android';
import Html from './projects/html';
import Programming from './projects/programming';
import ReactJs from './projects/react';
import ReactNative from './projects/reactNative';
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Project = () => {

    const [show, setShow] = useState(ShowAll);

    const arr = [<ShowAll />, <Frontend />, <Backend />, <Android />, <Html />, 
                <ReactJs />, <ReactNative />, <Programming />];

    const clickHandler = (id) => {
        
        for (var i = 0; i < 8; i++) {
            if (i === id) {
                setShow(arr[i]);
            }
        }
    }

    return (
        <div className="container project-container">
            <div className="back grid-item">
                <Link to="/skills" ><AiOutlineLeft className="back-icon" /></Link>
            </div>
            <div className="grid-item main">
                <div className="projects">
                    <h1>my projects</h1>
                    <div className="bullets">
                        <span onClick={ () => clickHandler(0) } >show all</span>
                        <span onClick={ () => clickHandler(1) } >frontend</span>
                        <span onClick={ () => clickHandler(2) } >backend</span>
                        <span onClick={ () => clickHandler(3) } >android</span>
                        <span onClick={ () => clickHandler(4) } >html5</span>
                        <span onClick={ () => clickHandler(5) } >reactjs</span>
                        <span onClick={ () => clickHandler(6) } >react-native</span>
                        <span onClick={ () => clickHandler(7) } >programming</span>
                    </div>
                    <p>showing all projects. Use the filters to list them by technology and skills</p>
                </div>
                <div className="contents">
                    {show}
                </div>
            </div>
            <div className="grid-item next">
                <Link to="/achievements" ><AiOutlineRight className="next-icon" /></Link>
            </div>
        </div>
    );
}

export default Project;