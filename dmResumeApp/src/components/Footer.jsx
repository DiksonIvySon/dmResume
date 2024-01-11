import React from 'react'
import './Footer.css'
import github from '../icons/github.svg';
import linkedin from '../icons/linkedin.svg'

function Footer() {
  return (
    <footer className='footer'>
        <div className="footer-icons">
            <a target="_blank" href="https://github.com/DiksonIvySon">
                <img src={github} alt="" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/dikson-manganye-a8b773213/">
                <img src={linkedin} alt="" />
            </a>
        </div>
        <p>
            Copyright © 2023 <a target="_blank" 
                                href="https://diksonivyson.github.io/My_Portfolio/" 
                                className="web-author"
                             >Dikson Manganye</a>
                             . All rights reserved
        </p>
        <p>
            The intelligent Resume builder app to help you create a professional resume or Curriculum vitae for job application in few minutes.
        </p>
    </footer>
  )
}

export default Footer