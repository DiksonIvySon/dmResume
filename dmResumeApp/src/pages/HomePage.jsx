import React from 'react';
import './HomePage.css';
import Footer from '../components/footer.jsx';
import Header from '../components/header.jsx';
import background1 from '../images/background1.jpg';
import cv_image1 from '../images/cv-image1.png';
import cv_person1 from '../images/cv-person.webp'; 
import cv_person2 from '../images/cv-person2.webp'; 
import arrow_icon from '../images/arrow.png';
import step1 from '../images/step1.webp'; 
import step2 from '../images/step2.webp';
import step3 from '../images/step3.webp';
import process_gif from '../images/process-gif.gif';
import ai_gen from '../images/ai-gen.webp';

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
                        <p>Easier and faster than a conventional editor.</p>
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
                        <p>Follow expert tips and examples.</p>
                    </div>
                    <div className='list-item'>
                        <img src={arrow_icon} alt="arrow icon" />
                        <p>Work on the go!</p>
                    </div>
                </div>
            </div>
        </section>
        <section className='time-section section-margin'>
            <div className='time-section-content'>
                <div>
                    <h1>Create or update your resume on the go!</h1>
                    <div className='center-text'>
                        <div className='list-item'>
                            <img src={arrow_icon} alt="arrow icon" />
                            <p>Quickly make stunning resumes in just a few minutes.</p>
                        </div>
                        <div className='list-item'>
                            <img src={arrow_icon} alt="arrow icon" />
                            <p>Writing your resume couldn't be easier with our step-by-step guidance!</p>
                        </div>
                        <div className='list-item'>
                            <img src={arrow_icon} alt="arrow icon" />
                            <p>Pick from a range of styles to make your resume shine!</p>
                        </div>
                        <div className='list-item'>
                            <img src={arrow_icon} alt="arrow icon" />
                            <p>Create, edit, and send resumes from your laptop, tablet or phone.</p>
                        </div>
                    </div>
                </div>
                <div className='cv-person1'>
                    <img src={cv_person2} alt="Resume image" />
                </div>
            </div>
        </section>
        <section className='steps-section'>
            <div className='steps-section-container'>
                <div>
                    <h1>Step 1</h1>
                    <div className='step-image'>
                        <img src={step1} alt="step image" />
                    </div>
                    <h2>Choose a template</h2>
                    <p>Choose a suitable CV from our template library.</p>
                </div>
                <div>
                    <h1>Step 2</h1>
                    <div className='step-image'>
                        <img src={step2} alt="step image" />
                    </div>
                    <h2>Fill in your details</h2>
                    <p>Type your information and also look at the suggestions for help.</p>
                </div>
                <div>
                    <h1>Step 3</h1>
                    <div className='step-image'>
                        <img src={step3} alt="step image" />
                    </div>
                    <h2>Customize your document.</h2>
                    <p>Make it truly yours. Uniqueness in a few clicks.</p>
                </div>
            </div>  
        </section>
        <section className='time-section section-margin'>
            <h1>Now, AI suggests content for you, give it a try!</h1>
            <div className='time-section-content'>
                <div className='cv-person1'>
                    <img src={process_gif} alt="process gif" />
                </div>
                <div>
                    <div className='cv-person1'>
                        <img src={ai_gen} alt="AI generator image" />
                    </div>
                    <p>
                        Enter your profession in the search bar and choose from the tailored results 
                        recommended by AI (Artificial Intelligence).
                    </p>
                    <div className='list-item'>
                        <img src={arrow_icon} alt="arrow icon" />
                        <p>Developed by ChatGPT.</p>
                    </div>
                    <div className='list-item'>
                        <img src={arrow_icon} alt="arrow icon" />
                        <p>Suggestions in seconds.</p>
                    </div>
                    <div className='list-item'>
                        <img src={arrow_icon} alt="arrow icon" />
                        <p>Natural language.</p>
                    </div>
                    <div className='list-item'>
                        <img src={arrow_icon} alt="arrow icon" />
                        <p>Suitable for ATS.</p>
                    </div>
                    <div className='button-margin'>
                        <button className='button2'>Create your CV</button>
                    </div>
                </div>
            </div>
        </section>

        
        <Footer />
    </div>
  )
}

export default HomePage