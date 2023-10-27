import React, {useState} from 'react'
import './Buttons.css'
import downArrow from './icons/downArrow.png'
import education from './icons/education.png'

function Education() {
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
    <div className='education'>
      <div className='mainButton'>
        <div>
            <img src={education} alt="" />
            <p>Education</p>
        </div>
        <div className='downArrow' onClick={handleVisibility}>
            <img src={downArrow} alt="" />
        </div>
      </div>
      <div className={visibility} >
          <hr />
          <h1>man</h1>
        </div>
    </div>
  )
}

export default Education
