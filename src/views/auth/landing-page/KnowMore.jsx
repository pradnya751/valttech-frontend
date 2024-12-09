import React from "react";
 import TrendImage from "../../../assets/images/TrendImage.png"; 
 import BlogImage from "../../../assets/images/Blogimage.png"; 
 import OffersImage from "../../../assets/images/offersImage.png"; 

const KnowMore = () => {
  return (
    <div className="know-more-container p-5">
      <div className="row">
        {/* Interactive Hiring Trend Graphs Card */}
        <div className="col-md-4 mb-3">
          <div className="card h-100 text-center p-3">
            <img
              src={TrendImage}
              alt="Interactive Hiring Trend Graphs"
              className="card-img-top img-fluid"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">Interactive Hiring Trend Graphs</h5>
              <p className="card-text">
                <strong>Data at Your Fingertips!</strong> Make informed decisions with our interactive hiring trend graphs. Analyze real-time data on job market trends, in-demand skills, and hiring patterns.
              </p>
              <button className="btn btn-outline-primary btn-sm fw-bold">
                Know more
              </button>
            </div>
          </div>
        </div>

        {/* Blog or Articles Section Card */}
        <div className="col-md-4 mb-3">
          <div className="card h-100 text-center p-3">
            <img
              src={BlogImage}
              alt="Blog or Articles Section"
              className="card-img-top img-fluid"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">Blog or Articles Section</h5>
              <p className="card-text">
                <strong>Empower Your Journey!</strong> Dive into our blog and articles section for expert advice and insights. From career tips to industry news, our content is designed to inform and inspire you.
              </p>
              <button className="btn btn-outline-primary btn-sm fw-bold">
                Know more
              </button>
            </div>
          </div>
        </div>

        {/* Special Offers or Promotions Card */}
        <div className="col-md-4 mb-3">
          <div className="card h-100 text-center p-3">
            <img
              src={OffersImage}
              alt="Special Offers or Promotions"
              className="card-img-top img-fluid"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">Special Offers or Promotions</h5>
              <p className="card-text">
                <strong>Exclusive Deals Just for You!</strong> Enhance your HireFast experience with exclusive discounts and perks. Don’t miss out—check our promotions regularly!
              </p>
              <button className="btn btn-outline-primary btn-sm fw-bold">
                Know more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowMore;
