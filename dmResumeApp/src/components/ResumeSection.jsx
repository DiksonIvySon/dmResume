import React from 'react'
import './ResumeSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot, faLink } from '@fortawesome/free-solid-svg-icons'
import placeholder from './icons/placeholder-icon.jpg'
import PersonalDetails from './PersonalDetails.jsx'

function ResumeSection({personProp, pictureProp, onChange}) {
  return (
    <div className='resume-section'>
        <div className='resume-header'>
          <div className={pictureProp.pictureVisibility}>
            <img src={placeholder} alt="resume picture" />
          </div>
          <div className='personal-info-container'>
              <div className='display-personal-info'>
                  <h1 className='display-full-name' >{personProp.fulName}</h1>
                  <p className='display-position'>{personProp.position}</p>
              </div>
              <div className='display-contact-info'>
                  <div className='display-email display-content'>
                      <FontAwesomeIcon icon={faEnvelope} />
                      <p>{personProp.email}</p>
                  </div>
                  <div className='display-phone-number display-content'>
                      <FontAwesomeIcon icon={faPhone} />
                      <p>{personProp.number}</p>
                  </div>
                  <div className='display-location display-content'>
                      <FontAwesomeIcon icon={faLocationDot} />
                      <p>{personProp.stayLocation}</p>
                  </div>
              </div>
              <div className='personal-links'>
                  <div className=''>
                      <a target='_blank' href={personProp.linkedIn_link}>
                        <FontAwesomeIcon icon={faLink} />
                        {personProp.linkedIn_link}
                      </a>
                  </div>
                  <div className=''>
                      <a target='_blank' href={personProp.portfolioLink}>
                        <FontAwesomeIcon icon={faLink} />
                        {personProp.portfolioLink}
                      </a>
                  </div>
              </div>
          </div>
        </div>
        <div className='display-info'></div>
    </div>
  )
}

export default ResumeSection