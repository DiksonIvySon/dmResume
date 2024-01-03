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

  //Font state from the customization component 
  const [font, setFont] = useState("Helvetica");

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
    buttonText: "Don't Show Picture",
    //borderStyle: "sharp-border"
  })

  //education states............................................................................................
  const [educationArray, setEducationArray] = useState([]);
  const [educationInputs, setEducationInputs] = useState({
    id: 0,
    school: "",
    qualification: "",
    startDate: "",
    endDate: "",
    location: ""
  })

  //function to handle font changes
  const handleFontChanges = (e) => {
    const newFont = e.target.name;
    setFont(newFont);
    console.log(newFont)
    console.log(font)
  }

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
/*
  const handleBorderStyle = (selectedStyle) => {
    const new_borderStyle = {...picture, borderStyle: selectedStyle};
    setPicture(new_borderStyle)
  }*/

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
          <CustomizeButton handleFontChanges={handleFontChanges}/>
          <ProfessionalPicture handlePicture={handlePicture} picture={picture}/>
          <PersonalDetails handlePersonChange={handlePersonChange} person={person}/>
          <Education handleEducationInputs={handleEducationInputs} handleSubmitEducation={handleSubmitEducation} educationInputs={educationInputs}/>
          <Experience />
          <Save />
        </div>
      </div>
      <ResumeSection
            fontProp={font}
            personProp={person}
            pictureProp={picture} 
            educationArrayProp={educationArray}
            onChange={handlePersonChange} />
    </main>
  )
}

export default App
