import React from 'react'
import './End.css'

const End = () => {
  return (
    <div className='end'>
        <div className='container'>
            <h3 className='our-brand'>Our Brand</h3>
                <ul className='our-brand-list'>
                    <li>About Us</li>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Sustainability</li>
                    <li>Terms of Service</li>
                </ul>
            <h3 className='assistance'>Assistance</h3>
                <ul className='assistance-list'>
                    <li>Customer Service</li>
                    <li>FAQs</li>
                    <li>Partner Help</li>
                    <li>Investor Relations</li>
                    <li>Partner Dispute</li>
                    <li>Don't sell my personal information</li>
                    <li>Corporate Contact</li>
                </ul>
            <h3 className='newsletter'>Newsletter</h3>
                <p>Subscribe to recieve updates, access to exclusive real estate proposals, and more.</p>
                <form>
                    <input type='email' placeholder='Enter your email address'></input>
                    <button type='button' name='button'>SUBSCRIBE</button>
                </form>
        </div>
    </div>
  )
}

export default End