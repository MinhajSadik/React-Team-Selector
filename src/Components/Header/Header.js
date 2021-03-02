import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a href="https://fcb1.netlify.ap" className="navbar-brand">
                        <img src={logo} alt="Logo" /> 
          </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="home">
                                    Home
                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="home">
                                    Players
                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="home">
                                    Contact
                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
