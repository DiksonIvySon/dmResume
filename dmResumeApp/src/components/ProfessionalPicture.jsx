import React, { useState } from 'react'
import './Buttons.css'
import './ProfessionalPicture.css'
import downArrow from './icons/downArrow.png'
import proPicture from './icons/profilePicture.png'
import placeholder from './icons/placeholder-icon.jpg'

function ProfessionalPicture({handlePicture, handleBorderStyle, picture}) {
  const [visibility, setVisibility] = useState("hide-element")
  

  //toggle visibility of the form
  const handleVisibility = () => {
    if (visibility === "hide-element") {
      const newVisibility = "show-element"
      setVisibility(newVisibility)
    }
    else {
      const newVisibility = "hide-element"
      setVisibility(newVisibility)
    }
  }

  return (
    <div className='professionalPicture'>
        <div className='mainButton'>
          <div>
              <img src={proPicture} alt="" />
              <p>Professional Picture</p>
          </div>
          <div className='downArrow' onClick={handleVisibility}>
              <img src={downArrow} alt="" />
          </div>
        </div>
        <div className={visibility} >
          <hr />
          <h1>Picture Border Styles </h1>
          <div className='uploading-pic-container'>
              <div className='upload-buttons'>
                <button onClick={handlePicture}>{picture.buttonText}</button>
                <button>Upload New Picture</button>
              </div>
              <div className='picture-border-style'>
                    <dir className='border-style' >
                        <div className='border-style-1'>
                          <img src={placeholder} alt="" />
                        </div>
                        <h3>Sharp Border</h3>
                    </dir>
                    <dir className='border-style'>
                        <div className='border-style-2'>
                          <img src={placeholder} alt="" />
                        </div>
                        <h3>Smooth Border</h3>
                    </dir>
                    <dir className='border-style'>
                        <div className='border-style-3'>
                          <img src={placeholder} alt="" />
                        </div>
                        <h3>Round Border</h3>
                    </dir>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ProfessionalPicture