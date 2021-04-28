import React from 'react';
import Menu from './menuComponent';

const Navbar = () => {

    const toggle = () => {
        const el = document.getElementById("topbar")

        if(el.classList.contains('isClose'))
        {
            el.classList.remove('isClose');
            el.classList.add('isOpen');
        }

        // document.getElementById("topbar").style.cssText = "top: 0; height: 100vh; transition: height 0.7s;";
    }

    return(
        <div>
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