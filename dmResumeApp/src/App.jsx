import { useState } from 'react'
import './App.css'
import ResumeSection from './components/ResumeSection.jsx'
import MainButtons from './components/MainButtons.jsx'

function App() {

  return (
    <main className='app'>
      <ResumeSection />
      <MainButtons />
    </main>
  )
}

export default App
