import React from 'react';
import '../styling/AboutPage.css'; // Import your custom CSS for styling
import authorPhoto from '../images/pexels-cottonbro-author.jpg'
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="about-page-container">
      
      <div className="about-text">
        <h2 style={{fontWeight:600}}>About the Author</h2>
        <p>
        She was born in 1959 in the Uzun district in the Surkhandarya region.
        In 1982, she graduated from Tashkent State Medical Institute as a neurologist.
        In 1993, she acquired a PhD in medicine. She has been practising psychology since 1999.
        During this period, such author's books as  "Здравствуй и прошай, грусть",
        "И это тоже пройдёт", "Всему свое время...", "Яркие лунные дни", "Душевное спокойствие",
        "Любовь, страдания и утешение" and many more others have been written and published.
        </p>
        <Link to="/" className="back-to-home" style={{color:'black'}}>Back to Home</Link>
      </div>
      <div className="about-image">
        <img src={authorPhoto} alt="Psychologist" style={{width:617,height:875 }}/>
      </div>
    </div>
  );
};

export default AboutPage;
