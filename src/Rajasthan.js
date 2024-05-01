import React from 'react'
import { FiSun, FiFacebook, FiInstagram, FiYoutube, FiTwitter, FiArrowRightCircle, FiPhoneCall } from "react-icons/fi"
import "./Css/styles.css"
import Images from './images'
// import video from "./assets/video/video.mp4"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import "./Css/swiper.css"
// import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import Navbar from './Navbar'
const Rajasthan = () => {

    return (
        <>
            {/* <!-- ----------------------------  Navigation ---------------------------------------------- --> */}

            <header className="header scroll-header" id="header" >
                <Navbar />

            </header>

            <main className="main">

                <section className="home" id="home">
                    <div style={{ position: 'absolute' }}>
                        <Carousel>


                            <div>
                                <img src={Images.slider17} alt='' />

                            </div>
                            <div>
                                <img src={Images.slider12} alt='' />

                            </div>
                            <div>
                                <img src={Images.slider13} alt='' />

                            </div>
                            <div>
                                <img src={Images.slider14} alt='' />

                            </div>
                            <div>
                                <img src={Images.slider15} alt='' />

                            </div>
                            <div>
                                <img src={Images.slider11} alt='' />

                            </div>
                            <div>
                                <img src={Images.slider18} alt='' />

                            </div>
                            <div>
                                <img src={Images.slider19} alt='' />

                            </div>

                        </Carousel>
                    </div>



                    <div className="home__container container grid">
                        <div className="home__data">
                            <span className="home__data-subtitle">Discover your place</span>
                            <h1 className="home__data-title">Explore The <br /> Best <b>Beautiful <br /> Places</b></h1>
                            <a href="http://localhost:3002" className="button">Explore</a>

                        </div>

                        <div className="home__social">
                            <a href="#/" target="_blank" rel='noreferrer' className="home__social-link">
                                <i className="ri-facebook-box-fill"><FiFacebook size={15} /></i>
                            </a>
                            <a href="#/" target="_blank" rel='noreferrer' className="home__social-link">
                                <i className="ri-instagram-fill"><FiInstagram size={15} /></i>
                            </a>
                            <a href="#/" target="_blank" rel='noreferrer' className="home__social-link">
                                <i className="ri-twitter-fill"><FiTwitter size={15} /></i>
                            </a>
                        </div>

                        <div className="home__info">
                            <div>
                                <span className="home__info-title">Best places to visit</span>
                                <a href="#place" rel='noreferrer' className="button button--flex button--link home__info-button">
                                    More <i className="ri-arrow-right-line"> <FiArrowRightCircle size={15} /></i>
                                </a>
                            </div>

                            <div className="home__info-overlay">
                                <img src={Images.imgrajs} alt="" className="home__info-img" />
                            </div>
                        </div>
                    </div>
                </section>

                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br />
                <h1 className="section_rajasthan">Rajasthan</h1><br/><br/>
                <div className='about-rajasthan'>
                <p>Rajasthan, India’s largest state, is a treasure trove of history, culture, and natural beauty. Known as the Land of Kings, Rajasthan is steeped in royal grandeur, boasting a legacy of majestic forts, opulent palaces, and intricate havelis that whisper tales of bygone eras. The capital city, Jaipur, famously known as the Pink City, is a vibrant kaleidoscope of colors and culture. Its iconic landmarks such as the Hawa Mahal, Amer Fort, and City Palace stand as architectural marvels, reflecting the grandeur of the Rajput dynasty. Jodhpur, the Blue City, captivates visitors with its indigo-hued houses, towering Mehrangarh Fort, and bustling bazaars brimming with textiles and handicrafts.</p>
                <p>Beyond its architectural splendors, Rajasthan’s cultural landscape is equally mesmerizing. The state’s rich heritage is showcased through its vibrant festivals, traditional music, and folk dances like Ghoomar and Kalbelia. The Thar Desert, stretching across Rajasthan's western frontier, offers an enchanting backdrop for camel safaris, desert camping, and vibrant village fairs like the Pushkar Camel Fair, where nomads and traders converge for a colorful spectacle.</p>
                <p>Rajasthan’s culinary scene is as diverse as its landscapes. From the fiery flavors of Laal Maas to the indulgent sweetness of Ghewar, the state's cuisine is a sensory delight. Savory snacks like Pyaaz Kachori and Mirchi Vada tantalize taste buds in bustling street markets, while royal feasts in heritage hotels offer a regal dining experience fit for kings.</p>
                <p>The state's natural beauty is equally captivating, with serene lakes, lush forests, and wildlife sanctuaries providing a haven for nature lovers. Ranthambore National Park, one of India’s premier tiger reserves, offers thrilling wildlife safaris amidst rugged terrain and ancient ruins.</p>
                <p>Rajasthan’s allure lies not only in its iconic landmarks but also in its warm hospitality and the enduring spirit of its people. Whether wandering through the narrow lanes of its historic cities, exploring remote villages, or gazing at starlit skies in the desert, Rajasthan invites travelers to immerse themselves in its timeless charm and discover the essence of India’s royal heritage.</p>
                <p>In every corner of Rajasthan, from the bustling cities to the tranquil countryside, echoes the resplendent legacy of its past, inviting visitors on a journey of discovery, enlightenment, and adventure.</p>
                </div>

                <section className="place section" id="place">
                    
                        <h2 className="section__title">Discover the most <br /> attractive places</h2>
                        

                    <div className="place__container container grid">

                        <div className="place__card">
                            <img src={Images.slider11} alt="" className="place__img" />

                            <div className="place__content">
                                <span className="place__rating">
                                    <i className="ri-star-line place__rating-icon"></i>
                                    <span className="place__rating-number">4.5</span>
                                </span>

                                <div className="place__data">
                                    <h3 className="place__title">Amer Fort</h3>
                                    <span className="place__subtitle" ><a href='https://maps.app.goo.gl/Wm4M26gGErJQPutf8' target='_blank'> Devisinghpura, Amer, Jaipur, Rajasthan 302001</a></span>
                                </div>
                            </div>

                            <button className="button button--flex place__button" >
                                <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Amber_Fort' target='_blank' rel='noreferrer'> <FiArrowRightCircle size={15} /></a></i>
                            </button>
                        </div>


                        <div className="place__card">
                            <img src={Images.slider12} alt="" className="place__img" />

                            <div className="place__content">
                                <span className="place__rating">
                                    <i className="ri-star-line place__rating-icon"></i>
                                    <span className="place__rating-number">4.6</span>
                                </span>

                                <div className="place__data">
                                    <h3 className="place__title">City Palace, Jaipur</h3>
                                    <span className="place__subtitle"><a href='https://maps.app.goo.gl/fCX4G1Ty1JM52et69' target='_blank'>Gangori Bazaar, J.D.A. Market, Pink City, Jaipur, Rajasthan 302002</a> </span>
                                </div>
                            </div>

                            <button className="button button--flex place__button">
                                <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/City_Palace,_Jaipur' target='_blank' rel='noreferrer'><FiArrowRightCircle size={15} /></a></i>
                            </button>
                        </div>


                        <div className="place__card">
                            <img src={Images.slider13} alt="" className="place__img" />

                            <div className="place__content">
                                <span className="place__rating">
                                    <i className="ri-star-line place__rating-icon"></i>
                                    <span className="place__rating-number">4.5</span>
                                </span>

                                <div className="place__data">
                                    <h3 className="place__title">Chittorgarh Fort, Chittorgarh</h3>
                                    <span className="place__subtitle"><a href='https://maps.app.goo.gl/brDGYbiwGePgCsPC9' target='_blank'>2, Ranthambhor Road, Vigyan Nagar, Sawai Madhopur, Ranthambhore Fort, Rajasthan 322001</a></span>
                                </div>
                            </div>

                            <button className="button button--flex place__button">
                                <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Chittor_Fort' target='_blank' rel='noreferrer'> <FiArrowRightCircle size={15} /></a></i>
                            </button>
                        </div>


                        <div className="place__card">
                            <img src={Images.slider14} alt="" className="place__img" />

                            <div className="place__content">
                                <span className="place__rating">
                                    <i className="ri-star-line place__rating-icon"></i>
                                    <span className="place__rating-number">4.6</span>
                                </span>

                                <div className="place__data">
                                    <h3 className="place__title">Ranthambore Fort, Sawai Madhopur</h3>
                                    <span className="place__subtitle"><a href='https://maps.app.goo.gl/PanbesVUiPWTcp1U8' target='_blank'>2, Ranthambhor Road, Vigyan Nagar, Sawai Madhopur, Ranthambhore Fort, Rajasthan 322001</a></span>
                                </div>
                            </div>

                            <button className="button button--flex place__button">
                                <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Ranthambore_Fort' target='_blank'><FiArrowRightCircle size={15} /></a></i>
                            </button>
                        </div>


                        <div className="place__card">
                            <img src={Images.slider15} alt="" className="place__img" />

                            <div className="place__content">
                                <span className="place__rating">
                                    <i className="ri-star-line place__rating-icon"></i>
                                    <span className="place__rating-number">4.5</span>
                                </span>

                                <div className="place__data">
                                    <h3 className="place__title">Hawa Mahal</h3>
                                    <span className="place__subtitle"><a href='https://maps.app.goo.gl/6Yq3ysHQPrMFL4aGA' target='_blank'>Hawa Mahal Rd, Badi Choupad, J.D.A. Market, Pink City, Jaipur, Rajasthan 302002</a></span>
                                </div>
                            </div>

                            <button className="button button--flex place__button">
                                <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Hawa_Mahal' target='_blank' rel='noreferrer'><FiArrowRightCircle size={15} /></a></i>
                            </button>
                        </div>
                        <div className="place__card">
                            <img src={Images.slider16} alt="" className="place__img" />

                            <div className="place__content">
                                <span className="place__rating">
                                    <i className="ri-star-line place__rating-icon"></i>
                                    <span className="place__rating-number">4.2</span>
                                </span>

                                <div className="place__data">
                                    <h3 className="place__title">Mehrangarh Fort, Jodhpur</h3>
                                    <span className="place__subtitle"><a href='https://maps.app.goo.gl/rdo2rfWG2yMtHP2C7' target='_blank'>Sodagaran Mohalla, Jodhpur, Rajasthan 342001</a></span>
                                </div>
                            </div>

                            <button className="button button--flex place__button">
                                <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Mehrangarh' target='_blank' rel='noreferrer'><FiArrowRightCircle size={15} /></a></i>
                            </button>
                        </div>
                        <div className="place__card">
                            <img src={Images.slider17} alt="" className="place__img" />

                            <div className="place__content">
                                <span className="place__rating">
                                    <i className="ri-star-line place__rating-icon"></i>
                                    <span className="place__rating-number">4.7</span>
                                </span>

                                <div className="place__data">
                                    <h3 className="place__title">Jaisalmer Fort, Jaisalmer</h3>
                                    <span className="place__subtitle"><a href='https://maps.app.goo.gl/Q5tQ7igXHF7BNXAj9' target='_blank'>Khejer Para, Manak Chowk, Amar Sagar Pol, Jaisalmer, Rajasthan 345001</a></span>
                                </div>
                            </div>

                            <button className="button button--flex place__button">
                                <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Jaisalmer_Fort' target='_blank' rel='noreferrer'><FiArrowRightCircle size={15} /></a></i>
                            </button>
                        </div>
                        <div className="place__card">
                            <img src={Images.slider18} alt="" className="place__img" />

                            <div className="place__content">
                                <span className="place__rating">
                                    <i className="ri-star-line place__rating-icon"></i>
                                    <span className="place__rating-number">4.5</span>
                                </span>

                                <div className="place__data">
                                    <h3 className="place__title">Kumbhalgarh Fort, Udaipur</h3>
                                    <span className="place__subtitle"><a href='https://maps.app.goo.gl/3zUjECFGr1zkZMpi8' target='_blank'>Kumbhalgarh, Rajasthan 313325</a></span>
                                </div>
                            </div>

                            <button className="button button--flex place__button">
                                <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Kumbhalgarh' target='_blank' rel='noreferrer'><FiArrowRightCircle size={15} /></a></i>
                            </button>
                        </div>
                        <div className="place__card">
                            <img src={Images.slider19} alt="" className="place__img" />

                            <div className="place__content">
                                <span className="place__rating">
                                    <i className="ri-star-line place__rating-icon"></i>
                                    <span className="place__rating-number">4.1</span>
                                </span>

                                <div className="place__data">
                                    <h3 className="place__title">Junagarh Fort, Bikaner</h3>
                                    <span className="place__subtitle"><a href='https://maps.app.goo.gl/vFyvQP8xcaxMevhy9' target='_blank'>Bikaner Fort, Bikaner, Rajasthan 334001</a></span>
                                </div>
                            </div>

                            <button className="button button--flex place__button">
                                <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Junagarh_Fort' target='_blank' rel='noreferrer'><FiArrowRightCircle size={15} /></a></i>
                            </button>
                        </div>
                    </div>
                </section>
                <br/><br/><br/>

                <div className="place__header">
                        <a href="https://www.tourism.rajasthan.gov.in/packages.html" target='blank' className="button-24" role="button"> Explore Packages</a>
                        <a href="https://tourist.rajasthan.gov.in/#/" className="button-24" target='blank' role="button">Book Tickets</a>
                    </div>

                <section className="place section" id="place">
                    <h1 className="section__title">Explore Geographical Index Products</h1>

                    <div className="place__container container grid">

                        <div className="place__card">
                            <img src={Images.slider5} alt="" className="place__img" />

                            <div className="place__content">
                                <span className="place__rating">
                                    <i className="ri-star-line place__rating-icon"></i>
                                    <span className="place__rating-number">4.2</span>
                                </span>

                                <div className="place__data">
                                    <h3 className="place__title">Purana Qila</h3>
                                    <span className="place__subtitle"><a href='https://www.google.com/maps/place/Purana+Qila/@28.6095744,77.2411622,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce3214b3b6771:0x139279610ab2ccb3!8m2!3d28.6095744!4d77.2437371!16zL20vMDZuZzRw' target='_blank'>Mathura Rd, Near Delhi Zoo, New Delhi, Delhi 110003</a></span>
                                </div>
                            </div>

                            <button className="button button--flex place__button">
                                <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Purana_Qila' target='_blank' rel='noreferrer'><FiArrowRightCircle size={15} /></a></i>
                            </button>
                        </div>
                        <div className="place__card">
                            <img src={Images.slider6} alt="" className="place__img" />

                            <div className="place__content">
                                <span className="place__rating">
                                    <i className="ri-star-line place__rating-icon"></i>
                                    <span className="place__rating-number">4.5</span>
                                </span>

                                <div className="place__data">
                                    <h3 className="place__title">Amrit Udyan</h3>
                                    <span className="place__subtitle"><a href='https://www.google.com/maps/place/Amrit+Udyan/@28.6144404,77.1952861,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce3c6bdd55eb1:0x834571b6bf250fa6!8m2!3d28.6144404!4d77.197861!16s%2Fg%2F11pgjcbph0' target='_blank'>Rashtrapati Bhawan, President's Estate, New Delhi, Delhi 110004</a></span>
                                </div>
                            </div>

                            <button className="button button--flex place__button">
                                <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Mughal_garden' target='_blank' rel='noreferrer'><FiArrowRightCircle size={15} /></a></i>
                            </button>
                        </div>
                        <div className="place__card">
                            <img src={Images.slider7} alt="" className="place__img" />

                            <div className="place__content">
                                <span className="place__rating">
                                    <i className="ri-star-line place__rating-icon"></i>
                                    <span className="place__rating-number">4.8</span>
                                </span>

                                <div className="place__data">
                                    <h3 className="place__title">Gurudwara Bangla Sahib</h3>
                                    <span className="place__subtitle"><a href='https://www.google.com/maps/place/Gurudwara+Shri+Bangla+Sahib/@28.6263764,77.2064955,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfd9eccc07d2d:0x6db044e71b8e8e3b!8m2!3d28.6263764!4d77.2090704!16zL20vMDRfMWtz' target='_blank'>Hanuman Road Area, Connaught Place, New Delhi, Delhi 110001</a></span>
                                </div>
                            </div>

                            <button className="button button--flex place__button">
                                <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Gurudwara_Bangla_Sahib' target='_blank' rel='noreferrer'><FiArrowRightCircle size={15} /></a></i>
                            </button>
                        </div>
                        <div className="place__card">
                            <img src={Images.slider8} alt="" className="place__img" />

                            <div className="place__content">
                                <span className="place__rating">
                                    <i className="ri-star-line place__rating-icon"></i>
                                    <span className="place__rating-number">4.5</span>
                                </span>

                                <div className="place__data">
                                    <h3 className="place__title">Lodi Garden</h3>
                                    <span className="place__subtitle"><a href='https://www.google.com/maps/place/Lodhi+Garden/@28.5930959,77.2171045,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce2ececc92e35:0x86c0764b1c0d4bea!8m2!3d28.5930959!4d77.2196794!16zL20vMDRfOHF0' target='_blank'>Lodhi Rd, Lodhi Gardens, Lodhi Estate, New Delhi, Delhi 110003</a></span>
                                </div>
                            </div>

                            <button className="button button--flex place__button">
                                <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Lodi_Gardens' target='_blank' rel='noreferrer'><FiArrowRightCircle size={15} /></a></i>
                            </button>
                        </div>
                        <div className="place__card">
                            <img src={Images.slider9} alt="" className="place__img" />

                            <div className="place__content">
                                <span className="place__rating">
                                    <i className="ri-star-line place__rating-icon"></i>
                                    <span className="place__rating-number">4.5</span>
                                </span>

                                <div className="place__data">
                                    <h3 className="place__title">Jama Masjid</h3>
                                    <span className="place__subtitle"><a href='https://www.google.com/maps/place/Jama+Masjid/@28.6506792,77.2308672,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfd18df89b215:0xdd57369e29bf9d96!8m2!3d28.6506792!4d77.2334421!16zL20vMDR5emo1' target='_blank'>Jama Masjid Rd, Jama Masjid, Chandni Chowk, New Delhi, Delhi 110006</a></span>
                                </div>
                            </div>

                            <button className="button button--flex place__button">
                                <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Jama_Masjid,_Delhi' target='_blank' rel='noreferrer'><FiArrowRightCircle size={15} /></a></i>
                            </button>
                        </div>
                        <div className="place__card">
                            <img src={Images.slider10} alt="" className="place__img" />

                            <div className="place__content">
                                <span className="place__rating">
                                    <i className="ri-star-line place__rating-icon"></i>
                                    <span className="place__rating-number">4.8</span>
                                </span>

                                <div className="place__data">
                                    <h3 className="place__title">Hanuman Temple</h3>
                                    <span className="place__subtitle"><a href='https://www.google.com/maps/place/Hanuman+Mandir+Karol+bagh/@28.6450368,77.1954869,17z/data=!3m1!4b1!4m6!3m5!1s0x390d029da94bf9d9:0xda267c5baef74594!8m2!3d28.6450368!4d77.1980618!16s%2Fg%2F11cn8pr65y' target='_blank'>Desh Bandhu Gupta Rd, Block E, Jhandewalan Extension, Paharganj, New Delhi, Delhi 110055</a></span>
                                </div>
                            </div>

                            <button className="button button--flex place__button">
                                <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Jhandewalan_Temple' target='_blank' rel='noreferrer'><FiArrowRightCircle size={15} /></a></i>
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer section">
                <div className="footer__container container grid">
                    <div className="footer__content grid">
                        <div className="footer__data">
                            <h3 className="footer__title">Ease Journey</h3>
                            <p className="footer__description">Travel you choose the <br /> destination,
                                we offer you the <br /> experience.
                            </p>
                            <div>
                                <a href="https://www.facebook.com/" target="_blank" rel='noreferrer' className="footer__social">
                                    <i className="ri-facebook-box-fill"><FiFacebook size={20} /></i>
                                </a>
                                <a href="https://twitter.com/" target="_blank" rel='noreferrer' className="footer__social">
                                    <i className="ri-twitter-fill"><FiTwitter size={20} /></i>
                                </a>
                                <a href="https://www.instagram.com/" target="_blank" rel='noreferrer' className="footer__social">
                                    <i className="ri-instagram-fill"><FiInstagram size={20} /></i>
                                </a>
                                <a href="https://www.youtube.com/" target="_blank" rel='noreferrer' className="footer__social">
                                    <i className="ri-youtube-fill"><FiYoutube size={20} /></i>
                                </a>
                            </div>
                        </div>

                        <div className="footer__data">
                            <h3 className="footer__subtitle">About</h3>
                            <ul>
                                <li className="footer__item">
                                    <a href="#/" className="footer__link">About Us</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#/" className="footer__link">Features</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#/" className="footer__link">Log</a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer__data">
                            <h3 className="footer__subtitle">Company</h3>
                            <ul>
                                <li className="footer__item">
                                    <a href="#/" className="footer__link">Team</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#/" className="footer__link">Plan & Pricing</a>
                                </li>

                            </ul>
                        </div>

                        <div className="footer__data">
                            <h3 className="footer__subtitle">Support</h3>
                            <ul>
                                <li className="footer__item">
                                    <a href="#/" className="footer__link">FAQs</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#/" className="footer__link">Support Center</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#/" className="footer__link">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer__rights">
                        <p className="footer__copy">&#169; 2024 Ease Journey. All rigths reserved.</p>
                        <div className="footer__terms">
                            <a href="#/" className="footer__terms-link">Terms & Agreements</a>
                            <a href="#/" className="footer__terms-link">Privacy Policy</a>

                        </div>
                    </div>
                </div>
            </footer>


            <a href="#/" className="scrollup" id="scroll-up">
                <i className="ri-arrow-up-line scrollup__icon"><FiSun size={50} /></i>
            </a>
        </>
    )
}
export default Rajasthan