import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTelegram, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

import logo from '../../assets/images/africa-logo.png'

import './style.css'

const Footer = () => {
  return (
    <footer className="container-fluid footer">
      <div className="container py-5">
        <div className="row flex-column flex-md-row">
          <div className="col mx-4">
            <img src={logo} alt="LOGO" style={{width: "5rem"}} />
            <h3 className="my-2">AfriHub</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt quo quibusdam, a quas iste quia ipsum ducimus illum.</p>
          </div>
          <div className="col mx-4">
            <h5>Use full Links</h5>
            <ul className="list-unstyled">
                <li><a href="/" className="link-dark d-block text-decoration-none">Home</a></li>
                <li><a href="/" className="link-dark d-block text-decoration-none">About Us</a></li>
                <li><a href="/" className="link-dark d-block text-decoration-none">Services</a></li>
                <li><a href="/" className="link-dark d-block text-decoration-none">Jobs</a></li>
                <li><a href="/" className="link-dark d-block text-decoration-none">Signup</a></li>
                <li><a href="/" className="link-dark d-block text-decoration-none">Login</a></li>
                <li><a href="/" className="link-dark d-block text-decoration-none">Home</a></li>
            </ul>
          </div>
          <div className="col mx-4">
          <h5>Quick Links</h5>
            <ul className="list-unstyled">
                <li><a href="/" className="link-dark d-block text-decoration-none">Affiliate</a></li>
                <li><a href="/" className="link-dark d-block text-decoration-none">Resources</a></li>
                <li><a href="/" className="link-dark d-block text-decoration-none">FAQ</a></li>
                <li><a href="/" className="link-dark d-block text-decoration-none">Support</a></li>
                <li><a href="/" className="link-dark d-block text-decoration-none">Home</a></li>
            </ul>
          </div>
        </div>
        <hr />
        {/* <div className="border"></div> */}
        <div className="bottom d-flex flex-column align-items-center">
            <div className="d-flex justify-content-center my-4">
                <FontAwesomeIcon className="btn text-secondary fs-2 mx-3 fx-2 hover" icon={faFacebook} />
                <FontAwesomeIcon className="btn text-secondary fs-2 mx-3 fx-2 hover" icon={faTelegram} />
                <FontAwesomeIcon className="btn text-secondary fs-2 mx-3 fx-2 hover" icon={faTwitter} />
                <FontAwesomeIcon className="btn text-secondary fs-2 mx-3 fx-2 hover" icon={faInstagram} />
            </div>
            <span>&copy;Copyright: <a href="/">Afrisolvers</a></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
