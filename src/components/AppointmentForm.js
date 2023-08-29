// AppointmentForm.js
import React, { useState } from 'react';
import '../styling/custom.css';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppointmentForm = ({ loggedIn, onClose }) => {
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loggedIn) {
      // Handle form submission logic here
      // You can use the state values (name, email, phone, message) to submit the form data
      try {
        const formData = { name, email, phone, message };
        const response = await fetch('http://localhost:5000/submit-appointment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
         // Show success message using toast
        toast.success('Appointment form submitted successfully!', {
          position: toast.POSITION.TOP_CENTER,
        });
        console.log('Appointment form submitted successfully!');

        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        
        } else {
          toast.error('Error submitting appointment.', {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      } catch (error) {
        // Handle error, e.g., display an error message
        console.error(error);
      }
    } else {
      // Display the login/register modal
      setIsLoginModalVisible(true);
    }
  };

  return (
    <div className="appointment-form-overlay">
      <div className="appointment-form">
        
        <h2 className='subtitle' style={{fontWeight:700}}>Contact Us</h2>
        <p>
        If you have any questions concerning our services,
         please fill out the contact form below.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Phone</label>
            <div className="control">
              <input
                type="tel"
                className="input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea
                className="textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-dark">Submit</button>
            </div>
          </div>
        </form>
      </div>
      <div className="appointment-form-image">
        {/* Placeholder for your image */}
        <button className="close-button" onClick={onClose}>
          <span className="fas fa-times"></span>
        </button>
      </div>
      <Modal
        isOpen={isLoginModalVisible}
        onRequestClose={() => setIsLoginModalVisible(false)}
        contentLabel="Login/Register Modal"
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
            zIndex: '1000'
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
            padding: '30px',
            textAlign:'center'
            
            
          }
        }}
      >
        <p style={{color:'red',fontSize:'larger',textAlign:'center'}}>Please log in or register to submit the appointment form.</p><br/>
        {/* You can add login and registration links/buttons here */}
        <Link to="/signin" className="back-to-signin" style={{color:'black'}}>Sign In/Sign Up</Link>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
