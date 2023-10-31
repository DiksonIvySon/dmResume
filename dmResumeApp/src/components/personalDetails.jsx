import React, {useState} from 'react'
import './Buttons.css'
import './PersonalDetails.css'
import downArrow from './icons/downArrow.png'
import personal_Details from './icons/personalDetails.png'
import ResumeSection from './ResumeSection.jsx'

function PersonalDetails({handlePersonChange, person}) {
const [visibility, setVisibility] = useState("hide-element");
/*const [person, setPerson] = useState({
    fulName: "Dikson",
    position: "Front-End Dev",
    email: "ivyCode@gmail.com",
    number: "0735367348",
    stayLocation: "J"
  })

  console.log(person.position)

  //handlePersonChange
  const handlePersonChange = (e) => { 
    const name = e.target.name;
    const value = e.target.value;
    let newState = {...person, [name]: value };
    setPerson(newState)
    ResumeSection
    /* setPerson((prev) => {
       return {...prev, [name]: value };
     })*/
    
  //}
  

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
    <div className='personalDetails'>
      <div className='mainButton'>
        <div>
            <img src={personal_Details} alt="" />
            <p>Personal Details</p>
        </div>
        <div className='downArrow' onClick={handleVisibility}>
            <img src={downArrow} alt="" />
        </div>
      </div>
      <div className={visibility} >
          <hr />
          <form className='personalDetails-form'>
            <label>Full Name: <span>Required</span> <br />
              <input
                type="text" 
                name='fulName'
                value={person.fulName}
                onChange={handlePersonChange}
              />
            </label>
            <label>Position: <span>Recommended</span> <br />
              <input
                type="text" 
                name='position'
                value={person.position}
                onChange={handlePersonChange}
              />
            </label>
            <label>E-mail: <span>Required</span> <br />
              <input
                type="email" 
                name='email'
                value={person.email}
                onChange={handlePersonChange}
              />
            </label>
            <label>Contact Number: <span>Required</span> <br />
              <input
                type="number" 
                name='number'
                value={person.number}
                onChange={handlePersonChange}
              />
            </label>
            <label>stayLocation: <span>Recommended</span> <br />
              <input
                type="text" 
                name='stayLocation'
                value={person.stayLocation}
                onChange={handlePersonChange}
              />
            </label>
            <div className='form-buttons'>
                <button type='reset'>Reset</button>
                <button type='button' onClick={handleVisibility}>Done</button>
            </div>
          </form>
      </div>
    </div>
  )
}

export default PersonalDetails