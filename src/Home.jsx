import React from 'react'
import {FiFacebook, FiInstagram, FiTwitter, FiArrowRightCircle, FiPhoneCall } from "react-icons/fi"
import "./Css/styles.css"
import Images from './images'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import "./Css/swiper.css"
// import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import Navbar from './Navbar'
import Footer from './Footer'
const Home = () =>{

    return(
        <>
        {/* <!-- ----------------------------  Navigation ---------------------------------------------- --> */}

    <header className="header scroll-header" id="header" >
        <Navbar/>
            
        </header>

        <main className="main">
          
            <section className="home" id="home">
                <div style={{position:'absolute'}}>
            <Carousel>
                
              
                <div>
                    <img src={Images.india_gate} alt='' />
                   
                </div>
                <div>
                    <img src={Images.slider2} alt='' />
                   
                </div>
                <div>
                    <img src={Images.slider1} alt='' />
                   
                </div>
                <div>
                    <img src={Images.slider10} alt='' />
                   
                </div>
                <div>
                    <img src={Images.red_fort} alt='' />
                   
                </div>
                <div>
                    <img src={Images.qutub_minar} alt='' />
                   
                </div>
                <div>
                    <img src={Images.lotus_temple} alt='' />
                   
                </div>
                <div>
                    <img src={Images.akshar}  alt='' />
                   
                </div>
                
            </Carousel>
            </div>
                {/* <img src={home1} alt="" className="home__img"/> */}
                

                <div className="home__container container grid">
                    <div className="home__data">
                        <h1 className="home__data-title">Explore The <br/> Best <b>Beautiful <br/> Places</b></h1>
                        <a href="/monument" className="button">Explore</a>

                    </div>

                    <div className="home__social">
                        <a href="#/" target="_blank" rel='noreferrer' className="home__social-link">
                            <i className="ri-facebook-box-fill"><FiFacebook size={15}/></i>
                        </a>
                        <a href="#/" target="_blank" rel='noreferrer' className="home__social-link">
                            <i className="ri-instagram-fill"><FiInstagram size={15}/></i>
                        </a>
                        <a href="#/" target="_blank" rel='noreferrer' className="home__social-link">
                            <i className="ri-twitter-fill"><FiTwitter size={15}/></i>
                        </a>
                    </div>

                    <div className="home__info">
                        <div>
                            <span className="home__info-title">5 best places to visit</span>
                            <a href="#place" rel='noreferrer' className="button button--flex button--link home__info-button">
                                More <i className="ri-arrow-right-line"> <FiArrowRightCircle size={15}/></i>
                            </a>
                        </div>

                        <div className="home__info-overlay">
                            <img src={Images.imgp} alt="" className="home__info-img"/>
                        </div>
                    </div>
                </div>
            </section>

           
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <section className="about section" id="about">
                <div className="about__container container grid">
                    <div className="about__data">
                        <h2 className="section__title about__title">More Information <br/> About The Best Hotels</h2>
                        <p className="about__description">You can find the most beautiful and pleasant places at the best 
                            prices with special discounts, you choose the place we will guide you all the way to wait, get your 
                            place now.
                        </p>
                        <a href="https://www.makemytrip.com/hotels/" target='_blank' rel='noreferrer' className="button">Reserve a place</a>
                    </div>

                    <div className="about__img">
                        <div className="about__img-overlay">
                            <img src={Images.hotel1} alt="" className="about__img-one"/>
                        </div>

                        <div className="about__img-overlay">
                            <img src={Images.hotel2} alt="" className="about__img-two"/>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="place section" id="place">
            <h2 className="section__title">Discover the most <br/> attractive places</h2>

                <div className="place__container container grid">
                   
                    <div className="place__card">
                        <img src={Images.red_fort} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4.8</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Red Fort</h3>
                                <span className="place__subtitle" ><a href='https://www.google.com/maps/place/Red+Fort/@28.6186535,77.2453696,13z/data=!4m6!3m5!1s0x390cfce26ec085ef:0x441e32f4fa5002fb!8m2!3d28.6561592!4d77.2410203!16zL20vMDVteXN2' target='_blank' rel="noreferrer"> Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi, Delhi 110006</a></span>
                            </div>
                        </div>

                        <button className="button button--flex place__button" >
                        <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Red_Fort' target='_blank' rel='noreferrer'> <FiArrowRightCircle size={15}/></a></i>
                        </button>
                    </div>

                   
                    <div className="place__card">
                        <img src={Images.india_gate} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4.6</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">India Gate</h3>
                                <span className="place__subtitle"><a href='https://www.google.com/maps/place/India+Gate/@28.612912,77.2269348,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce2daa9eb4d0b:0x717971125923e5d!8m2!3d28.612912!4d77.2295097!16zL20vMDM1bWMz'  target='_blank' rel="noreferrer">Kartavya Path, India Gate, New Delhi, Delhi 110001</a> </span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/India_Gate' target='_blank' rel='noreferrer'><FiArrowRightCircle size={15}/></a></i>
                        </button>
                    </div>

                   
                    <div className="place__card">
                        <img src={Images.qutub_minar} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4.5</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Qutub Minar</h3>
                                <span className="place__subtitle"><a href='https://www.google.com/maps/place/Qutab+Minar,+Seth+Sarai,+Mehrauli,+New+Delhi,+Delhi+110016/@28.5244946,77.1829428,17z/data=!3m1!4b1!4m6!3m5!1s0x390d1e065dc72379:0xf6e7259f610de1d7!8m2!3d28.5244946!4d77.1855177!16zL20vMDNjX2g4'  target='_blank' rel="noreferrer">Seth Sarai, Mehrauli, New Delhi, Delhi 110030</a></span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Qutb_Minar' target='_blank' rel='noreferrer'> <FiArrowRightCircle size={15}/></a></i>
                        </button>
                    </div>

                   
                    <div className="place__card">
                        <img src={Images.akshar} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4.6</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Akshardham</h3>
                                <span className="place__subtitle"><a href='https://www.google.com/maps/place/Akshardham/@28.6126735,77.274687,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce35b9975b1fb:0x69a09f265ef3b22a!8m2!3d28.6126735!4d77.2772619!16zL20vMDkxbmYx'  target='_blank' rel="noreferrer">Noida Mor, Pandav Nagar, New Delhi, Delhi 110092</a></span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Swaminarayan_Akshardham_(Delhi)'  target='_blank' rel="noreferrer"><FiArrowRightCircle size={15}/></a></i>
                        </button>
                    </div>

                   
                    <div className="place__card">
                        <img src={Images.lotus_temple} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4.5</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Lotus Temple</h3>
                                <span className="place__subtitle"><a href='https://www.google.com/maps/place/Lotus+Temple/@28.553492,77.2562515,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce3c16e028cd1:0x653beb1ee85ec67a!8m2!3d28.553492!4d77.2588264!16s%2Fm%2F03bx9s0'  target='_blank' rel="noreferrer">Lotus Temple Rd, Bahapur, Shambhu Dayal Bagh, Kalkaji, New Delhi, Delhi 110019</a></span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Lotus_Temple' target='_blank' rel='noreferrer'><FiArrowRightCircle size={15}/></a></i>
                        </button>
                    </div>
                </div>
            </section>
            {/* <section className="discover section" id="discover">
                <h2 className="section__title">Discover the most <br/> attractive places</h2>
                
                <div className="discover__container container swiper-container">
                    <div className="swiper-wrapper">
                       <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={discover1} alt="" className="discover__img"/></SwiperSlide>
      <SwiperSlide>  <img src={discover2} alt="" className="discover__img"/></SwiperSlide>
      <SwiperSlide>  <img src={discover3} alt="" className="discover__img"/></SwiperSlide>
      <SwiperSlide>  <img src={discover4} alt="" className="discover__img"/></SwiperSlide>
      
    </Swiper>
                       
                    </div>
                </div>
            </section> */}

           
            
           
            <section className="video section">
                <h2 className="section__title">Video Tour</h2>

                <div className="video__container container">
                    <p className="video__description">Find out more with our video of the most beautiful and 
                        pleasant places for you and your family.
                    </p>

                    <div className="video__content">
                        {/* <video src="https://www.youtube.com/embed/zc_iulZt-us?si=17kSqHVfx1OY0HiO" type="video/mp4" id="video-file" controls loop> */}
                        {/* </video> */}
                        <iframe title="Example" width="1000" height="600" src="https://www.youtube.com/embed/zc_iulZt-us?si=rhwmZpJtynnZkBs4&amp;controls" frameborder="0" allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </section>

           
            <section className="place section" id="emergency">
                <h2 className="section__title">Emergency Contact</h2>

                <div className="place__container container grid">
                   
                    <div className="place__card">
                        <img src={Images.police} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                              
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Police</h3>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <a href="tel:100"><FiPhoneCall size={15}/></a></i>
                        </button>
                    </div>

                   
                    <div className="place__card">
                        <img src={Images.cyber} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Cyber Crime</h3>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <a href="tel:1930"><FiPhoneCall size={15}/></a></i>
                        </button>
                    </div>

                   
                    <div className="place__card">
                        <img src={Images.fire} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Firebrigade</h3>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <a href="tel:101"> <FiPhoneCall size={15}/></a></i>
                        </button>
                    </div>

                   
                    <div className="place__card">
                        <img src={Images.ambulance} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Ambulance</h3>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <a href="tel:102"> <FiPhoneCall size={15}/></a></i>
                        </button>
                    </div>

                   
                    <div className="place__card">
                        <img src={Images.women} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Women Helpline</h3>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <a href="tel:1090"> <FiPhoneCall size={15}/></a></i>
                        </button>
                    </div>
                    <div className="place__card">
                        <img src={Images.child} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Child Helpline</h3>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <a href="tel:1098"> </a><FiPhoneCall size={15}/></i>
                        </button>
                    </div>
                </div>
                
            </section>

           
            <section className="subscribe section">
                <div className="subscribe__bg">
                    <div className="subscribe__container container">
                        <h2 className="section__title subscribe__title">Subscribe Our <br/> Newsletter</h2>
                        <p className="subscribe__description">Subscribe to our newsletter and get latest
                        information about nearest places.
                        </p>
    
                        <form action="" className="subscribe__form">
                            <input type="text" placeholder="Enter email" className="subscribe__input"/>
    
                            <button className="button">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            
           
           
        </main>


             {/* <!-- ----------------------------  Footer ---------------------------------------------- --> */}

    <footer className="footer" id="footer" >
        <Footer/>
        </footer>

     
        </>
    )
}
export default Home