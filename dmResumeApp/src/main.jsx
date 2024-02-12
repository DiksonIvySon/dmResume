import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Footer from './components/footer.jsx'
import Header from './components/header.jsx'
import './index.css'
import HomePage from './pages/HomePage.jsx';
import ResumePage from './pages/ResumePage.jsx'
import TemplatePage from './pages/TemplatePage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
