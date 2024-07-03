import React from 'react';
import imgfooter from '../../../src/images/Vectorwhite.png';
import FacebookIcon from '../../../src/images/facebook.svg';
import InstagramIcon from '../../../src/images/instagram.svg';

function Footer() {
  return (
    <footer>
      
      <div className="titrefoot">
        K<img className="logoFkasa" src={imgfooter} alt="Logo kasa" />sa
      </div>
     
      <div className="social">
        <div className='droitContact'>
      <p>© 2020 All rights reserved. Kasa. </p>
      <p>21 jump Street, Boston, USA</p>
      </div>
      <div className='linkSocia'>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="40" height="0"/>
            <img src={FacebookIcon} alt="Facebook" className="social-icon" />
        </a>
        <a className='marginLogo' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="40" height="0" />
            <img src={InstagramIcon} alt="Instagram" className="social-icon" />
        </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
