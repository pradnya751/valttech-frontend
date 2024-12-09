import React from "react";


const ResourcesAndGuides = () => {
  return (
    <div className="resources-and-guides-container container my-5">
      {/* Resources and Guides Section */}
      <div className="resources-guides-section rounded">
        <div className="row align-items-center p-4">
          {/* Left Text Content */}
          <div className="col-md-8">
            <h2 className="highlighted-heading">Resources and Guides</h2>
            <p className="description-text">
              Empower Your Journey with HireFast’s Resources. At HireFast, we
              offer essential tools and insights for both candidates and
              recruiters to enhance their experiences.
            </p>
          </div>
          {/* Right Image */}
          <div className="col-md-4 text-center">
            <img
              src="path-to-your-image.jpg"
              alt="Resources"
              className="img-fluid resource-img"
            />
          </div>
        </div>
        <div className="row p-4">
          {/* Left Column */}
          <div className="col-md-6">
            <div className="content-box mb-4">
              <h5 className="fw-bold">For Candidates</h5>
              <ul className="list-unstyled">
                <li>
                  <strong>Resume Tips:</strong> Craft standout resumes with key
                  sections and formatting advice.
                </li>
                <li>
                  <strong>Interview Prep:</strong> Get ready with common
                  questions, body language tips, and follow-up strategies.
                </li>
                <li>
                  <strong>Career Development:</strong> Access articles on skill
                  enhancement and networking.
                </li>
                <li>
                  <strong>Job Market Trends:</strong> Stay updated on in-demand
                  skills and salary expectations.
                </li>
              </ul>
            </div>
            <div className="content-box">
              <h5 className="fw-bold">For Recruiters</h5>
              <ul className="list-unstyled">
                <li>
                  <strong>Job Descriptions:</strong> Write compelling
                  descriptions that attract top talent.
                </li>
                <li>
                  <strong>Screening Strategies:</strong> Efficiently evaluate
                  resumes and conduct effective interviews.
                </li>
                <li>
                  <strong>Diversity Insights:</strong> Implement inclusive
                  hiring practices.
                </li>
                <li>
                  <strong>Recruitment Metrics:</strong> Use data to refine your
                  hiring strategies.
                </li>
              </ul>
            </div>
          </div>
          {/* Right Column */}
          <div className="col-md-6">
            <div className="content-box">
              <h5 className="fw-bold">Featured Guides</h5>
              <ul className="list-unstyled">
                <li>
                  <strong>Remote Work Tips:</strong> Navigate remote
                  opportunities and team management.
                </li>
                <li>
                  <strong>Personal Branding:</strong> Enhance your online
                  presence and networking.
                </li>
              </ul>
              <button className="explore-button btn btn-primary mt-3">
                Explore Our Resources Today!
              </button>
              <p className="small mt-3">
                Whether you’re seeking or looking to hire, our guides are here
                to help you succeed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AI-Powered Job Suggestions Section */}
      <div className="ai-job-suggestions-section container rounded py-4 mt-5">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-md-6 text-center">
            <img
              src="path-to-ai-image.jpg"
              alt="AI Suggestions"
              className="img-fluid"
            />
          </div>
          {/* Right Column */}
          <div className="col-md-6">
            <h3 className="fw-bold">AI-Powered Job Suggestions</h3>
            <p className="description">
              Unlock a world of opportunities with our AI-powered job
              suggestions. Tailored to your unique skills and preferences, our
              smart technology connects you to roles that match your career
              aspirations.
            </p>
            <p className="description">
              Say goodbye to endless searching and hello to your dream job!
            </p>
            <button className="btn btn-primary">Know More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesAndGuides;
