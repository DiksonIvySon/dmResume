import React from 'react'
import './ResumeSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot, faLink } from '@fortawesome/free-solid-svg-icons'
import placeholder from './icons/placeholder-icon.jpg'
import PersonalDetails from './PersonalDetails.jsx'

function ResumeSection({nameProp, positionProp, emailProp, numberProp, locationProp, linkedIn_linkProp, portfolioLinkProp, pictureVisibilityProp, onChange}) {
  return (
    <div className='resume-section'>
        <div className='resume-header'>
          <div className={pictureVisibilityProp}>
            <img src={placeholder} alt="resume picture" />
            <h1>{pictureVisibilityProp}</h1>
          </div>
          <div className='personal-info-container'>
              <div className='display-personal-info'>
                  <h1 className='display-full-name' onChange={onChange}>{nameProp}</h1>
                  <p className='display-position'>{positionProp}</p>
              </div>
              <div className='display-contact-info'>
                  <div className='display-email display-content'>
                      <FontAwesomeIcon icon={faEnvelope} />
                      <p>{emailProp}</p>
                  </div>
                  <div className='display-phone-number display-content'>
                      <FontAwesomeIcon icon={faPhone} />
                      <p>{numberProp}</p>
                  </div>
                  <div className='display-location display-content'>
                      <FontAwesomeIcon icon={faLocationDot} />
                      <p>{locationProp}</p>
                  </div>
              </div>
              <div className='personal-links'>
                  <div className=''>
                      <a target='_blank' href={linkedIn_linkProp}>
                        <FontAwesomeIcon icon={faLink} />
                        {linkedIn_linkProp}
                      </a>
                  </div>
                  <div className=''>
                      <a target='_blank' href={portfolioLinkProp}>
                        <FontAwesomeIcon icon={faLink} />
                        {portfolioLinkProp}
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