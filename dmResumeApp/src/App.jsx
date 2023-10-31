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
  //personal details props.................................................................................................................
  const [person, setPerson] = useState({
    fulName: "Dikson Manganye",
    position: "Front-End Developer",
    email: "ivyCode@gmail.com",
    number: "0735367348",
    stayLocation: "Johannesburg"
  })

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
          <ProfessionalPicture />
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
            locationProp={person.stayLocation} onChange={handlePersonChange} />
    </main>
  )
}

export default App
