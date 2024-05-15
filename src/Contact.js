import React, { useState } from 'react';
import { FiArrowUp } from "react-icons/fi";
import "./Css/styles.css";
import Navbar from './Navbar';
import Footer from './Footer';

const ContactUs = () => {
  const [showMapPopup, setShowMapPopup] = useState(false);
  const [mapLink, setMapLink] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your form submission logic here
    console.log('Form submitted!');
  };

  return (
    <>
      <header className="header scroll-header" id="header">
        <Navbar />
      </header>
        <br/><br/><br/>
      <main className="main">
        <div className="contact-container">
        <h1 className="section_rajasthan">EaseJourney <br/> <h4>"Explore Indian Inimitable Treasures"</h4> </h1><br /><br />
          <h1 className="contact-heading">Contact Us</h1>
          <div className="contact-info">
            <p>We'd love to hear from you!</p>
            <p>Feel free to reach out to us for any inquiries, feedback, or partnership opportunities.</p>
            <p>You can contact us via email at <a href="mailto:info@easejourney.com">info@easejourney.com</a> or by filling out the form below:</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </main>

      <footer className="footer" id="footer">
        <Footer />
      </footer>
 
    </>
  )
}

export default ContactUs;
