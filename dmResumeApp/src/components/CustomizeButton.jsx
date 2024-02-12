import React, { useState } from 'react';
import './CustomizeButton.css';
import downArrow from '../icons/downArrow.png';
import customize from '../icons/customize.png'; 


function CustomizeButton({handleFontChanges}) {
  const [visibility, setVisibility] = useState("hide-element")
  

  //toggle visibility of the form
  const handleVisibility = () => {
    if (visibility === "hide-element") {
      const newVisibility = "show-element"
      setVisibility(newVisibility)
    }
    else {
      const newVisibility = "hide-element"
      setVisibility(newVisibility)
    }
  }

  return (
    <div className='customizeButton'>
        <div className='mainButton' onClick={handleVisibility}> 
          <div>
              <img src={customize} alt="" />
              <p>Customize Resume</p>
          </div>
          <div className='downArrow'>
              <img src={downArrow} alt="" />
          </div>
        </div>
        <div className={visibility}>
          <hr />
          <div className='fonts-container'>
            <h1>Fonts</h1>
            <div>
                <div className='font helvetica' name='helvetica' onClick={handleFontChanges}>  
                  <h1>Aa</h1>
                  <p>Helvetica</p>
                </div> 
                <div className='font sans-serif' name='sans-serif' onClick={handleFontChanges}> 
                  <h1>Aa</h1>
                  <p>Sans-Serif</p>
                </div>
                <div className='font times-new-roman' name='times-new-roman' onClick={handleFontChanges}>
                  <h1>Aa</h1>
                  <p>Times New Roman</p>
                </div>
                <div className='font arial' name='arial' onClick={handleFontChanges}>
                  <h1>Aa</h1>
                  <p>Arial</p>
                </div>
                <div className='font cursive' name='cursive' onClick={handleFontChanges}> 
                  <h1>Aa</h1>
                  <p>Cursive</p>
                </div>
            </div>
          </div>
          <div className='colors-container'>
              <h1>Colors</h1>
              <div className='color-items'>
                  <div className='color-item'>
                        <div className='color-picker'>
                          <input type="color" value="pink" />
                        </div>
                        <h3>Accent</h3>
                  </div>
                  <div className='color-item'>
                        <div className='color-picker'>
                          <input type="color" value="gray" />
                        </div>
                        <h3>Text</h3>
                  </div>
                  <div className='color-item'>
                        <div className='color-picker'>
                          <input type="color" value="pink" />
                        </div>
                        <h3>Bold Text</h3>
                  </div>
                  <div className='color-item'>
                        <div className='color-picker'>
                          <input type="color" value="pink" />
                        </div>
                        <h3>Headings</h3>
                  </div>
              </div>
          </div>
          <div className='layouts-container'>
            <h1>Layouts</h1>
            <div className='layouts'>
              <div className='horizontal-layout'>
                  <div className='accent'><p>Accent</p></div>
                  <div className='content'></div>
              </div>
              <div className='vertical-layout'>
                  <div className='accent'><p>Accent</p></div>
                  <div className='content'></div>
              </div>
              <div className='switch-layout'>
                  <div className='accent'><p>Accent</p></div>
                  <div className='content'></div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CustomizeButton