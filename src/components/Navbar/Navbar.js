import React, { useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../../public/img/white-logo.png';
import { TweenMax } from 'gsap';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';
import * as ImIcons from 'react-icons/im';

function Navbar() {

let nav = useRef(null);

  useEffect(() => {

    TweenMax.to(nav, 0, {css: {visibility: 'visible'}});
  })

    return (
          <div >
            <nav className="navbar" ref={el => nav = el} >
              <ul className="navbar-nav" id="menu">
                  <Link to="/" className="nav-link">
                    <li className="nav-item"><img src={logo} className="logo"/></li>
                  </Link>
                  <Link to="/" className="nav-link">
                    <li className="nav-item"><AiIcons.AiOutlineHome className="icons"/><span className="link-text">HOME</span></li>
                  </Link>
                  <Link to="/about" className="nav-link">
                    <li className="nav-item"><BsIcons.BsPerson className="icons" /><span className="link-text">ABOUT</span></li>
                  </Link>
                  <Link to="/skills" className="nav-link">
                    <li className="nav-item"><ImIcons.ImStack className="icons" /><span className="link-text">SKILLS</span></li>
                  </Link>
                  <Link to="/project" className="nav-link">
                    <li className="nav-item"><BiIcons.BiBookBookmark className="icons" /><span className="link-text">PROJECTS</span></li>
                  </Link>
                  <Link to="/contact" className="nav-link">
                    <li className="nav-item"><RiIcons.RiContactsLine className="icons contact-icon" /><span className="link-text">CONTACT</span></li>
                  </Link>
              </ul>
            </nav>
          </div>
    )
}

export default Navbar;
