import React from 'react';
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

const Contact = () => {
    return (
        <div className="contactContainer">
            <div className="grid-item">
                <p>backbackbackback</p>
            </div>
            <div className="grid-item-form">
                <div>
                    <h1>Get in touch</h1>
                    <p>if you wanna get in touch, talk to me about a project collaboration or just say hi,</p>
                    <p>fill up the form below or send an email to <a className="mail" href="mailto:hari.om.18659@gmail.com" target="_blank" title="Hari om Ojha">hari.om.18659@gmail.com</a> and ~let's talk</p>
                    <div id="form">
                        <div className="form-input">
                            <AiOutlineUser className="icon-contact" />
                            <input type="text" placeholder="your name" />
                        </div>
                        <div className="form-input">
                            <AiOutlineMail className="icon-contact" />
                            <input type="email" placeholder="your email" />
                        </div>
                        <div className="form-input">
                            <BsPencil className="icon-contact" />
                            <input type="text" placeholder="your message" />
                        </div>
                    </div>
                    <button>
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