import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'
import logo_icon from '../images/logo-icon.png';


function header() {
  return (
    <header className='header section-margin'>
        <div className='logo'>
            <h4>DM</h4>
            <h1>RESUME</h1>
            <img className='logo-icon' src={logo_icon} alt="Logo icon" />
        </div>
        <div className='headerLinks'>
          <a href="">
            <p>Log In</p>
          </a>
          <a href="" >
            <Link to="/templatesPage">
              <button className='button2'>Build A Resume</button>
            </Link>
          </a>
        </div>

    </header>
  )
}

export default header