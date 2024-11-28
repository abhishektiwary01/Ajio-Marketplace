import React from 'react';
import './styles/FooterAjio.css';

const FooterAjio = () => {
  return (
    <div className="footer">
      <img src="public/Templates/Exchange.png" alt="Exchange" />
      <div className="footer-container flex flex-row justify-between items-start">
        <div className="footer-section">
          <h1 className="headings">AJIO</h1>
          <ul className="footer-list text-white">
            <li>Who we are</li>
            <li>Join our Team</li>
            <li>Terms and conditions</li>
            <li>We respect your privacy</li>
            <li>Fee and Payments</li>
            <li>Return and Refund policy</li>
            <li>Promotions Terms and Condition</li>
          </ul>
        </div>
        <div className="footer-section">
          <h1 className="headings">Help</h1>
          <ul className="footer-list text-white">
            <li>Track Your Order</li>
            <li>Frequently Asked Questions</li>
            <li>Returns</li>
            <li>Cancellation</li>
            <li>Payments</li>
            <li>Customer Care</li>
            <li>How Do I Redeem My Coupon</li>
          </ul>
        </div>
        <div className="footer-section">
          <h1 className="headings">Shop By</h1>
          <ul className="footer-list text-white">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Indie</li>
            <li>Stores</li>
            <li>New Arrivals</li>
            <li>Brand Directory</li>
            <li>Home</li>
            <li>Collections</li>
          </ul>
        </div>
        <div className="footer-section">
          <h1 className="headings">Follow Us</h1>
          <ul className="footer-list text-white">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Pinterest</li>
          </ul>
        </div>
        <hr className="line text-white" />
      </div>
      <div>
        <h1 className='payment-heading'>Payment Methods</h1>
      <img className = 'payment' src="public\Templates\Payment-methods.png"/>
    </div>
    </div>
  );
};

export default FooterAjio;
