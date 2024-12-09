import React from "react";
import candidate from "../../../assets/images/candidate.png";


const Candidateshowcase = () => {
    return (
<div className="candidate-showcase container-fluid p-5">
  <div className="row align-items-center">
    {/* Text Section */}
    <div className="col-md-7">
      <h2 className=" mb-4">Excellent Candidate Showcase: Sarah M.</h2>
      <h5 className=" mb-3">Driven Marketing Specialist with a Passion for Storytelling</h5>
      <p>
        Meet Sarah, a results-oriented marketing specialist with over five years of experience in digital marketing and content creation. With a knack for crafting compelling narratives and a deep understanding of social media strategies, Sarah has consistently helped brands connect with their audiences.
      </p>
     <hr />
      <h6 className="fw-bold">Key Achievements:</h6>
      <ul className="list-unstyled mb-4">
        <li>• Increased social media engagement by 150% for a leading e-commerce brand.</li>
        <li>• Successfully led a rebranding campaign that resulted in a 30% increase in website traffic.</li>
        <li>• Certified in Google Analytics and SEO, with a proven track record of driving organic growth.</li>
      </ul>
    <hr />
      <h6 className="fw-bold">Why She Stands Out:</h6>
      <p>
        Sarah is not only skilled but also passionate about her work. Her innovative ideas and proactive approach make her a valuable asset to any marketing team.
      </p>
      <p>
        Interested in connecting with exceptional talent like Sarah? Explore more about our candidate showcases!
      </p>
    </div>

    {/* Image Section */}
    <div className="col-md-5 text-center">
      <div className="position-relative">
        <img
          src={candidate}
          alt="Candidate Illustration"
          className="img-fluid"
        />
        {/* Dots */}
        <div className="top-left-dot position-absolute"></div>
        <div className="bottom-right-dot position-absolute"></div>
      </div>
    </div>
  </div>
</div>
 );
};

export default Candidateshowcase;
