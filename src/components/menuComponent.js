import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

    const toggle = () => {
        document.getElementById("topbar").style.cssText = "top: -100vh; height: 0; transition: height 1s;";
    }

    return (
        <div id="topbar">
            <div className="navContainer">
                <ul>
                    <li><Link to="/" onClick={() => toggle()}>about</Link></li>
                    <li><Link to="/skills" onClick={() => toggle()}>skills</Link></li>
                    <li><Link to="/projects" onClick={() => toggle()}>projects</Link></li>
                    <li><Link to="/achievements" onClick={() => toggle()}>achievements</Link></li>
                    <li><Link to="/contact" onClick={() => toggle()}>contact</Link></li>
                </ul>
                <button onClick={() => toggle()}>
                    close
                </button>
            </div>
        </div>
    );
}

export default Menu;