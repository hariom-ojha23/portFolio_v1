import React, { useState } from 'react';
import emailjs from 'emailjs-com';
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

    const sendEmail = (e) => {
        e.preventDefault();

        if(sendMessage())
        {
            emailjs.sendForm('service_o26gbvl', 'template_fn9pjb2', e.target, 'user_IHYiFiTnYWqt4xz7z8U4G')
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully !!  :)");
            }, (error) => {
                console.log(error.text);
            });

            resetField();
        }
    }

    const sendMessage = () => {
        if(Validate(name, mail, msg)) {
            return true;
        }
    };

    const resetField = () => {
        setName('');
        setMail('');
        setMsg('');
    }

    const Validate = (name, email, msg) => {

        const valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if (!valid.test(email))
        {
            alert("You have entered an invalid email address!");
            return (false);
        }
        else if(name === '')
        {
            alert("Your name field is empty!");
            return (false);
        }
        else if(msg === '')
        {
            alert("Your message field is empty!");
            return (false);
        }
        else{
            return(true);
        }
    }

    return (
        <div className="contactContainer">
            <div className="back grid-item">
                <Link to="/achievements" ><AiOutlineLeft className="back-icon" /></Link>
            </div>
            <div className="grid-item-form">
                <div>
                    <h1>Get in touch</h1>
                    <p>if you wanna get in touch, talk to me about a project collaboration or just say hi,</p>
                    <p>fill up the form below or send an email to <a className="mail" href="mailto:hari.om.18659@gmail.com" title="Hari om Ojha">hari.om.18659@gmail.com</a> and ~let's talk</p>
                    <form id="form" onSubmit={sendEmail}>
                        <div className="form-input">
                            <AiOutlineUser className="icon-contact" />
                            <input type="text" placeholder="your name" value={name} onChange={(e) => setName(e.target.value)} name="name" />
                        </div>
                        <div className="form-input">
                            <AiOutlineMail className="icon-contact" />
                            <input type="email" placeholder="your email" value={mail} onChange={(e) => setMail(e.target.value)} name="email" />
                        </div>
                        <div className="form-input">
                            <BsPencil className="msg-contact" />
                            <textarea rows="4" type="text" placeholder="your message" value={msg} onChange={(e) => setMsg(e.target.value)} name="message" />
                        </div>
                        <button type="submit">
                            <FiSend className="icon-contact" />
                            SEND
                        </button>
                    </form>
                    
                </div>
                <div>
                    <h3>Let's get social</h3>
                    <div id="social-btn">
                        <a href="https://www.facebook.com/hari.om.18659/" rel="noreferrer" target="_blank" title="facebook">
                            <button className="social">
                                <FaFacebookF className="social-btn-icon" />
                                FACEBOOK
                            </button>
                        </a>

                        <a href="https://www.linkedin.com/in/hari-om-ojha-0ba62419b/" rel="norefrrrer" target="/blank" title="linkedin">
                            <button className="social">
                                <FaLinkedinIn className="social-btn-icon"  />
                                LINKEDIN
                            </button>
                        </a>

                        <a href="https://github.com/hariom-ojha23/" target="/blank" rel="norefrrrer" title="github">
                            <button className="social">
                                <FaGithub className="social-btn-icon"  />
                                GITHUB
                            </button>
                        </a>

                        <a href="https://www.instagram.com/" target="/blank" rel="norefrrrer" title="instagram">
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