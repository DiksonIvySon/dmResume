import React, {useState} from 'react'
import './Buttons.css'
import './Education.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import downArrow from './icons/downArrow.png'
import education from './icons/education.png'

function Education() {
  const [visibility, setVisibility] = useState("hide-element");
  const [educationForm, setEducationForm] = useState("hide-education-form");
  const [educationArray, setEducationArray] = useState([]);
  const [educationInputs, setEducationInputs] = useState({
    id: 0,
    school: "",
    qualification: "",
    startDate: "",
    endDate: "",
    location: ""
  })

  //function to handle input changes
  const handleEducationInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const new_inputs = {...educationInputs, [name]: value};
    setEducationInputs(new_inputs);
  }

  //function to handle form submit
  const handleSubmitEducation = (e) => {
    e.preventDefault()
    const new_educationInputs = {...educationInputs, id: educationArray.length}
    setEducationInputs(new_educationInputs)
    setEducationArray(educationArray => [...educationArray, {educationInputs}])
    console.log(educationInputs)
    console.log(educationArray)
  }

  
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

  //function to handle add education form visibility
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
          <form className={educationForm} onSubmit={handleSubmitEducation}>
              <label>School: <span>Required</span> <br />
                <input
                  type="text" 
                  name='school'
                  value={educationInputs.school}
                  onChange={handleEducationInputs}
                />
              </label>
              <label>Qualification: <span>Required</span> <br />
                <input
                  type="text" 
                  name='qualification'
                  value={educationInputs.qualification}
                  onChange={handleEducationInputs}
                />
              </label>
              <label>Start Date: <span>Recommended</span> <br />
                <input
                  type="number" 
                  name='startDate'
                  value={educationInputs.startDate}
                  onChange={handleEducationInputs}
                />
              </label>
              <label>End Date: <span>Recommended</span> <br />
                <input
                  type="number" 
                  name='endDate'
                  value={educationInputs.endDate}
                  onChange={handleEducationInputs}
                />
              </label>
              <label>Location: <span>Recommended</span> <br />
                <input
                  type="text" 
                  name='location'
                  value={educationInputs.location}
                  onChange={handleEducationInputs}
                />
              </label>
              <div className='form-buttons'>
                  <button type='reset'>Reset</button>
                  <button type='submit'>Add</button>
              </div>
          </form>
        </div>
    </div>
  )
}

export default Education
