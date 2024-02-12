import React from 'react'
import './Save.css'
import { CiSaveDown2 } from "react-icons/ci";
import { FaDownload } from "react-icons/fa";


function Save() {
  return (
    <div className='save'>
        <div className='saveButtons'>
            <div>
                <button className='button2'>
                <CiSaveDown2 />
                <p>Save</p>
                </button>
            </div>
            <div>
                <button className='button2'>
                    <FaDownload />
                    <p>Download</p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Save