// MainFooter.js
import React from 'react';
import '../styling/custom.css';

const MainFooter = () => {
  return (
    <footer className="footer" style={{ backgroundColor: 'rgb(50, 50, 50)', color: 'white' }}>
      <div className="container">
        <div className="columns">
          <div className="column">
            <h3 className="title is-5"style={{color: 'white',textAlign:'left'}}>Contact Us</h3>
            <p>Email: tokzor1231983@gmail.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="column">
            <h3 className="title is-5" style={{color: 'white',textAlign:'left'}}>Follow Us</h3>
            <p>Stay connected on social media:</p><br/>
            <a href="https://www.facebook.com" className="social-icon">Facebook</a><br/>
            <a href="https://www.twitter.com" className="social-icon">Twitter</a><br/>
            <a href="https://www.instagram.com" className="social-icon">Instagram</a>
          </div>
        </div>
      </div>
      <div className="content" style={{margin:'20px 0 0 90px',fontSize:'13px',color:'gray'}}>
        <p>&copy; 2023 Dr Ozodi Psychologist Services</p>
      </div>
    </footer>
  );
};

export default MainFooter;
