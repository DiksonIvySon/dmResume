import React from 'react'
import './Buttons.css'
import trash from './icons/trash.png'


function ClearButton() {
  return (
    <div className='clearButton mainButton'>
        <div>
            <img src={trash} alt="" />
            <p>Clear Resume</p>
        </div>
        <div>
            <button>
                Load Example
            </button>
        </div>
    </div>
  )
}

export default ClearButton