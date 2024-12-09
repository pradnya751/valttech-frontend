import React from 'react'

function WhyWorkWithUs() {
  return (
    <div className="why-work-section">
      <h2 className="section-title mb-6">Why Work With Us?</h2>
      <div className="row text-center g-24">
        <div className="col-md-4 p-5">
          <div className="icon-container ">
            <i className="icon bi bi-laptop"></i>
          </div>
          <h3 className="item-title">Cutting-Edge Projects</h3>
          <p className="item-description">
            Join a team that works on transformative projects that make a real impact.
          </p>
        </div>
        <div className="col-md-4 p-5">
          <div className="icon-container bg-dark">
            <i className="icon bi bi-briefcase"></i>
          </div>
          <h3 className="item-title">Career Development</h3>
          <p className="item-description">
            We invest in our employees' growth through continuous training and mentorship programs.
          </p>
        </div>
        <div className="col-md-4 p-5">
          <div className="icon-container">
            <i className="icon bi bi-rocket"></i>
          </div>
          <h3 className="item-title">Inclusive Culture</h3>
          <p className="item-description">
            We celebrate diversity and encourage a collaborative environment where every voice is heard.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhyWorkWithUs;