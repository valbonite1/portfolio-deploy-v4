import React, { useEffect, useRef } from 'react';
import './Contact.css';
import emailjs from "emailjs-com";
import { TweenMax, Power3, gsap } from 'gsap/dist/gsap';
import formImg from '../../public/img/campaign_launch.png';



function Contact() {

    let tl = new gsap.timeline();

    let contactLoad = useRef(null);
    let formLoad = useRef(null);


    useEffect(() => {

        TweenMax.to(contactLoad, 0, {css: {visibility: 'visible'}});
        tl.from(formLoad, {opacity: 0, duration: 0.8, x:320, ease: Power3.easeout, delay: 0.2});

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
    //

    return(
        <div>
            <div className="contact-container" ref={el => contactLoad = el} >
                <div className="contact-wrapper" ref={el => formLoad = el}>
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
                        <img src={formImg} alt="rocket email"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;