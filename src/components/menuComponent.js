import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";

const Menu = () => {

    const toggle = () => {
        document.getElementById("topbar").style.cssText = "top: -100vh; height: 0; transition: height 1s;";
    }

    return (
        <div id="topbar">
            <div className="navContainer">
                <ul>
                    <li><NavLink to="/" activeClassName="active" onClick={() => toggle()}>about</NavLink></li>
                    <li><NavLink  to="/skills" activeClassName="active" onClick={() => toggle()}>skills</NavLink></li>
                    <li><NavLink  to="/projects" activeClassName="active" onClick={() => toggle()}>projects</NavLink></li>
                    <li><NavLink to="/achievements" activeClassName="active" onClick={() => toggle()}>achievements</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active" onClick={() => toggle()}>contact</NavLink></li>
                </ul>
                <div id="close-btn-div" onClick={() => toggle()}>
                    <AiOutlineClose className="close-btn" />
                </div>
            </div>
        </div>
    );
}

export default Menu;