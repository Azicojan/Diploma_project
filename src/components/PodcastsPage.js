// PodcastsPage.js
import React from 'react';
import '../styling/PodcastsStyling.css';
import { Link } from 'react-router-dom';

const PodcastsPage = () => {
  const videos = [
    { id: 'video1', title: 'Video 1', embedCode: 'wU6OuMlIf0A' },
    { id: 'video2', title: 'Video 2', embedCode: 'OjUH-06O6A4' },
    { id: 'video3', title: 'Video 3', embedCode: 'i3aPVOM3v7w' },
    { id: 'video4', title: 'Video 4', embedCode: '7uZbmBqWCm4' },
    { id: 'video5', title: 'Video 5', embedCode: 'gczz0T8WkJs' },
    { id: 'video6', title: 'Video 6', embedCode: 'hdKbG1RN1Pc' },
    // Add more video objects as needed
  ];

  return (
    <section className="section" style={{height:800, paddingTop:10}}>
      <div className="container">
      <Link to="/" className="back-to-home">Back to Home</Link>
        <h1 className="title podcast-one">Podcasts</h1>
        <div className="columns" style={{display: 'flex',flexWrap:'wrap',
        justifyContent:"center"}}>
          {videos.map((video) => (
            <div key={video.id} className="column" style={{
              flex: '0 0 calc(30% - 20px)',
              margin: 10,
              padding: 15,
              backgroundColor: '#f5f5f5',
              borderRadius: 10,
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              textAlign: 'center'}}>
              <h2 className="subtitle"style={{marginBottom:10}}>{video.title}</h2>
              <div className="video-wrapper">
                <iframe
                  title={video.title}
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${video.embedCode}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PodcastsPage;
