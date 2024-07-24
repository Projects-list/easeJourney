
import { FiSun } from "react-icons/fi";
import "./Css/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Css/swiper.css";
import 'swiper/css';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {


  return (
    <>
      <header className="header scroll-header" id="header">
        <Navbar />
      </header>

      <main className="main">
        <div className="about-container">
          <h1 className="about-heading">Welcome to EaseJourney</h1>
          <h1 className="section_rajasthan">EaseJourney <br/> <h4>"Explore Indian Inimitable Treasures"</h4> </h1><br /><br />
          <div className="about-description">
            <p>At EaseJourney, we're more than just a travel guide. We're a platform that seamlessly blends travel guidance with product offerings, aiming to create an immersive journey for every user.</p>
            <p>Discover the wonders of India's inimitable treasures while conveniently shopping for GI index products. Our platform curates a diverse range of GI index products from India's finest stores, ensuring authenticity and quality.</p>
            <p>But that's not all - EaseJourney serves as your one-stop solution for all travel needs. From booking buses, trains, flights, and cabs to finding the perfect hotel, we've got you covered.</p>
            <p>Our unique features include:</p>
            <ul className="feature-list">
              <li>Comprehensive GI index product selection from reputed Indian stores</li>
              <li>Effortless booking guides for buses, trains, flights, and cabs</li>
              <li>Curated hotel recommendations to suit every traveler's preferences</li>
              <li>Nearby restaurant, attraction, and hotel finder for personalized experiences</li>
            </ul>
            <p>Embark on an unforgettable journey with EaseJourney, where every travel experience is crafted with care and convenience. Join us as we redefine the way travelers explore and engage with destinations!</p>
          </div>
        </div>
      </main>

      <div className="place__header">
            <a href="./contact" target='blank' className="button-24"
                role="button"> Contact Us</a>
        </div>
        <br/><br/><br/><br/><br/>

      <footer className="footer" id="footer">
        <Footer />
      </footer>
      <a href="#/" className="scrollup" id="scroll-up">
        <i className="ri-arrow-up-line scrollup__icon">
          <FiSun size={50} />
        </i>
      </a>
    </>
  )
}

export default About;
