import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <div className="row">
           
            <div className="col-12 col-md-3 col-lg-3">
              <h3><i class='bx bx-briefcase text-white pe-2' ></i>Logo </h3>
             <div className="d-flex flex-column justify-content-between">
             <p className='text-white mt-4'>
              Quis enim pellentesque viverra tellus eget malesuada facilisis. Congue nibh vivamus aliquet nunc mauris dui nullam et.
              </p>
              <div className="d-flex gap-3 mt-4">
                <div className="social-icons"><i class='bx bxl-facebook' ></i></div>
                <div className="social-icons"><i class='bx bxl-linkedin' ></i></div>
                <div className="social-icons"><i class='bx bxl-instagram' ></i></div>
              </div>
             </div>
            </div>

            <div className="col-12 col-md-3 col-lg-3">
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#team">Our Team</a>
                </li>
                <li>
                  <a href="#team">Partners</a>
                </li>
                <li>
                  <a href="#team">Gallery</a>
                </li>
                <li>
                  <a href="#team">Blog</a>
                </li>
                <li>
                  <a href="#candidates">For Candidates</a>
                </li>
                <li>
                  <a href="#employers">For Employers</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-3 col-lg-3">
              <h3>Job Categories</h3>
              <ul>
                <li>
                  <a href="#tech">Telecomunications</a>
                </li>
                <li>
                  <a href="#hotels">Hotels & Tourism</a>
                </li>
                <li>
                  <a href="#construction">Construction</a>
                </li>
                <li>
                  <a href="#education">Education</a>
                </li>
                <li>
                  <a href="#financial-services">Financial Services</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-3 col-lg-3">
              <h3>Newsletter</h3>
              <span className="my-2">
              Eu nunc pretium vitae platea. Non netus elementum vulputate 
              </span>
              <div className="input my-3">
                <input type="email" className='px-3 py-2 w-100' placeholder='Email Address' />
              </div>
              <div className="button my-3">
                <button className='btn btn-successs w-100 btn-hover'>Subscribe now</button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to receive the latest job postings and updates.</p>
          <input type="email" placeholder="Your Email Address" />
          <button>Subscribe Now</button>
        </div> */}
      </div>
      <div className="footer-bottom">
        <p>&copy; Job Portal 2024. Design by Valt Tech.</p>
        <div className="social-icons">
          <a href="#privacy-policy">Privacy Policy</a>
          <a href="#Terms-Conditions">Terms & Conditions</a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
