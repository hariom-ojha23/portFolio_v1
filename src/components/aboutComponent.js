import React, { Component } from 'react';
import 
{ 
    FaFacebookF, 
    FaLinkedinIn, 
    FaTwitter, 
    FaInstagram, 
    FaGithub  
} from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from 'react-router-dom';

class About extends Component {

    constructor(props) {
        super(props)

        this.state = {
            text: "Hello, my name is Hari om Ojha",
            currentText: '',
            info: "                                I'm a computer science and engineering student. I'm a programmer, full stack developer, android app developer and hybrid app developer. I like to sketch portraits and listen music in my extra time.",
            currentInfo: '',
            typingDelay: 50,
            infoDelay: 20,
            charIndex: 0
        };

        this.intro = this.intro.bind(this);
        this.info = this.info.bind(this);
    }

    componentDidMount() {
        this.intro();
    }

    intro = () => {
        if (this.state.charIndex <= this.state.text.length) {
            this.setState({
                currentText: this.state.currentText + this.state.text.charAt(this.state.charIndex),
                charIndex: this.state.charIndex + 1
            })
            setTimeout(this.intro, this.state.typingDelay);
        }
        else {
            this.info();
        }
    }

    info = () => {
        if (this.state.charIndex <= this.state.info.length) {
            this.setState({
                currentInfo: this.state.currentInfo + this.state.info.charAt(this.state.charIndex),
                charIndex: this.state.charIndex + 1
            })
            setTimeout(this.intro, this.state.infoDelay);
        }
    }

    render() {
        return (
            <div className="container">
                <div id="social" className="grid-item">
                    <ul>
                        <li><span>Follow Me</span></li>
                        <li><a href="https://www.facebook.com/hari.om.18659/" target="/blank" title="facebook"><FaFacebookF className="social-icons" /></a></li>
                        <li><a href="https://github.com/hariom-ojha23" target="/blank" title="github"><FaGithub className="social-icons" /></a></li>
                        <li><a href="https://www.linkedin.com/in/hari-om-ojha-0ba62419b" target="/blank" title="linkedin"><FaLinkedinIn className="social-icons" /></a></li>
                        <li><a href="https://www.instagram.com/" target="/blank" title="instagram"><FaInstagram className="social-icons" /></a></li>
                        <li><a href="https://twitter.com/HariomO67548076" target="/blank" title="twitter"><FaTwitter className="social-icons" /></a></li>
                    </ul>
                </div>
                <div id="about" className="grid-item name">
                    <p>{this.state.currentText}</p>
                    <p>{this.state.currentInfo}</p>
                    <button>
                        <a href="" download="Resume" target="_blank">DOWNLOAD CV</a>
                    </button>
                </div>
                <div className="grid-item next">
                    <Link to="/skills" ><AiOutlineRight /></Link>
                </div>
            </div>
        )
    }
}

export default About;