import React from 'react'
import './Buttons.css'
import downArrow from './icons/downArrow.png'
import education from './icons/education.png'

function Education() {
  return (
    <div className='education mainButton'>
         <div>
            <img src={education} alt="" />
            <p>Education</p>
        </div>
        <div>
            <img src={downArrow} alt="" />
        </div>
    </div>
  )
}

export default Education
