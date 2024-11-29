import React from 'react'
import NavbarAjio from '../components/NavbarAjio'
import FooterAjio from '../components/FooterAjio'
import '../styles/CustomerCare.css'

const CustomerCare = () => {
  return (
    <div>
     <NavbarAjio></NavbarAjio>
     <h1 className='heading-cust'>Need Help with Orders?</h1>
     <div className='cart-details'>
      <h1>Your Cart is empty</h1>

     </div>
     <div className='questions'>
        <span>
        <p>Frequently Asked Questions</p>
        <p>Shipping FAQs</p>
        <p>
Cancellation FAQs</p>
<p>Payment FAQs</p>
<p>Returns FAQs</p>
<p>AJIO Wallet</p>
<p>Account & Shopping</p>
<p>Loyalty Rewards</p>
<p>Precious Jewellery</p>
<p>Silver Jewellery and Articles</p>
<p>Gift Card</p></span>

     </div>


     <FooterAjio></FooterAjio>
    </div>
  )
}

export default CustomerCare