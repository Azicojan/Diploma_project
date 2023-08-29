// ContactsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/ContactsPage.css';
import GoogleMaps from './GoogleMaps';

const ContactsPage = () => {
  

  return (
    <section className="contacts-section">
      <div className="container">
        <Link to="/" className="back-to-home" style={{ color: 'black' }}>
          Back to Home
        </Link>
        <h1 className="title">Contact Info</h1>
        <div className="contact-details">
          <div className="address">
            <h2>Address:</h2>
            <p>Tashkent, Uzbekistan, Uchtepa district, 10039</p>
          </div>
          <div className="phone">
            <h2>Phone Number:</h2>
            <p>(123) 456-7890</p>
          </div>
          <div className="email">
            <h2>E-mail:</h2>
            <p>info@yoursitename.com</p>
          </div>
          <div className="open-hours">
            <h2>Open Hours:</h2>
            <p>Monday - Friday 10AM - 8PM</p>
          </div>
        </div>
        <div className="map-container">
          <h2>Location</h2>

          <div className="google-map" style={{ height: '500px' }}>          
            <GoogleMaps />            
          </div>

        </div>
      </div>
    </section>
  );

  
};

export default ContactsPage;
