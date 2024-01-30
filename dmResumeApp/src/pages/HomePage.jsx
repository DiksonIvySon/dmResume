import React from 'react';
import './HomePage.css';
import Footer from '../components/footer.jsx';
import Header from '../components/header.jsx';
import background1 from '../images/background1.jpg';
import cv_image1 from '../images/cv-image1.png';
import cv_person1 from '../images/cv-person.webp'; 
import cv_person2 from '../images/cv-person2.webp'; 
import arrow_icon from '../images/arrow.png';

function HomePage() {
  return (
    <div className='homePage'>
        <Header />
        <section className='landingPage'>
            <div className='background1'>
                <img src={background1} alt="" />
            </div>
            <div className='landingPage-content section-margin'>
                <div>
                    <h2>Fast. Easy. Effective.</h2>
                    <h1>dmResume. The Best Online Resume Builder.</h1>
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
        <section className='time-section section-margin'>
            <h1>Create your winning resume in just 15 minutes</h1>
            <div className='time-section-content'>
                <div className='cv-person1'>
                    <img src={cv_person1} alt="Resume image" />
                </div>
                <div>
                    <p>
                        Our online resume builder offers a quick and easy way to create your professional resume from 
                        over 30 design templates. Create a resume using our AI-powered online resume wizard, plus take 
                        advantage of expert suggestions and customizable modern and professional resume templates. 
                        Free users have access to our easy-to-use tool and TXT file downloads.
                    </p>
                    <div className='list-item'>
                        <img src={arrow_icon} alt="arrow icon" />
                        <p>Easier and faster than a conventional editor</p>
                    </div>
                    <div className='list-item'>
                        <img src={arrow_icon} alt="arrow icon" />
                        <p>Advice of professionals to get hired faster!</p>
                    </div>
                    <div className='list-item'>
                        <img src={arrow_icon} alt="arrow icon" />
                        <p>Great design and you save time!</p>
                    </div>
                    <div className='list-item'>
                        <img src={arrow_icon} alt="arrow icon" />
                        <p>Follow expert tips and examples</p>
                    </div>
                    <div className='list-item'>
                        <img src={arrow_icon} alt="arrow icon" />
                        <p>Work on the go!</p>
                    </div>
                </div>
            </div>
        </section>

        
        {/*}<Footer />}{*/}
    </div>
  )
}

export default HomePage