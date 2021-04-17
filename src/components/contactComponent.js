import React, { useState } from 'react';
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai"
import { BsPencil } from "react-icons/bs";
import { FiSend } from 'react-icons/fi';
import 
{ 
    FaFacebookF, 
    FaLinkedinIn, 
    FaInstagram, 
    FaGithub  
} from "react-icons/fa";

import { AiOutlineLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Contact = () => {

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [msg, setMsg] = useState('');

    const sendMessage = () => {
        console.log(name);
        console.log(mail);
        console.log(msg);

        setName('');
        setMail('');
        setMsg('');
    };

    return (
        <div className="contactContainer">
            <div className="back grid-item">
                <Link to="/" ><AiOutlineLeft className="back-icon" /></Link>
            </div>
            <div className="grid-item-form">
                <div>
                    <h1>Get in touch</h1>
                    <p>if you wanna get in touch, talk to me about a project collaboration or just say hi,</p>
                    <p>fill up the form below or send an email to <a className="mail" href="mailto:hari.om.18659@gmail.com" target="_blank" title="Hari om Ojha">hari.om.18659@gmail.com</a> and ~let's talk</p>
                    <div id="form">
                        <div className="form-input">
                            <AiOutlineUser className="icon-contact" />
                            <input type="text" placeholder="your name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-input">
                            <AiOutlineMail className="icon-contact" />
                            <input type="email" placeholder="your email" value={mail} onChange={(e) => setMail(e.target.value)} />
                        </div>
                        <div className="form-input">
                            <BsPencil className="icon-contact" />
                            <input type="text" placeholder="your message" value={msg} onChange={(e) => setMsg(e.target.value)} />
                        </div>
                    </div>
                    <button onClick={() => sendMessage()}>
                        <FiSend className="icon-contact" />
                        SEND
                    </button>
                </div>
                <div>
                    <h3>Let's get social</h3>
                    <div id="social-btn">
                        <a href="https://www.facebook.com/hari.om.18659/" target="_blank" title="facebook">
                            <button className="social">
                                <FaFacebookF className="social-btn-icon" />
                                FACEBOOK
                            </button>
                        </a>

                        <a href="https://www.linkedin.com/in/hari-om-ojha-0ba62419b" target="/blank" title="linkedin">
                            <button className="social">
                                <FaLinkedinIn className="social-btn-icon"  />
                                LINKEDIN
                            </button>
                        </a>

                        <a href="https://github.com/hariom-ojha23" target="/blank" title="github">
                            <button className="social">
                                <FaGithub className="social-btn-icon"  />
                                GITHUB
                            </button>
                        </a>

                        <a href="https://www.instagram.com/" target="/blank" title="instagram">
                            <button className="social">
                                <FaInstagram className="social-btn-icon"  />
                                INSTAGRAM
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;