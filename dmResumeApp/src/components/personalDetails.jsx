import React, {useState} from 'react'
import './Buttons.css'
import './PersonalDetails.css'
import downArrow from './icons/downArrow.png'
import personal_Details from './icons/personalDetails.png'

function personalDetails() {
  const [visibility, setVisibility] = useState("hide-element");
  const [name, setName] = useState("Dikson");
  const [position, setPosition] = useState("Front-End Dev");
  const [email, setEmail] = useState("ivyCodes@gmail");
  const [number, setNumber] = useState("0750638263");
  const [location, setLocation] = useState("Joburg")

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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>Position: <span>Required</span> <br />
              <input
                type="text" 
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </label>
            <label>E-mail: <span>Required</span> <br />
              <input
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>Contact Number: <span>Required</span> <br />
              <input
                type="number" 
                value={number}
                onChange={(e) => setNumber(e.target.value)}
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
                <button type='button'>Done</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default personalDetails