import React from 'react'
import './End.css'

const End = () => {
  return (
    <div className='end'>
        <div className='container'>
            <div className='our-brand list'>
                <h3 className='header'>Our Brand</h3>
                    <ul className='our-brand-list'>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Sustainability</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
            </div>
            <div className='assistance list'>
                <h3 className='header'>Assistance</h3>
                    <ul className='assistance-list'>
                        <li><a href="#">Customer Service</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Partner Help</a></li>
                        <li><a href="#">Investor Relations</a></li>
                        <li><a href="#">Partner Dispute</a></li>
                        <li><a href="#">Don't sell my personal information</a></li>
                        <li><a href="#">Corporate Contact</a></li>
                    </ul>
            </div>
            <div className='newsletter list'>
                <h3 className='header'>Newsletter</h3>
                    <p>Subscribe to recieve updates, access to exclusive real estate proposals, and more.</p>
                    <form>
                        <input className='user-input' type='email' placeholder='Enter your email address'></input>
                        <button className='btn-subscribe' type='button' name='button'>Subscribe</button>
                    </form>
            </div>
        </div>
    </div>
  )
}

export default End