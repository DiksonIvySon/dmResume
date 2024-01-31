import React from 'react';
import './Footer.css';
import github from '../icons/github.svg';
import linkedin from '../icons/linkedin.svg';
import stars_image from '../images/tp_stars_black.svg';
import logo_icon from '../images/logo-icon.png';

function Footer() {
  return (
    <footer className='footer'>
        <div className='section-margin'>
            <div>
                <div className='logo'>
                    <h4>DM</h4>
                    <h1>RESUME</h1>
                    <img className='logo-icon' src={logo_icon} alt="Logo icon" />
                </div>
                <div className='stars-image'>
                    <img src={stars_image} alt="stars image" />
                </div>
                <div className="footer-icons">
                    <a target="_blank" href="https://github.com/DiksonIvySon">
                        <img src={github} alt="" />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/dikson-manganye-a8b773213/">
                        <img src={linkedin} alt="" />
                    </a>
                </div>
            </div>
            <div className='footer-links'>
                <h3>
                    Build Your Resume
                </h3>
                <div>
                    <a href="">Basic Resume Examples</a>
                    <a href="">How To Write a Resume</a>
                    <a href="">Resume Builder App</a>
                    <a href="">Resume Examples</a>
                    <a href="">Resume Templates</a>
                </div>
            </div>
            <div className='footer-links'>
                <h3>
                    Career Resources
                </h3>
                <div>
                    <a href="">Cover Letter Examples</a>
                    <a href="">How To Write a Cover Letter</a>
                    <a href="">Job Search Resource Center</a>
                    <a href="">Thank You Note Examples</a>
                </div>
            </div>
            <div className='footer-links'>
                <h3>
                    Quick Links
                </h3>
                <div>
                    <a href="">Create your resume</a>
                    <a href="#time">Time needed</a>
                    <a href="#on-the-go">Create on the go</a>
                    <a href="#steps-guide">Steps guide</a>
                    <a href="#suggestions">About suggestions</a>
                </div>
            </div>
        </div>

        <hr className='section-margin'/>
        <p className='footer-copyright section-margin'>
            Copyright © 2023 <a target="_blank" 
                                href="https://diksonivyson.github.io/My_Portfolio/" 
                                className="web-author"
                            >Dikson Manganye</a>
                            . All rights reserved
        </p>
    </footer>
  )
}

export default Footer