import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        <a href="#home" className="logo">John.</a>

        <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle Navigation">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'show-menu' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>

        <div className="social-icons desktop-only">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
