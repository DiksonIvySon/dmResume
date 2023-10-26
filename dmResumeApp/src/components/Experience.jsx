import React from 'react'
import './Buttons.css'
import downArrow from './icons/downArrow.png'
import experience from './icons/experience.png'

function Experience() {
  return (
    <div className='experience mainButton'>
         <div>
            <img src={experience} alt="" />
            <p>Experience</p>
        </div>
        <div>
            <img src={downArrow} alt="" />
        </div>
    </div>
  )
}

export default Experience