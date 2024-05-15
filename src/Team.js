import React, { useState } from 'react'
import { FiSun, FiFacebook, FiInstagram, FiYoutube, FiTwitter, FiArrowRightCircle, FiPhoneCall, FiLinkedin } from "react-icons/fi"
import { RiCloseFill } from "react-icons/ri";
import "./Css/styles.css"
// import video from "./assets/video/video.mp4"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./Css/swiper.css"
// import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import Navbar from './Navbar'
import Footer from './Footer';

const Team = () => {
  const [showMapPopup, setShowMapPopup] = useState(false);
  const [mapLink, setMapLink] = useState('');


  return (
    <>
      {/* <!-- ----------------------------  Navigation ---------------------------------------------- --> */}

      <header className="header scroll-header" id="header">
        <Navbar />

      </header>

      <main className="main">



        <br /><br /><br /><br />
        <h1 className="section_rajasthan">EaseJourney <br/> <h4>"Explore Indian Inimitable Treasures"</h4> </h1><br /><br />
        <div className='about-rajasthan'>
          <h2>Welcome to our innovative project, where we're seamlessly blending travel guidance with product offerings. Our endeavor focuses on creating an immersive journey for users, intertwining informative travel guides with an intuitive product marketplace. With a dedicated team of developers, designers, and researchers, we're poised to revolutionize the way travelers explore and engage with destinations. Join us as we embark on this exciting adventure together!</h2>

        </div>


        <section className="place section" id="place">
          <h1 className="section__title">Team Members</h1>
          <div className="card-globle-div">
            <div className="in-p-h">
              <div className="card-gi">
                <img
                  className="card-img-top"
                  src="https://media.licdn.com/dms/image/D5603AQFryYeWnk_xuQ/profile-displayphoto-shrink_800_800/0/1707987855117?e=1720656000&v=beta&t=zV3AFykMZAAZeP-1tZH969xk0QpXEp0eoWsDonIJUXM"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <b>Suraj Kushwaha</b>
                  </h5>
                  <p className="card-text">
                    <h5>Frontend Developer</h5>
                    Skilled in React, HTML, CSS, and JavaScript,Suraj Kushwaha is dedicated to creating captivating user interfaces and enhancing the overall user experience for our travel guide website."
                  </p>
                  <div className="div-btn-gi">
                    <button
                      className="btn-gi btn btn-primary ">
                      <a href='https://www.linkedin.com/in/kushwahasooraj/' target='blank'><FiLinkedin size={20} /></a>
                    </button>
                    <button className="btn-gi btn btn-primary">
                      <a href='https://www.instagram.com/itz_sooraj_dude/' target='blank'> <FiInstagram size={20} /></a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Store */}
            <div className="in-p-h">
              <div className="card-gi">
                <img
                  className="card-img-top"
                  src="https://media.licdn.com/dms/image/D4D03AQF2vQcKSUGaSQ/profile-displayphoto-shrink_800_800/0/1668545942819?e=1720656000&v=beta&t=S3LsEt78r7_dHwFRIE6_nMraSV-AQvjplDu99XPNUR4"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <b>Ravish Kumar</b>
                  </h5>
                  <p className="card-text">
                    <h5>Backend Developer</h5>
                    Utilizing technologies like Node.js, MongoDB, and Express, Ravish Kumar excels in developing efficient server-side solutions, driving the backbone of our travel guide website with scalable and high-performance capabilities.
                  </p>
                  <div className="div-btn-gi">
                    <button
                      className="btn-gi btn btn-primary">
                      <a href="https://www.linkedin.com/in/isro/" target='blank'><FiLinkedin size={20} /></a>
                    </button>
                    <button className="btn-gi btn btn-primary">
                      <a href='https://www.instagram.com/ravish0409/' target='blank'><FiInstagram size={20} /></a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Store */}
            <div className="in-p-h">
              <div className="card-gi">
                <img
                  className="card-img-top"
                  src="https://media.licdn.com/dms/image/D4E03AQHZdQH-gtVHJQ/profile-displayphoto-shrink_800_800/0/1691414501918?e=1720656000&v=beta&t=1ZyEsklkSNi5DBsHvOq1EyA474nOW1N5TeSfdKFQeMY"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <b>Vani Mehra</b>
                  </h5>
                  <p className="card-text">
                    <h5>UI/UX & Researcher</h5>
                    Combining design expertise with user-centric research, Vani Mehra crafts intuitive interfaces and conducts insightful analysis to ensure our travel guide website meets user needs seamlessly and aesthetically.
                  </p>
                  <div className="div-btn-gi">
                    <button
                      className="btn-gi btn btn-primary">
                      <a href="https://www.linkedin.com/in/vani-mehra-4bbb5a251/" target='blank'><FiLinkedin size={20} /></a>
                    </button>
                    <button className="btn-gi btn btn-primary">
                      <a href='https://www.instagram.com/vaniimehra/' target='blank'><FiInstagram size={20} /></a>
                    </button>
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
        <Footer />
      </footer>
  
    </>
  )
}
export default Team