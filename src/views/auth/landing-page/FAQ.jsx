
import React from "react";
import Character from "../../../assets/images/Character.png";

const FAQ = () => {
  return (
    <div className=" faq-main container-fluid py-5 d-flex-wrap">
      <div className="faq-container p-4 rounded shadow-sm d-flex-column">
        {/* FAQ Section */}
        <h2 className="mb-3">FAQ Section</h2>
        <h4 className="fw-bold">Got Questions? We’ve Got Answers!</h4>
        <p>
          Navigate HireFast with confidence! Our FAQ section addresses common
          queries to ensure you have a smooth experience. Find the answers you
          need and get back to what matters most—your career!
        </p>
        <hr />
        <div className="info" >
        {/* Security and Privacy Section */}
        <div>
          <h4 className="fw-bold">Security and Privacy Assurances</h4>
          <p className="fw-bold">Your Safety, Our Priority!</p>
          <p>
            Rest easy knowing that your information is secure with us. HireFast
            employs robust security measures and strict privacy policies to
            protect your data. Your trust is our top priority!
          </p>
          <div className="image-set">
          <div className="text-end mt-4">
          <img
            src={Character}
            alt="Security Illustration"
            className="img-fluid"
            // style={{ maxWidth: "200px" }}
          />
        </div>
    </div>
          <p>
            <strong>Stay Connected!</strong> Join the conversation and connect
            with us on social media! Follow us for the latest updates, career
            tips, and community stories. Let’s build a thriving network
            together!
          </p>
        </div>
      </div>
</div>
      

      {/* Resources Section */}
      <div className="mt-5 p-4 ">
        <h3 className="text-center mb-5">Resources And Type Of Work</h3>
        <div className="d-flex justify-content-around flex-wrap">
          <button className="btn  py-3">Interview Questions</button>
          <button className="btn py-3">Resume Tips</button>
          <button className="btn  py-3">Career Development</button>
          <button className="btn  py-3">Job Market Trends</button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
