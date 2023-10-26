import React from 'react'
import './Buttons.css'
import downArrow from './icons/downArrow.png'
import customize from './icons/customize.png'


function CustomizeButton() {
  return (
    <div className='CustomizeButton'>
        <div className='mainButton'>
          <div>
              <img src={customize} alt="" />
              <p>Customize Resume</p>
          </div>
          <div>
              <img src={downArrow} alt="" />
          </div>
        </div>
    </div>
  )
}

export default CustomizeButton