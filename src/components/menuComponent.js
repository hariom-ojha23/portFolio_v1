import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="navContainer">
            <ul>
                <li><Link to="/" >about</Link></li>
                <li><Link to="/skills" >skills</Link></li>
                <li><Link to="/projects" >projects</Link></li>
                <li><Link to="/achievements" >achievements</Link></li>
                <li><Link to="/contact" >contact</Link></li>
            </ul>
        </div>
    );
}

export default Menu;