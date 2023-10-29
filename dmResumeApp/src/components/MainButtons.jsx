import React from 'react'
import './MainButtons.css'
import ClearButton from './ClearButton.jsx'
import CustomizeButton from './CustomizeButton.jsx'
import ProfessionalPicture from './ProfessionalPicture.jsx'
import PersonalDetails from './PersonalDetails.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'
import Save from './Save.jsx'

function MainButtons() {
  return (
    <div className='main-buttons'>
        <ClearButton />
        <CustomizeButton />
        <ProfessionalPicture />
        <PersonalDetails />
        <Education />
        <Experience />
        <Save />
    </div>
  )
}

export default MainButtons