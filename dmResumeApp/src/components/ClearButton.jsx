import React from 'react'
import './ClearButton.css'
import { GoTrash } from "react-icons/go";
import { AiFillDiff } from "react-icons/ai";


function ClearButton() {
  return (
    <div className='clearButton'>
      <h1>Here is your resume</h1>
        <div className='clearButton-buttons'>
          <div>
            <button className='button2'>
              <GoTrash />
              <p>Clear Resume</p>
            </button>
          </div>
          <div>
              <button className='button2'>
                <AiFillDiff />
                Load Example
              </button>
          </div>
        </div>
    </div>
  )
}

export default ClearButton