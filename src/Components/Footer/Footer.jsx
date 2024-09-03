import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer' >
        <div className='footer-content-left' >
            <img src={assets.logo} alt='' ></img>
            <p> HEllaoscjk x jkanscba xjkansjkbx kjwbdcjb kasbcas xkjabsjkxb </p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt='' ></img>
                <img src={assets.twitter_icon} alt='' ></img>
                <img src={assets.linkedin_icon} alt='' ></img>
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>

        </div>
        <div className='footer-content-right' ></div>
        <h2>GET IN TOUCH</h2>
        <ul>
            <li>+91 6281675278</li>
            <li>contact@gmail.com</li>
        </ul>
      
    </div>
  )
}

export default Footer
