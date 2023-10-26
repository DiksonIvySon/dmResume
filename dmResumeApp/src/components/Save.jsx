import React from 'react'
import './Buttons.css'
import save from './icons/save.png'
import download from './icons/download.png'


function Save() {
  return (
    <div className='Save mainButton'>
        <div>
            <img src={save} alt="" />
            <p>Save your Resume</p>
        </div>
        <div>
            <button>
                <div>
                    <img src={download} alt="" />
                </div>
                <div>
                    <p>Download</p>
                </div>
            </button>
        </div>
    </div>
  )
}

export default Save