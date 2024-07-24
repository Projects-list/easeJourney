import React from 'react'
import "./Css/styles.css"
import {  FiFacebook, FiInstagram, FiYoutube, FiTwitter,} from "react-icons/fi"

function Footer(){

    return(
        <>
         <footer className="footer section">
            <div className="footer__container container grid">
                <div className="footer__content grid">
                    <div className="footer__data">
                        <h3 className="footer__title">Travel</h3>
                        <p className="footer__description">Travel you choose the <br/> destination, 
                            we offer you the <br/> experience.
                        </p>
                        <div>
                            <a href="https://www.facebook.com/" target="_blank" rel='noreferrer' className="footer__social">
                                <i className="ri-facebook-box-fill"><FiFacebook size={20}/></i>
                            </a>
                            <a href="https://twitter.com/" target="_blank" rel='noreferrer' className="footer__social">
                                <i className="ri-twitter-fill"><FiTwitter size={20}/></i>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel='noreferrer' className="footer__social">
                                <i className="ri-instagram-fill"><FiInstagram size={20}/></i>
                            </a>
                            <a href="https://www.youtube.com/" target="_blank" rel='noreferrer' className="footer__social">
                                <i className="ri-youtube-fill"><FiYoutube size={20}/></i>
                            </a>
                        </div>
                    </div>
    
                    <div className="footer__data">
                        <h3 className="footer__subtitle">About</h3>
                        <ul>
                            <li className="footer__item">
                                <a href="./about" className="footer__link">About Us</a>
                            </li>
                            <li className="footer__item">
                                <a href="./features" className="footer__link">Features</a>
                            </li>
                            <li className="footer__item">
                                <a href="/travel" className="footer__link">Travel Companion</a>
                            </li>
                        </ul>
                    </div>
    
                    <div className="footer__data">
                        <h3 className="footer__subtitle">Company</h3>
                        <ul>
                            <li className="footer__item">
                                <a href="./team" className="footer__link">Team</a>
                            </li>
                            {/* <li className="footer__item">
                                <a href="#/" className="footer__link">Plan & Pricing</a>
                            </li> */}
                           
                        </ul>
                    </div>
    
                    <div className="footer__data">
                        <h3 className="footer__subtitle">Support</h3>
                        <ul>
                            <li className="footer__item">
                                <a href="./faq" className="footer__link">FAQs</a>
                            </li>
                            {/* <li className="footer__item">
                                <a href="#/" className="footer__link">Support Center</a>
                            </li> */}
                            <li className="footer__item">
                                <a href="./contact" className="footer__link">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__rights">
                    <p className="footer__copy">&#169; 2023 EaseJourney. All rigths reserved.</p>
                    <div className="footer__terms">
                        <a href="#/" className="footer__terms-link">Terms & Agreements</a>
                        <a href="#/" className="footer__terms-link">Privacy Policy</a>
                        
                    </div>
                </div>
            </div>
            {/* <div style={{position:"fixed",bottom:"15px",right:"60px",cursor:"pointer"}}>
                <i ><a href='./#emergency'> <FiPhoneCall size={50} color='red'/> </a></i>
            </div> */}
        </footer>
        </>
    )
}
export default Footer