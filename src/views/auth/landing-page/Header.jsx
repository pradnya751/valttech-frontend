import React from 'react';
// import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="top-bar">
        <p>Explore 5000+ new Jobs*</p>
      </div>
      <nav className="navbar">
        <div className="logo">
          <h1>Job Portal</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#jobs">Jobs</a></li>
          <li><a href="#companies">Companies</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
        <div className="auth-buttons">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
