import React,{useState} from 'react'
import { FiFacebook, FiInstagram, FiTwitter, FiArrowRightCircle, } from "react-icons/fi"
import { RiCloseFill } from "react-icons/ri";
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
import Footer from './Footer';

const Rajasthan = () => {
    const [showMapPopup, setShowMapPopup] = useState(false);
    const [mapLink, setMapLink] = useState('');
  
    const handleVisitStore = (link) => {
      setShowMapPopup(true);
      setMapLink(link);
    };
  
return (
<>
    {/* <!-- ----------------------------  Navigation ---------------------------------------------- --> */}

    <header className="header scroll-header" id="header">
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
                    <a href="http://localhost:3002" className="button" rel="noopener noreferrer">Explore</a>

                </div>

                <div className="home__social">
                    <a href="#/" target="_blank" rel='noreferrer'  className="home__social-link">
                        <i className="ri-facebook-box-fill">
                            <FiFacebook size={15} />
                        </i>
                    </a>
                    <a href="#/" target="_blank" rel='noreferrer' className="home__social-link">
                        <i className="ri-instagram-fill">
                            <FiInstagram size={15} />
                        </i>
                    </a>
                    <a href="#/" target="_blank" rel='noreferrer' className="home__social-link">
                        <i className="ri-twitter-fill">
                            <FiTwitter size={15} />
                        </i>
                    </a>
                </div>

                <div className="home__info">
                    <div>
                        <span className="home__info-title">Best places to visit</span>
                        <a href="#place" rel='noreferrer'
                            className="button button--flex button--link home__info-button">
                            More <i className="ri-arrow-right-line">
                                <FiArrowRightCircle size={15} />
                            </i>
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
        <h1 className="section_rajasthan">Rajasthan</h1><br /><br />
        <div className='about-rajasthan'>
            <h2>Rajasthan, India’s largest state, is a treasure trove of history, culture, and natural beauty. Known as
                the Land of Kings, Rajasthan is steeped in royal grandeur, boasting a legacy of majestic forts, opulent
                palaces, and intricate havelis that whisper tales of bygone eras. The capital city, Jaipur, famously
                known as the Pink City, is a vibrant kaleidoscope of colors and culture. Its iconic landmarks such as
                the Hawa Mahal, Amer Fort, and City Palace stand as architectural marvels, reflecting the grandeur of
                the Rajput dynasty. Jodhpur, the Blue City, captivates visitors with its indigo-hued houses, towering
                Mehrangarh Fort, and bustling bazaars brimming with textiles and handicrafts.</h2>
            <h2>Beyond its architectural splendors, Rajasthan’s cultural landscape is equally mesmerizing. The state’s
                rich heritage is showcased through its vibrant festivals, traditional music, and folk dances like
                Ghoomar and Kalbelia. The Thar Desert, stretching across Rajasthan's western frontier, offers an
                enchanting backdrop for camel safaris, desert camping, and vibrant village fairs like the Pushkar Camel
                Fair, where nomads and traders converge for a colorful spectacle.</h2>
            <h2>Rajasthan’s culinary scene is as diverse as its landscapes. From the fiery flavors of Laal Maas to the
                indulgent sweetness of Ghewar, the state's cuisine is a sensory delight. Savory snacks like Pyaaz
                Kachori and Mirchi Vada tantalize taste buds in bustling street markets, while royal feasts in heritage
                hotels offer a regal dining experience fit for kings.</h2>
            <h2>The state's natural beauty is equally captivating, with serene lakes, lush forests, and wildlife
                sanctuaries providing a haven for nature lovers. Ranthambore National Park, one of India’s premier tiger
                reserves, offers thrilling wildlife safaris amidst rugged terrain and ancient ruins.</h2>
            <h2>Rajasthan’s allure lies not only in its iconic landmarks but also in its warm hospitality and the
                enduring spirit of its people. Whether wandering through the narrow lanes of its historic cities,
                exploring remote villages, or gazing at starlit skies in the desert, Rajasthan invites travelers to
                immerse themselves in its timeless charm and discover the essence of India’s royal heritage.</h2>
            <h2>In every corner of Rajasthan, from the bustling cities to the tranquil countryside, echoes the
                resplendent legacy of its past, inviting visitors on a journey of discovery, enlightenment, and
                adventure.</h2>
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
                            <span className="place__subtitle"><a href='https://maps.app.goo.gl/Wm4M26gGErJQPutf8'
                                    target='_blank' rel="noopener noreferrer"> Devisinghpura, Amer, Jaipur, Rajasthan 302001</a></span>
                        </div>
                    </div>

                    <button className="button button--flex place__button">
                        <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Amber_Fort'
                                target='_blank' rel='noreferrer'>
                                <FiArrowRightCircle size={15} />
                            </a></i>
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
                            <span className="place__subtitle"><a href='https://maps.app.goo.gl/fCX4G1Ty1JM52et69'
                                    target='_blank' rel="noopener noreferrer">Gangori Bazaar, J.D.A. Market, Pink City, Jaipur, Rajasthan
                                    302002</a> </span>
                        </div>
                    </div>

                    <button className="button button--flex place__button">
                        <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/City_Palace,_Jaipur'
                                target='_blank' rel='noreferrer'>
                                <FiArrowRightCircle size={15} />
                            </a></i>
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
                            <span className="place__subtitle"><a href='https://maps.app.goo.gl/brDGYbiwGePgCsPC9'
                                    target='_blank' rel="noopener noreferrer">2, Ranthambhor Road, Vigyan Nagar, Sawai Madhopur, Ranthambhore
                                    Fort, Rajasthan 322001</a></span>
                        </div>
                    </div>

                    <button className="button button--flex place__button">
                        <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Chittor_Fort'
                                target='_blank' rel='noreferrer'>
                                <FiArrowRightCircle size={15} />
                            </a></i>
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
                            <span className="place__subtitle"><a href='https://maps.app.goo.gl/PanbesVUiPWTcp1U8'
                                    target='_blank' rel="noopener noreferrer">2, Ranthambhor Road, Vigyan Nagar, Sawai Madhopur, Ranthambhore
                                    Fort, Rajasthan 322001</a></span>
                        </div>
                    </div>

                    <button className="button button--flex place__button">
                        <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Ranthambore_Fort'
                                 target='_blank' rel="noreferrer">
                                <FiArrowRightCircle size={15} />
                            </a></i>
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
                            <span className="place__subtitle"><a href='https://maps.app.goo.gl/6Yq3ysHQPrMFL4aGA'
                                    target='_blank' rel="noopener noreferrer">Hawa Mahal Rd, Badi Choupad, J.D.A. Market, Pink City, Jaipur,
                                    Rajasthan 302002</a></span>
                        </div>
                    </div>

                    <button className="button button--flex place__button">
                        <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Hawa_Mahal'
                                target='_blank' rel='noreferrer'>
                                <FiArrowRightCircle size={15} />
                            </a></i>
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
                            <span className="place__subtitle"><a href='https://maps.app.goo.gl/rdo2rfWG2yMtHP2C7'
                                    target='_blank' rel="noopener noreferrer">Sodagaran Mohalla, Jodhpur, Rajasthan 342001</a></span>
                        </div>
                    </div>

                    <button className="button button--flex place__button">
                        <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Mehrangarh'
                                target='_blank' rel='noreferrer'>
                                <FiArrowRightCircle size={15} />
                            </a></i>
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
                            <span className="place__subtitle"><a href='https://maps.app.goo.gl/Q5tQ7igXHF7BNXAj9'
                                    target='_blank' rel="noopener noreferrer">Khejer Para, Manak Chowk, Amar Sagar Pol, Jaisalmer, Rajasthan
                                    345001</a></span>
                        </div>
                    </div>

                    <button className="button button--flex place__button">
                        <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Jaisalmer_Fort'
                                target='_blank' rel='noreferrer'>
                                <FiArrowRightCircle size={15} />
                            </a></i>
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
                            <span className="place__subtitle"><a href='https://maps.app.goo.gl/3zUjECFGr1zkZMpi8'
                                    target='_blank' rel="noopener noreferrer">Kumbhalgarh, Rajasthan 313325</a></span>
                        </div>
                    </div>

                    <button className="button button--flex place__button">
                        <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Kumbhalgarh'
                                target='_blank' rel='noreferrer'>
                                <FiArrowRightCircle size={15} />
                            </a></i>
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
                            <span className="place__subtitle"><a href='https://maps.app.goo.gl/vFyvQP8xcaxMevhy9'
                                    target='_blank' rel="noopener noreferrer">Bikaner Fort, Bikaner, Rajasthan 334001</a></span>
                        </div>
                    </div>

                    <button className="button button--flex place__button">
                        <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Junagarh_Fort'
                                target='_blank' rel='noreferrer'>
                                <FiArrowRightCircle size={15} />
                            </a></i>
                    </button>
                </div>
            </div>
        </section>
        <br /><br /><br />

        <div className="place__header">
            <a href="https://www.tourism.rajasthan.gov.in/packages.html" target='blank' className="button-24"
                role="button" rel="noopener noreferrer"> Explore Packages</a>
            <a href="https://tourist.rajasthan.gov.in/#/" className="button-24" target='blank' role="button" rel="noopener noreferrer">Book
                Tickets</a>
        </div>
        <section className="place section" id="place">
      <h1 className="section__title">Explore Geographical Index Products</h1>
      <div className="card-globle-div">
        <div className="in-p-h">
          <div className="card-gi">
            <img
              className="card-img-top"
              src="https://www.giheritage.com/uploads/product/molela-clay-work-jaman1-h.jpg"
              alt="Card_image_cap"
            />
            <div className="card-body">
              <h5 className="card-title">
                <b>Molela Clay Work</b>
              </h5>
              <p className="card-text">
                It involves making clay tiles with sculptures of gods and goddesses in hollow relief form
              </p>
              <div className="div-btn-gi">
                <button
                  className="btn-gi btn btn-primary"
                  onClick={() =>
                    handleVisitStore(
                      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.7718535911067!2d73.72746937537342!3d24.939840927877523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39680fc9166e6d8b%3A0x3e04972c2a1df926!2sMOLELA%20TERRACOTTA!5e0!3m2!1sen!2sin!4v1714765836453!5m2!1sen!2sin'
                    )
                  }
                >
                  Visit store
                </button>
                <button className="btn-gi btn btn-primary"
                onClick={() =>
                    handleVisitStore(
                      'http://localhost:3000/product/6635cc15d00f570ddc95905b'
                    )
                  }>Buy now</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Second Store */}
        <div className="in-p-h">
          <div className="card-gi">
            <img
              className="card-img-top"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Blue_pottery_pilgrim_flask.jpg/220px-Blue_pottery_pilgrim_flask.jpg"
              alt="Card_image_cap"
            />
            <div className="card-body">
              <h5 className="card-title">
                <b>Blue Pottery</b>
              </h5>
              <p className="card-text">
                A well-recognised traditional art of Jaipur, the name blue pottery comes from the generous use of cobalt blue dye.
              </p>
              <div className="div-btn-gi">
                <button
                  className="btn-gi btn btn-primary"
                  onClick={() =>
                    handleVisitStore(
                      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d113816.49253218056!2d75.7570107!3d26.9426511!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db11a89fbb4b7%3A0x5de4843157e0e95d!2sJaipur%20Blue%20Pottery%20Art%20Centre!5e0!3m2!1sen!2sin!4v1714766220718!5m2!1sen!2sin'
                    )
                  }
                >
                  Visit store
                </button>
                <button className="btn-gi btn btn-primary"
                 onClick={() =>
                    handleVisitStore(
                      'http://localhost:3000/product/6635cc3fd00f570ddc95905e'
                    )
                  }>Buy now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Third Store */}
        <div className="in-p-h">
          <div className="card-gi">
            <img
              className="card-img-top"
              src="https://www.sundarisilks.com/cdn/shop/articles/gems-of-jaipur-sundari-silks-blog-cover.jpg?v=1617338507"
              alt="Card_image_cap"
            />
            <div className="card-body">
              <h5 className="card-title">
                <b>Sanganeri Hand Block Printing</b>
              </h5>
              <p className="card-text">
                The patterns in bright colours are always printed on white backgrounds.
              </p>
              <div className="div-btn-gi">
                <button
                  className="btn-gi btn btn-primary"
                  onClick={() =>
                    handleVisitStore(
                      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.090411535201!2d75.79187722543577!3d26.805249676711355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dcbefacd51365%3A0xe60dd964f47eea89!2sPriyadarshan%20Hand%20Print!5e0!3m2!1sen!2sin!4v1714766241695!5m2!1sen!2sin'
                    )
                  }
                >
                  Visit store
                </button>
                <button className="btn-gi btn btn-primary"
                 onClick={() =>
                    handleVisitStore(
                      'http://localhost:3000/product/6635cc6fd00f570ddc959062'
                    )
                  }>Buy now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Store */}
        <div className="in-p-h">
          <div className="card-gi">
            <img
              className="card-img-top"
              src="https://media.cnn.com/api/v1/images/stellar/prod/220906104800-03-bhujia-snack-food-india-stall.jpg?c=original"
              alt="Card_image_cap"
            />
            <div className="card-body">
              <h5 className="card-title">
                <b>Bikaneri Bhujia</b>
              </h5>
              <p className="card-text">
                The first batch of bhujia was manufactured in the princely state of Bikaner during the reign of Maharaja Shri Dungar Singh.
              </p>
              <div className="div-btn-gi">
                <button
                  className="btn-gi btn btn-primary"
                  onClick={() =>
                    handleVisitStore(
                      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56356.17942934743!2d73.2403402!3d28.016491!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393fdd7cb1b13a6d%3A0xf438c9cd9f842c08!2sBikaner%20Bhujia%20Bhandar!5e0!3m2!1sen!2sin!4v1714766261187!5m2!1sen!2sin'
                    )
                  }
                >
                  Visit store
                </button>
                <button className="btn-gi btn btn-primary"
                 onClick={() =>
                    handleVisitStore(
                      'http://localhost:3000/product/6635cca0d00f570ddc959066'
                    )
                  }>Buy now</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      {showMapPopup && (
        <div className="map-popup">
        <iframe title="map" src={mapLink} width="600" height="450"></iframe>
        <button className="close-button" onClick={() => setShowMapPopup(false)}>
          <RiCloseFill size={20} />
        </button>
        <div className="disclaimer" >
  <p >⚠️ Disclaimer: External link. We're not responsible for its content or security.</p>
</div>

      </div>
      
      )}
  

    </section>
    </main>

             {/* <!-- ----------------------------  Footer ---------------------------------------------- --> */}

             <footer className="footer" id="footer" >
        <Footer/>
        </footer>

</>
)
}
export default Rajasthan