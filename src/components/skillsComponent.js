import React, { useState } from 'react';
import Backend from './skills/backend';
import Frontend from './skills/frontend';
import Cloud from './skills/cloud';
import Database from './skills/database';
import DevelopmentTools from './skills/developmentTools';
import ProgrammingLanguages from './skills/programmingLanguages';
import ShowAll from './skills/showAll';
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Skills = () => {

    const [show, setShow] = useState(<ShowAll />);

    const clickHandler = (id) => {
        
        switch(id) {
            case 0:
                setShow(<ShowAll />);
                break;

            case 1:
                setShow(<Backend />);
                break;
            
            case 2:
                setShow(<Frontend />);
                break;

            case 3:
                setShow(<ProgrammingLanguages />);
                break;

            case 4:
                setShow(<Cloud />);
                break;

            case 5:
                setShow(<Database />);
                break;
            
            case 6:
                setShow(<DevelopmentTools />);
                break;
        }
    }


    return (
        <div className="container skill-container">
            <div className="back grid-item">
                <Link to="/" ><AiOutlineLeft /></Link>
            </div>
            <div className="grid-item main">
                <div class="skills">
                    <h1>my skills</h1>
                    <div class="bullets">
                        <span onClick={ () => clickHandler(0) } >show all</span>
                        <span onClick={ () => clickHandler(3) } >programmig languages</span>
                        <span onClick={ () => clickHandler(1) } >backend</span>
                        <span onClick={ () => clickHandler(2) } >frontend</span>
                        
                        <span onClick={ () => clickHandler(4) } >cloud</span>
                        <span onClick={ () => clickHandler(5) } >database</span>
                        <span onClick={ () => clickHandler(6) } >development tools</span>
                    </div>
                </div>
                <div class="contents">
                        {show}
                </div>
            </div>
            <div className="grid-item next">
            <Link to="/projects" ><AiOutlineRight /></Link>
            </div>
        </div>
    );
}

export default Skills;