import React from "react";
import FImage from "../../../assets/images/FImage.png";

const FeaturedEmployer = () => {
  return (
    <div className="featured-container p-5">
      <h3 className="text-dark fw-bold text">Featured Employer: Innovate Corp</h3>

      <div className="row mt-4">
        {/* Left Section - Image */}
        <div className="col-md-4 position-absolute">
          <img
            src={FImage}
            alt="Innovate Corp"
            className="img-fluid rounded-circle employer-image"
          />
        </div>

        {/* Right Section - Text */}
        <div className="col-md-8">
          {/* Why Work With Us Section */}
          <div className="why-work-with-us mb-5">
            <h5 className="fw-bold">Why Work with Us?</h5>
            <ul className="list-unstyled">
              <li>
                <strong>Cutting-Edge Projects:</strong> Join a team that works
                on transformative projects that make a real impact.
              </li>
              <li>
                <strong>Career Development:</strong> We invest in our
                employees' growth through continuous training and mentorship
                programs.
              </li>
              <li>
                <strong>Inclusive Culture:</strong> We celebrate diversity and
                encourage a collaborative environment where every voice is
                heard.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Empowering Innovation Section */}
      <div className="empowering-talent-section mt-5 position-relative">
        <div className="empowering-talent text-white rounded py-4 px-4">
          <h5>Empowering Innovation through Talent</h5>
          <p>
            At Innovate Corp, we believe that great ideas come from great
            people. As a leading technology solutions provider, we are
            dedicated to fostering a culture of innovation and collaboration.
            Our team is passionate about pushing the boundaries of technology
            to deliver exceptional results for our clients.
          </p>
          <p>
            <hr />
            Explore current job openings and discover how you can be a part of
            our innovative journey!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedEmployer;
