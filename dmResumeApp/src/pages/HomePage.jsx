import React from 'react';
import './HomePage.css';
import Footer from '../components/footer.jsx';
import Header from '../components/header.jsx';
import background1 from '../images/background1.jpg';
import cv_image1 from '../images/cv-image1.png';

function HomePage() {
  return (
    <div className='HomePage'>
        <Header />
        <section className='landingPage'>
            <div className='background1'>
                <img src={background1} alt="" />
            </div>
            <div className='landingPage-content section-margin'>
                <div>
                    <h2>Fast. Easy. Effective.</h2>
                    <h1>dmResume. The Best CV Maker Online.</h1>
                    <p>
                        If a sheet of paper represents your entire work life, personality, and skills, 
                        it better be a pretty amazing piece of paper — Let dmResume do the heavy lifting.
                    </p>
                    <button className='button2'>Create your CV</button>
                </div>
                <div className='cv-image1'>
                    <img src={cv_image1} alt="Resume image" />
                </div>
            </div>
        </section>

        
        {/*}<Footer />}{*/}
    </div>
  )
}

export default HomePage