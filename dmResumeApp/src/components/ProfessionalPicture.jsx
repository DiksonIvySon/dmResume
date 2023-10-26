import React from 'react'
import './Buttons.css'
import downArrow from './icons/downArrow.png'
import proPicture from './icons/profilePicture.png'

function ProfessionalPicture() {
  return (
    <div className='professionalPicture mainButton'>
        <div>
            <img src={proPicture} alt="" />
            <p>Professional Picture</p>
        </div>
        <div>
            <img src={downArrow} alt="" />
        </div>
    </div>
  )
}

export default ProfessionalPicture