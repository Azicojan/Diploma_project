// AuthForm.js
import React, { useState } from 'react';
import '../styling/AuthFormStyling.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AuthForm = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
    setErrorMessage('');
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleEmailChange = () => {
    setErrorMessage(''); // Clear error message when email field clicked
  };

  const handlePasswordChange = () => {
    setErrorMessage(''); // Clear error message when password field clicked
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        isSignUp ? 'http://localhost:5000/register' : 'http://localhost:5000/login',
        isSignUp
          ? { userName: username, email, password }
          : { email, password }
      );
      

    if (isSignUp) {
      if (response.data) {
      //  onLoginSuccess(response.data.username, response.data.userPhoto);
        toast.success('Registration successful!', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: true,
        });
       
      } else {
        // Handle error response and display an error message
        console.error('Failed to register:', response.data.error);
        setErrorMessage('Invalid credentials. Please check your email and password or register, please.');
        setModalIsOpen(true);
      }
    } else {
      if (response.data.username) {
        onLoginSuccess(response.data.username, response.data.userPhoto);
        toast.success(`You have successfully logged in!`,
        {
          position: 'top-center', // Set the position to top-center
          autoClose: 2000, // Auto-close the toast after 3000ms (3 seconds)
          hideProgressBar: true, // Hide the progress bar
        }); // Display a success toast
        navigate('/');
      } else {
        // Handle error response and display an error message
        console.error('Failed to log in:', response.data.error);
        setErrorMessage('Invalid credentials. Please check your email and password.');
        setModalIsOpen(true);
      }
    }

    // Reset the form data after submission
    setUsername('');
    setEmail('');
    setPassword('');
  } catch (error) {
    console.error('Error during authentication:', error);
    setErrorMessage('An error occurred during authentication. Please try again.');
    setModalIsOpen(true);
  }
  };

  return (
    <div className='mainfield'>
    
    <Link to="/" className="back-to-home" style={{color:'black',marginLeft:20 }}>Back to Home</Link>
    <div className="auth-form">
      <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
        )}
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              type="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onClick={handleEmailChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onClick={handlePasswordChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control" style={{marginTop:20}}>
            <button type="submit" className="button is-dark is-fullwidth is-rounded">
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </div>
        </div>
      </form>
      <p className="auth-toggle" onClick={handleToggle}>
        {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
      </p>
    </div>
     {errorMessage && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          contentLabel='Error Modal'
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.75)'
            },
            content: {
              position: 'absolute',
              top: '300px',
              left: '150px',
              right: '150px',
              bottom: '300px',
              border: '1px solid #ccc',
              background: '#fff',
              borderRadius: '10px',
              outline: 'none',
              padding: '20px'
            }
          }}
          
        >
          
          <p className='error-message'>{errorMessage}</p>
        </Modal>
      )}
    </div>
  );
};

export default AuthForm;
