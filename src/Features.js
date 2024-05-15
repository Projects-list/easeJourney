import React from 'react';
import { FiSun } from "react-icons/fi";
import "./Css/styles.css";
import Navbar from './Navbar';
import Footer from './Footer';

const Features = () => {
  return (
    <>
      <header className="header scroll-header" id="header">
        <Navbar />
      </header>
        <br/><br/><br/>
      <main className="main">
        <div className="feature-container">
          <h1 className="section_rajasthan">EaseJourney <br/> <h4>"Explore Indian Inimitable Treasures"</h4> </h1><br /><br />
          <h2 className="feature-heading">Features</h2>
          <div className="feature-list">
            <div className="feature">
              <h3 className="feature-title">GI Index Products</h3>
              <p className="feature-description">Discover a curated selection of GI index products from India's finest stores.</p>
            </div>
            <div className="feature">
              <h3 className="feature-title">Travel Guides</h3>
              <p className="feature-description">Access comprehensive travel guides packed with local insights and tips.</p>
            </div>
            <div className="feature">
              <h3 className="feature-title">Booking Services</h3>
              <p className="feature-description">Book buses, trains, flights, cabs, and hotels seamlessly through our platform.</p>
            </div>
            <div className="feature">
              <h3 className="feature-title">Nearby Attractions</h3>
              <p className="feature-description">Discover nearby restaurants, attractions, and hotels based on your location.</p>
            </div>
            <div className="feature">
              <h3 className="feature-title">GI Index Product Purchase</h3>
              <p className="feature-description">Purchase authentic GI index products directly from our platform, ensuring quality and authenticity.</p>
            </div>
            <div className="feature">
              <h3 className="feature-title">Store Guide</h3>
              <p className="feature-description">Guide stores for you that offer GI index products, making it convenient to shop.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer" id="footer">
        <Footer />
      </footer>

    </>
  )
}

export default Features;
