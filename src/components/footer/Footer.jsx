import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';

const Footer = () => {
  return (
    <footer id="footer">
    <a href="#" className='footer_logo'></a>
    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonial">Testimonial</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

      <div className="footer_socials">
        <a href="https://facebook.com" target="_blank"><FaFacebookF/></a>
        <a href="https://instagram.com" target="_blank"><FiInstagram/></a>
        <a href="https://twitter.com" target="_blank"><IoLogoTwitter/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy;Made with ❤️ by  
          <a href="https://github.com/auspicious123" target='_blank'> Shubham</a>
        </small>
      </div>
    </footer>
  )
}

export default Footer