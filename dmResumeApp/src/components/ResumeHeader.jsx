import React from 'react'
import { Link } from "react-router-dom";
import './ResumeHeader.css'
import logo_icon from '../images/logo-icon.png';


function resumeHeader() {
  return (
    <header className='resumeHeader section-margin'>
        <div className='logo'>
            <h4>DM</h4>
            <h1>RESUME</h1>
            <img className='logo-icon' src={logo_icon} alt="Logo icon" />
        </div>
        <div className='headerLinks'>
          <a href="">
            <p>Log In</p>
          </a>
          <Link to="/">
            <button className='button2'>Back To Home</button>
          </Link>
        </div>

    </header>
  )
}

export default resumeHeader