import React from 'react';
import './Footer.css';
import logo from "../img/logo.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3>Pages</h3>
            <ul>
              <li><a href="#">Pythology</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>For hospitals / Clinic</h3>
            <ul>
              <li><a href="#">Register Your Hospital</a></li>
              <li><a href="#">Register Clinic</a></li>
              <li><a href="#">Register Your Pharmacy</a></li>
              
            </ul>
          </div>
          <div className="col-md-3">
            <h3>More</h3>
            <ul>
              <li><a href="#">Help</a></li>
              <li><a href="#">Developers</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Healthcare Directory</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>For patients</h3>
            <ul>
              <li><a href="#">Search for doctors</a></li>
              <li><a href="#">Search for clinics</a></li>
              <li><a href="#">Search for hospitals</a></li>
              <li><a href="#">Book Diagnostic Tests</a></li>
              <li><a href="#">Book Full Body Checkups</a></li>
              <li><a href="#">Read health articles</a></li>
              <li><a href="#">Read about medicines</a></li>
              <li><a href="#">Health app</a></li>
            </ul>
          </div>
          <div className="col-md-3" >
            <h3>Social</h3>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Linkedin</a></li>
              <li><a href="#">Youtube</a></li>
              <li><a href="#">Github</a></li>
            </ul>
          </div>
        </div>
        
        < div className="logo">
              <a href="#">
                <img src={logo} alt="Instaclinix Logo" />
              </a>
            <span className='logo-name-footer'>Clinic<span style={{color:"rgb(90, 186, 186)"}}>Hub</span></span>
            <p className="copyright">Copyright © 2023, Instaclinix. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;