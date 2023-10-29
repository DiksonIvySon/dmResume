import React, {useState} from 'react'
import './Buttons.css'
import './Education.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import downArrow from './icons/downArrow.png'
import education from './icons/education.png'

function Education() {
  const [visibility, setVisibility] = useState("hide-element");
  const [educationForm, setEducationForm] = useState("hide-education-form")

  //the education input states
  const [school, setSchool] = useState();
  const [qualification, setQualification] = useState();
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

  //function to handle add education
  const handleAddEducation = () => {
    if (educationForm === "hide-education-form") {
      const newVisibility = "show-education-form"
      setEducationForm(newVisibility)
    }
    else {
      const newVisibility = "hide-education-form"
      setEducationForm(newVisibility)
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
          <button onClick={handleAddEducation}><FontAwesomeIcon icon={faPlus} /> Add Education </button>
          <form className={educationForm}>
              <label>School: <span>Required</span> <br />
                <input
                  type="text" 
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                />
              </label>
              <label>Qualification: <span>Required</span> <br />
                <input
                  type="text" 
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
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

export default Education
