import React, { useEffect, useRef } from 'react';
import './Contact.css';
import emailjs from "emailjs-com";
import { TweenMax, TimelineLite, Power3 } from 'gsap';



function Contact() {

    let contactLoad = useRef(null);

    useEffect(() => {

        let tl = new TimelineLite();

        TweenMax.to(contactLoad, 0, {css: {visibility: 'visible'}});
        tl.from(".contact-wrapper", .8, {opacity: 0, x:320, ease: Power3.easeout, delay: 0.2}, 'start')

    }, []);

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'contact_template', e.target, 'user_WlPTH9fHscVkiu8oS6O8k')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div>
            <div className="contact-container" ref={el => contactLoad= el}>
                <div className="contact-wrapper">
                    <form onSubmit={sendEmail}>
                        <div className="form-container">
                            <div className="form-header">
                                <h2>Contact Me</h2>
                                <h5>Feel free to connect with me. <br></br>I am excited to work with you!</h5>
                            </div>
                            <div className="input-wrap">
                                <input type="text" className="form-control input-control" placeholder="Name" name="name"/>
                            </div>
                            <div className="input-wrap">
                                <input type="email" className="form-control input-control" placeholder="Email Address" name="email"/>
                            </div>
                            <div className="input-wrap">
                                <input type="text" className="form-control input-control" placeholder="Subject" name="subject"/>
                            </div>
                            <div className="input-wrap">
                                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                            </div>
                            <div className="input-wrap input-control">
                                <input type="submit" className="btn-submit" value="Send Message"></input>
                            </div>
                        </div>
                        
                    </form>
                    <div className="svg-container">
                        <img src="/campaign_launch.png"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;