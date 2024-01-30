import React from 'react';
import './Footer.css';
import github from '../icons/github.svg';
import linkedin from '../icons/linkedin.svg';
import stars_image from '../images/tp_stars_black.svg';
import logo_icon from '../images/logo-icon.png';

function Footer() {
  return (
    <footer className='footer'>
        <div>
            <div>
                <div className='logo'>
                    <h4>DM</h4>
                    <h1>RESUME</h1>
                    <img className='logo-icon' src={logo_icon} alt="Logo icon" />
                </div>
                <div>
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
            <div>
                <h2>
                    Build Your Resume
                </h2>
                <a href="">Basic Resume Examples</a>
                <a href="">How To Write a Resume</a>
                <a href="">Resume Builder App</a>
                <a href="">Resume Examples</a>
                <a href="">Resume Templates</a>
            </div>
        </div>

        <hr />
        <p>
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