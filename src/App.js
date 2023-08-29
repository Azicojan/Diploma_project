//App.js

import React, { useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import PodcastsPage from './components/PodcastsPage';
import BooksPage from './components/BooksPage';
import AuthForm from './components/AuthForm';
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfilePhotoUpdate from './components/ProfilePhotoUpdate';
import AboutPage from './components/AboutPage';
import PricingPage from './components/PricingPage';
import ContactsPage from './components/ContactsPage'; 


Modal.setAppElement('#root'); // This line is necessary to set the app element for accessibility
const App = () => {
 
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  

  const handlePhotoUpdate = (selectedPhoto) => {
    setSelectedPhoto(selectedPhoto);
    console.log(selectedPhoto);
  };



  const handleLoginSuccess = (username, userPhoto) => {
    setLoggedIn(true);
    setUsername(username);
    setSelectedPhoto(userPhoto);
    
  };
  

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    window.location.reload(); // Reload the page
    
    
    
  };

  return (
    <BrowserRouter>
    
      <Routes>
      
      <Route path="/" element={<HomePage loggedIn={loggedIn}
          username={username} onLoginSuccess={handleLoginSuccess} onLogout={handleLogout}
          selectedPhoto={selectedPhoto} />} />

         <Route path="/about" element={<AboutPage />} />
        <Route path="/podcasts" element={<PodcastsPage/>} />
        <Route path="/books" element={<BooksPage/>} />
        <Route path="/signin" element={<AuthForm onLoginSuccess={handleLoginSuccess} />}/>
        <Route path="/pricing" element={<PricingPage loggedIn={loggedIn}/>} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/profile" element={<ProfilePhotoUpdate username={username} onUpdatePhoto={handlePhotoUpdate}/>} />
        {/* Add more routes for other pages */}
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
