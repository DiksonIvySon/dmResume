import { useState } from 'react'
import './App.css'
import ResumeSection from './components/ResumeSection.jsx'
import ClearButton from './components/ClearButton.jsx'
import CustomizeButton from './components/CustomizeButton.jsx'
import ProfessionalPicture from './components/ProfessionalPicture.jsx'
import PersonalDetails from './components/PersonalDetails.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Save from './components/Save.jsx'

function App(props) {
  //personal details props.......................................................................................
  const [person, setPerson] = useState({
    fulName: "Dikson Manganye",
    position: "Front-End Developer",
    email: "ivyCode@gmail.com",
    number: "0735367348",
    stayLocation: "Johannesburg",
    linkedIn_link: "https://www.linkedin.com/in/dikson-manganye-a8b773213/",
    portfolioLink: "https://diksonivyson.github.io/My_Portfolio/"
  })

  //professional picture props..................................................................................
  const [picture, setPicture] = useState({
    pictureVisibility: "place-holder",
    buttonText: "Don't Show Picture"
  })

  //function to update the picture state
  const handlePicture = () => {
    if (picture.buttonText === "Don't Show Picture") {
      const new_picture = {...picture, pictureVisibility: "place-holder-hide", buttonText: "Show Picture"};
      setPicture(new_picture);
    }
    else {
      const new_picture = {...picture, pictureVisibility: "place-holder", buttonText: "Don't Show Picture"};
      setPicture(new_picture)
    }
  }

  //handlePersonChange
  const handlePersonChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let newState = {...person, [name]: value };
    setPerson(newState)
   /* setPerson((prev) => {
      return {...prev, [name]: value };
    })*/
  }

  return (
    <main className='app'>
      <div className='main-buttons'>
        <div>
          <ClearButton />
          <CustomizeButton />
          <ProfessionalPicture handlePicture={handlePicture} picture={picture}/>
          <PersonalDetails handlePersonChange={handlePersonChange} person={person}/>
          <Education />
          <Experience />
          <Save />
          <h1>{person.fulName}</h1>
        </div>
      </div>
      <ResumeSection 
            nameProp={person.fulName}
            positionProp={person.position} 
            emailProp={person.email}
            numberProp={person.number}
            locationProp={person.stayLocation}
            linkedIn_linkProp={person.linkedIn_link}
            portfolioLinkProp={person.portfolioLink}
            pictureVisibilityProp={picture.pictureVisibility} 
            onChange={handlePersonChange} />
    </main>
  )
}

export default App
