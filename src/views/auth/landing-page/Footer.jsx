import React from 'react';


const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><a href="#candidates">For Candidates</a></li>
            <li><a href="#employers">For Employers</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Job Categories</h3>
          <ul>
            <li><a href="#tech">Tech</a></li>
            <li><a href="#marketing">Marketing & Tutorials</a></li>
            <li><a href="#healthcare">Healthcare</a></li>
            <li><a href="#finance">Finance</a></li>
          </ul>
        </div>
        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to receive the latest job postings and updates.</p>
          <input type="email" placeholder="Your Email Address" />
          <button>Subscribe Now</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Job Portal 2024. Design by Valt Tech.</p>
        <div className="social-icons">
          <a href="#facebook">Facebook</a>
          <a href="#twitter">Twitter</a>
          <a href="#linkedin">LinkedIn</a>
          <a href="#instagram">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
