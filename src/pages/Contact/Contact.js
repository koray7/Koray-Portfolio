import React from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
const Contact = () => {

    const formRef = useRef()
    
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service-koray7', 'template_koray7', formRef.current, 'FXpAm2bGSLwoTc7a8')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
                <div className="c-wrapper">
                    <div className="c-left">
                        <h1 className="c-title">
                            Let's Connect!
                        </h1>
                            <div className="c-info">
                                <div className="c-info-item">
                                    <img src="https://freepngimg.com/thumb/gmail/66251-google-icons-computer-mail-suite-email-gmail.png"
                                    alt="" 
                                    className="c-icon"/>
                                    softwarekoray@gmail.com
                                </div>
                                <div className="c-info-item">
                                    <img src="https://4.imimg.com/data4/RF/BD/MY-979637/address-verification-service-500x500.png?w=640"
                                    alt="" 
                                    className="c-icon"/>
                                    1403 Norwalk Ln Apt:#??  Austin, TX 78703
                                </div>
                            </div>
                    </div>
                    <div className="c-right">
                        <p className="c-desc">
                            <b>What's your story?</b> Let's get in touch! Any kind of comments, thoughts, ideas, business, please send me an email, will get back to you as soon as possible.
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input id="input" type="text" placeholder="Name" 
                            name="from_name" />
                            
                            <input id="input" type="text" placeholder="Subject" 
                            name="user_subject" />
                            
                            <input id="input" type="text" placeholder="Email" 
                            name="user_email" />
                            <textarea id="textarea" rows="5" placeholder="Message" 
                            name="message"
                            />
                            <button id="button">Submit</button>
                            {done && " Email sent..!📤"}
                        </form>
                    </div>
                </div>
        </div>
    );
};

export default Contact;