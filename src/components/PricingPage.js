import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styling/PricingPage.css';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PricingPage = ({loggedIn}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleBuyNowClick = () => {
        if (!loggedIn) {
          setIsModalOpen(true);
        } else {
          // Handle logic for actual purchase
          toast.success('Thank you for your purchase.');
        }
      };


  return (
    <section className="pricing-section">
      <div className="container">
        <Link to="/" className="back-to-home">
          Back to Home
        </Link>
        <h1 className="pricing-title">Pricing Table</h1>
        <div className="pricing-columns">
          <div className="pricing-column">
            <h2>Yearly Subscription</h2>
            <p className="price">$50</p>
            <button className="buy-button" onClick={handleBuyNowClick} >Buy Now</button>
          </div>
          <div className="pricing-column">
            <h2>Lifetime Subscription</h2>
            <p className="price">$100</p>
            <button className="buy-button" onClick={handleBuyNowClick} >Buy Now</button>
          </div>
          <div className="pricing-column">
            <h2>One-to-One Therapy</h2>
            <p className="price">$20<span className="time" style={{fontSize:13,fontWeight:200}}>(per hour)</span></p>
            
            <button className="buy-button" onClick={handleBuyNowClick}>Buy Now</button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Login Required"
        style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
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
              padding: '20px',
              textAlign:'center',
              color:'red',
              fontSize:'larger',
              fontWeight:'500'
            }
          }}
      >
        <h2>Login Required</h2>
        <p>Please log in to purchase services.</p>
        <button onClick={() => setIsModalOpen(false)} className="button is-warning" style={{marginTop:10}}>Close</button>
      </Modal>
    </section>
  );
};

export default PricingPage;
