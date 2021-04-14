import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div class="container">
            <ul>
                <li><Link to="/" className="option" >About</Link></li>
                <li><Link to="/skills" className="option" >Skills</Link></li>
                <li><Link to="/projects" className="option" >Projects</Link></li>
                <li><Link to="/achievements" className="option" >Achievements</Link></li>
                <li><Link to="/contact" className="option" >Contact</Link></li>
            </ul>
        </div>
    );
}

export default Menu;