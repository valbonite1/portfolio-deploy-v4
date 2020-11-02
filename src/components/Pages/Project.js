import React, { useEffect, useRef, useState } from 'react';
import './Project.css';
import { TweenMax, TimelineLite, Power3 } from 'gsap';
import loadImg from '../../public/img/loading-projects.png';

function Project() {

    let projectLoad = useRef(null);    
    let load = useRef(null); 
    let loadText = useRef(null);


    useEffect(() => {

        let tl = new TimelineLite();

        TweenMax.to(projectLoad, {duration: 0, css: {visibility: 'visible'}});
        tl.from(load, {duration: 1.2, opacity: 0, y: 100, ease: "Power3.easeOut" }, "Start")
        tl.to(loadText, {duration: 0.5, alpha:0, repeatDelay:.1, repeat:-.1, yoyo:true})
        tl.play();

    }, []);


    return(
        <>
        <div className="project-container" ref={el => projectLoad = el}>
            <div className="project-wrapper">
                <div className="loading-container" ref={el => load = el}>
                    <img src={loadImg} alt="loading" className="load-img"></img>
                </div>
                <div className="load-wrapper"  ref={el => loadText = el}>
                    <div className="wrapper">
                        <h1 className="loading-text">Processing...<span>&nbsp;</span></h1>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Project;