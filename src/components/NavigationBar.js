import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/psychological-and-counseling.jpg'
import '../styling/custom.css';
import AppointmentForm from './AppointmentForm';
import UserAvatar from './UserAvatar'; // Adjust the import path


const NavigationBar = ({ loggedIn, username, onLogout, selectedPhoto }) => {

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
    
  };
  

  return (
    <div className='navpanel'>

    
    <nav className="navbar" role="navigation" aria-label="main navigation">
      {/* Upper Block */}
      <div className="navbar-brand">
        
        <div className="navbar-button">
          <button className="button is-primary has-background-grey-dark
           custom-button" onClick={toggleForm}>Make an appointment</button>
        </div>

        <div className="logo">
          {/* Your Logo */}
          <img src={logo} alt="Logo"/>
        </div>
        <div className="title">
          <p>Dr Ozodi psychology services</p>
        </div>
      </div>
     
    </nav>
    {/* Lower Block */}
    <div className="navbar-menu">
      <div className="navbar-end">
        {/* Links */}
        <Link to="/" className="navbar-item" style={{justifyContent:"center"}}>Home</Link>
        <Link to="/about" className="navbar-item" style={{justifyContent:"center"}}>About</Link>
        <div className="navbar-item has-dropdown is-hoverable">
          <Link to="/services" className="navbar-link services-link">Services</Link>
          <div className="navbar-dropdown">
            <Link to="/books" className="navbar-item">Books</Link>
            <Link to="/courses" className="navbar-item">Online Courses</Link>
            <Link to="/podcasts" className="navbar-item">Podcasts</Link>
          </div>
        </div>
        <Link to="/pricing" className="navbar-item" style={{justifyContent:"center"}}>Pricing</Link>
        <Link to="/contacts" className="navbar-item" style={{justifyContent:"center"}}>Contacts</Link>
        
         {/* Check if the user is logged in and display the avatar */}
        {loggedIn && (
          <div className="avatar" style={{color:'white', fontSize:13,textAlign:'center', width:100}}>
            <span>Welcome, {username}</span>
            {/* You can also display the user's avatar image here */}
            <UserAvatar loggedIn={loggedIn} username={username} onLogout={onLogout} selectedPhoto={selectedPhoto}/>
          </div>
        )}

        {/* Display login/register links if not logged in */}
        {!loggedIn && (
          <Link to="/signin" className="navbar-item" style={{justifyContent:"center"}}>Sign In/Sign Up</Link>
        )}
      </div>
    </div>
    {showForm && <AppointmentForm onClose={toggleForm} loggedIn={loggedIn} />}
  </div>
  );
};

export default NavigationBar;
