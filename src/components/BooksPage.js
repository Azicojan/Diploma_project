// BooksPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import bookPhoto from '../images/book_frontpage.jpg'
import bookPhoto2 from '../images/book_frontpage_2.jpg'
import bookPhoto3 from '../images/book_frontpage_3.jpg'
import '../styling/BooksPage.css'; 


const BooksPage = () => {
  return (
    <section className="section">
      <div className="container">
      <Link to="/" className="back-to-home">Back to Home</Link>
        <h1 className="title">Books</h1>
        <div className="book">
          <a href="https://drive.google.com/file/d/1xzJwlivu6PGSrcNRI0LePSUUKXbJfONR/view?usp=sharing" className="pdf-link" target="_blank" rel="noopener noreferrer">
          <img src={bookPhoto} alt="book_1" />
          </a>
        </div>
        <div className="book">
          {/* Add more <a> elements for other books */}
          <a href="https://drive.google.com/file/d/1kBo0SoIfq1sEgDWVii-gQzQT4R147QYF/view?usp=drive_link" className="pdf-link" target="_blank" rel="noopener noreferrer">
          <img src={bookPhoto2} alt="book_2" />
          </a>
        </div>
        <div className="book">
          {/* Add more <a> elements for other books */}
          <a href="https://drive.google.com/file/d/1_JtOoRg7DbgEDM_H2Y1tLPFFcxlWOO3I/view?usp=sharing" className="pdf-link" target="_blank" rel="noopener noreferrer">
          <img src={bookPhoto3} alt="book_3" />
          </a>
        </div>
      </div>
      
    </section>
  );
};

export default BooksPage;
