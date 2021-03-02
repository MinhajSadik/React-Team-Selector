import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import footerLogo from '../../images/my-logo.png';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="py-5">
            <div className="container">
                <div className="footer-logo">
                    <img className="img-fluid" src={footerLogo} alt="" />
                </div>
                <p className="mb-0 text-center mh-mt-50">
                    Copyright © <span id="year">2021</span> All rights reserved | This template is made with
          <span className="mx-2 text-danger">
                        <>
                            <FontAwesomeIcon icon={faCoffee} />
                        </>
                    </span>
          by
          <a className="text-danger ml-2" href="http://cleverlearnerz.com">
                        MinhajSadik
          </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
