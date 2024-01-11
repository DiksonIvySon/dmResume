import React, {useState} from 'react'
import './Buttons.css'
import './Experience.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import downArrow from '../icons/downArrow.png'
import experience from '../icons/experience.png'

function Experience() {
  const [visibility, setVisibility] = useState("hide-element");
  const [experienceForm, setExperienceForm] = useState("hide-experience-form");

  //the experience input states
  const [company, setCompany] = useState();
  const [position, setPosition] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [location, setLocation] = useState();

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

   //function to handle add experience
   const handleAddExperience = () => {
    if (experienceForm === "hide-experience-form") {
      const newVisibility = "show-experience-form"
      setExperienceForm(newVisibility)
    }
    else {
      const newVisibility = "hide-experience-form"
      setExperienceForm(newVisibility)
    }
  }

  return (
    <div className='experience'>
      <div className='mainButton'>
        <div>
            <img src={experience} alt="" />
            <p>Experience</p>
        </div>
        <div className='downArrow' onClick={handleVisibility}>
            <img src={downArrow} alt="" />
        </div>
      </div>
      <div className={visibility} >
          <hr />
          <button onClick={handleAddExperience}><FontAwesomeIcon icon={faPlus} /> Add experience </button>
          <form className={experienceForm}>
              <label>Company: <span>Required</span> <br />
                <input
                  type="text" 
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </label>
              <label>Position: <span>Required</span> <br />
                <input
                  type="text" 
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                />
              </label>
              <label>Start Date: <span>Recommended</span> <br />
                <input
                  type="number" 
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </label>
              <label>End Date: <span>Recommended</span> <br />
                <input
                  type="number" 
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </label>
              <label>Location: <span>Recommended</span> <br />
                <input
                  type="text" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </label>
              <div className='form-buttons'>
                  <button type='reset'>Reset</button>
                  <button type='button'>Add</button>
              </div>
          </form>
        </div>
    </div>
  )
}

export default Experience