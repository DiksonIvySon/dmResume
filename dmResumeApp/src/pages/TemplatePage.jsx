import React from 'react';
import './TemplatePage.css';
import Footer from '../components/footer';
import Header from '../components/header';

import handshake from '../images/handshake.jpg';
import cv_image2 from '../images/cv-image2.webp';
import cv_image3 from '../images/cv-image3.webp';
import cv_image4 from '../images/cv-image4.webp';
import cv_image5 from '../images/cv_image5.webp';
import cv_image6 from '../images/cv_image6.webp';
import cv_image7 from '../images/cv_image7.webp';
import cv_image8 from '../images/cv_image8.webp';
import cv_image9 from '../images/cv_image9.webp';
import cv_image10 from '../images/cv_image10.webp';
import one_star from '../images/one-star.png';
import wallet from '../images/wallet.png';
import briefcase from '../images/briefcase.png';
import creating_image from '../images/creating-image.jpeg';

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
                    <img src={creating_image} alt="creating image" />
                    <div className='smaller-sized left'>
                        <img src={wallet} alt="wallet image" />
                    </div>
                    <div className='smaller-sized right'>
                        <img src={briefcase} alt="briefcase image" />
                    </div>
                </div>
            </div>
        </section>
        <section className='templates-section section-margin'>
            <h1>Beautiful ready-to-use resume templates</h1>  
            <p>
                Win over employers and recruiters by using one of our elegant,
                professionally-designed resume templates.
            </p>
            <div className='templates-list-container'>
                <div className='template-con'>
                    <div className='template-image'>
                        <img src={cv_image2} alt="cv template" />
                    </div>
                    <div className='template-stars-con'>
                        <div className='template-stars'>
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                        </div>
                        <div className='cv_type'>
                            <p>
                                Standard
                            </p>
                        </div>
                    </div>
                    <p className='template-dec'>A traditional and elegant design.</p>
                </div>
                <div className='template-con'>
                    <div className='template-image'>
                        <img src={cv_image6} alt="cv template" />
                    </div>
                    <div className='template-stars-con'>
                        <div className='template-stars'>
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                        </div>
                        <div className='cv_type'>
                            <p>
                                Clean
                            </p>
                        </div>
                    </div>
                    <p className='template-dec'>Clean design that prioritizes space overall.</p>
                </div>
                <div className='template-con'>
                    <div className='template-image'>
                        <img src={cv_image4} alt="cv template" />
                    </div>
                    <div className='template-stars-con'>
                        <div className='template-stars'>
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                        </div>
                        <div className='cv_type'>
                            <p>
                                Standard
                            </p>
                        </div>
                    </div>
                    <p className='template-dec'>A conglomeration traditional and elegant design.</p>
                </div>
                <div className='template-con'>
                    <div className='template-image'>
                        <img src={cv_image9} alt="cv template" />
                    </div>
                    <div className='template-stars-con'>
                        <div className='template-stars'>
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                        </div>
                        <div className='cv_type'>
                            <p>
                                Minimalist
                            </p>
                        </div>
                    </div>
                    <p className='template-dec'>Graphically inviting with a clean layout and icons for extra impact.</p>
                </div>
                <div className='template-con'>
                    <div className='template-image'>
                        <img src={cv_image3} alt="cv template" />
                    </div>
                    <div className='template-stars-con'>
                        <div className='template-stars'>
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                        </div>
                        <div className='cv_type'>
                            <p>
                                Standard
                            </p>
                        </div>
                    </div>
                    <p className='template-dec'>A traditional and elegant design.</p>
                </div>
                <div className='template-con'>
                    <div className='template-image'>
                        <img src={cv_image7} alt="cv template" />
                    </div>
                    <div className='template-stars-con'>
                        <div className='template-stars'>
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                        </div>
                        <div className='cv_type'>
                            <p>
                                Minimalist
                            </p>
                        </div>
                    </div>
                    <p className='template-dec'>Minimalist and meticulously organized to help everything fit clean on the page.</p>
                </div>
                <div className='template-con'>
                    <div className='template-image'>
                        <img src={cv_image8} alt="cv template" />
                    </div>
                    <div className='template-stars-con'>
                        <div className='template-stars'>
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                        </div>
                        <div className='cv_type'>
                            <p>
                                Minimalist
                            </p>
                        </div>
                    </div>
                    <p className='template-dec'>Clean, orderly template structure with stylish minimalism.</p>
                </div>
                <div className='template-con'>
                    <div className='template-image'>
                        <img src={cv_image5} alt="cv template" />
                    </div>
                    <div className='template-stars-con'>
                        <div className='template-stars'>
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                        </div>
                        <div className='cv_type'>
                            <p>
                                Creative
                            </p>
                        </div>
                    </div>
                    <p className='template-dec'>A creative and eye-catching design that will stand out.</p>
                </div>
                <div className='template-con'>
                    <div className='template-image'>
                        <img src={cv_image10  
                        } alt="cv template" />
                    </div>
                    <div className='template-stars-con'>
                        <div className='template-stars'>
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                            <img src={one_star} alt="one star icon" />
                        </div>
                        <div className='cv_type'>
                            <p>
                                Clean
                            </p>
                        </div>
                    </div>
                    <p className='template-dec'>Minimalist two column outline with reliable and elegant image.</p>
                </div>
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default TemplatePage