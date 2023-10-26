import React from 'react'
import './Buttons.css'
import downArrow from './icons/downArrow.png'
import personal_Details from './icons/personalDetails.png'

function personalDetails() {
  return (
    <div className='personalDetails mainButton '>
        <div>
            <img src={personal_Details} alt="" />
            <p>Personal Details</p>
        </div>
        <div>
            <img src={downArrow} alt="" />
        </div>
    </div>
  )
}

export default personalDetails