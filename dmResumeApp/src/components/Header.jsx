import React from 'react'
import './Header.css'


function header() {
  return (
    <header className='header section-margin'>
        <div className='logo'>
            <h4>DM</h4>
            <h1>RESUME</h1>
        </div>
        <div className='headerLinks'>
          <a href="">
            <p>Log In</p>
          </a>
          <a href="" >
            <button className='button2'>Build A Resume</button>
          </a>
        </div>

    </header>
  )
}

export default header