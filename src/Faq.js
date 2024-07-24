import React from 'react';
import "./Css/styles.css";
import Navbar from './Navbar';
import Footer from './Footer';

const FAQs = () => {
  return (
    <>
      <header className="header scroll-header" id="header">
        <Navbar />
      </header>
        <br/><br/><br/>
      <main className="main">
        <div className="faq-container">
          <h1 className="section_rajasthan">EaseJourney <br/> <h4>"Explore Indian Inimitable Treasures"</h4> </h1><br /><br />
          <h2 className="faq-heading">Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq">
              <h3 className="faq-question">What is EaseJourney?</h3>
              <p className="faq-answer">EaseJourney is an innovative platform that combines travel guidance with product offerings, providing users with an immersive journey experience.</p>
            </div>
            <div className="faq">
              <h3 className="faq-question">How can I purchase GI index products?</h3>
              <p className="faq-answer">You can purchase authentic GI index products directly from our platform. Simply browse through our selection and make a purchase hassle-free.</p>
            </div>
            <div className="faq">
              <h3 className="faq-question">What types of booking services are available?</h3>
              <p className="faq-answer">You can book buses, trains, flights, cabs, and hotels through our platform, ensuring a seamless travel experience.</p>
            </div>
            <div className="faq">
              <h3 className="faq-question">Is there guidance on stores offering GI index products?</h3>
              <p className="faq-answer">Yes, our platform provides guidance on stores offering GI index products, making it convenient to shop for authentic items.</p>
            </div>
            <div className="faq">
              <h3 className="faq-question">How do I contact customer support?</h3>
              <p className="faq-answer">You can contact our customer support team via email at <a href="mailto:support@easejourney.com">support@easejourney.com</a>.</p>
            </div>
            <div className="faq">
              <h3 className="faq-question">Can I provide feedback?</h3>
              <p className="faq-answer">Yes, you can provide feedback through our website's contact us section or by emailing us directly. Additionally, you can provide feedback on GI products on the respective product pages.</p>
            </div>
            <div className="faq">
              <h3 className="faq-question">How secure is the payment process?</h3>
              <p className="faq-answer">We use secure payment gateways to ensure the safety and security of your transactions. Your payment information is encrypted and protected at all times.</p>
            </div>
            <div className="faq">
              <h3 className="faq-question">Can I book experiences and tours?</h3>
              <p className="faq-answer">Yes, you can book various experiences and tours through Govt. Website we will suggest and allowing you to explore destinations in a unique and memorable way.</p>
            </div>
            <div className="faq">
              <h3 className="faq-question">Are there any hidden fees?</h3>
              <p className="faq-answer">No, we are transparent about our pricing, and there are no hidden fees associated with purchases made through our platform.</p>
            </div>
            <div className="faq">
              <h3 className="faq-question">Can I modify my bookings?</h3>
              <p className="faq-answer">Yes, you can contact to the booking platform, subject to the terms and conditions of the respective service providers.</p>
            </div>
            <div className="faq">
              <h3 className="faq-question">What languages is the platform available in?</h3>
              <p className="faq-answer">Our platform is available in English language as of now.</p>
            </div>
            <div className="faq">
              <h3 className="faq-question">How do I reset my password?</h3>
              <p className="faq-answer">You can reset your password through the "Forgot Password" option on the login page. Follow the instructions provided to reset your password securely.</p>
            </div>
            <div className="faq">
              <h3 className="faq-question">Are there restrictions on booking for certain destinations?</h3>
              <p className="faq-answer">Yes, there may be restrictions on booking for certain destinations due to local regulations or travel advisories. Please check the latest updates before making your booking.</p>
            </div>
            <div className="faq">
              <h3 className="faq-question">Can I make group bookings?</h3>
              <p className="faq-answer">Yes, you can make group bookings for tours, accommodations, and transportation services. Contact our customer support team for assistance with group bookings.</p>
            </div>
            <div className="faq">
              <h3 className="faq-question">How do I provide feedback?</h3>
              <p className="faq-answer">You can provide feedback through our website's contact us section or by emailing us directly. Additionally, you can provide feedback on GI products on the respective product pages.</p>
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

export default FAQs;
