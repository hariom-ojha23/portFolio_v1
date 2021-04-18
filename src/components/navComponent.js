import React from 'react';
import Menu from './menuComponent';

const Navbar = () => {

    const toggle = () => {
        document.getElementById("topbar").style.cssText = "top: 0; height: 100vh; transition: height 0.7s;";
    }

    return(
        <div classname="btnContainer">
            <Menu />
            <div id="side-button" onClick={() => toggle()}>
                <div id="first"></div>
                <div id="second"></div>
                <div id="third"></div>
            </div>
        </div>
);
}

export default Navbar;