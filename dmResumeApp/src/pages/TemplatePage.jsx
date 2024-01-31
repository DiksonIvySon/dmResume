import React from 'react';
import './TemplatePage.css';
import Footer from '../components/footer';
import Header from '../components/header';

import handshake from '../images/handshake.jpg';
import cv_image2 from '../images/cv-image2.webp';
import cv_image3 from '../images/cv-image3.webp';
import cv_image4 from '../images/cv-image4.webp';

function TemplatePage() {
  return (
    <div className='templatePage'>
        <Header />
        <section className='templatePage-landing-page'>
            <div className='banner'>
                <img src={handshake} alt="handshake banner background" />
                <h1>Choose a template</h1>
            </div>
            <div className='intro-templates'>
                <div>
                    <img src={cv_image2} alt="cv image" />
                    <div className='smaller-sized left'>
                        <img src={cv_image4} alt="cv image" />
                    </div>
                    <div className='smaller-sized right'>
                        <img src={cv_image3} alt="cv image" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default TemplatePage