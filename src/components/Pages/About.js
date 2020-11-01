import React, { useEffect, useRef } from 'react';
import './About.css';
import gradpic from '../../public/img/BONITE.png';
import { TweenMax, TimelineLite, Power3 } from 'gsap';


function About() {

let aboutPage = useRef(null);
//ABOUT TEXT
let about = useRef(null);
//ABOUT DESC
let button = useRef(null);

//GRAD PIC

let grad = useRef(null);



    useEffect(() => {

        let tl = new TimelineLite();

        const aboutMe = about.firstElementChild;
        const firstLine = aboutMe.nextSibling;
        const secondLine = firstLine.nextSibling;
        const thirdLine = secondLine.nextSibling;

        TweenMax.to(aboutPage, 0, {css: {visibility: 'visible'}});
        tl.staggerFrom([firstLine, secondLine, thirdLine, button], .8, {opacity: 0, x: -20, ease: Power3.easeout}, 0.2, 'start');
        tl.from(grad, .8, {opacity: 0, y:120, ease: Power3.easeout, delay: 0.7}, 'start')

    }, []);


    return(
        <div className="about-container" ref={el => aboutPage = el}>
            <div className="about-heading">
                <div className="about-text-container" ref={el => about = el}>
                    <h1 className="about-text">About Me</h1>
                    <p className="about-text">I am Val Bonite. I recently graduated Cum Laude from the University of the Philippines-Diliman, with a bachelor's degree in Architecture.</p>
                    <p className="about-text">I am a self-taught front-end developer. My passion for design and interest in programming has paved an outlook towards a software development career.</p>
                    <p className="about-text">I am keen to detail, while providing simple but effective designs. </p>
                    <div className="btn-container" ref={el => button = el}>
                        <a href="https://www.dropbox.com/s/gc2oo43nkna5z6l/BONITE_VAL_CV_IT.pdf?dl=0" target="_blank">
                            <button type="submit" value="submit" className="btn-dark">RESUME</button>
                        </a>
                    </div>
                </div>

                <div className="grad-container" ref={el => grad = el}>
                    <img src={gradpic} alt="avatar"  className="grad-img" />
                </div>
            </div>
        </div>
    )
}

export default About;