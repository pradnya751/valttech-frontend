import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Category from './Category';
import RecentJobs from './RecentJobs';
import RecentJobE from './RecentJobE';
import { useState } from 'react';
import TopCompanies from './TopCompanies';
import TestimonialCarousel from './TestimonialCarousel';
import FeaturedEmployer from './FeaturedEmployer';
import Candidateshowcase from './Candidateshowcase';
//  import ResourcesAndGuides from './ResourcesAndGuides';
import WhyWorkWithUs from './WhyWorkWithUs';
import WebinarAndNews from './WebinarAndNews';
import KnowMore from './KnowMore';
import FAQ from './FAQ';

function index() {
  const [activeTab, setActiveTab] = useState('Jobs');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="app-container">
      <Header />
      <main className="main-content mx-5">
        <Category />
      <FeaturedEmployer />  
      <Candidateshowcase />
      
        <div className="jobs">
          <div className="active-job d-flex gap-5 my-5">
            <p className={activeTab === 'Jobs' ? 'active-tab' : ''} onClick={() => handleTabClick('Jobs')}>
              Jobs
            </p>
            <p className={activeTab === 'Companies' ? 'active-tab' : ''} onClick={() => handleTabClick('Companies')}>
              Companies
            </p>
            <p className={activeTab === 'Employer' ? 'active-tab' : ''} onClick={() => handleTabClick('Employer')}>
              Employer
            </p>
          </div>
          <div className="job-wrapper">
            <div className="main-title">
              <h3 className="mb-4">Recent Jobs Available</h3>
              <div className="card-wrapper">
                <div className="row">
                  <div className="col-12 col-lg-9 col-md-9">
                    <div className="tab-content">
                      {activeTab === 'Jobs' && <RecentJobs />}
                      {activeTab === 'Companies' && <div>Content for Companies</div>}
                      {activeTab === 'Employer' && <div>Content for Employer</div>}
                    </div>
                  </div>
                  <div className="col-12 col-lg-3 col-md-3">
                    <div className="d-flex flex-column">
                      <RecentJobE />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5">
        {/* <ResourcesAndGuides />  */}
       
        <KnowMore />
        <TopCompanies />
        </div>
        {/* <WebinarAndNews /> */}
        <div className="my-5">
          <div className="heading my-5">
            <h3 className='text-center'>Success Stories and User Testimonials</h3>
          </div>
          <TestimonialCarousel />
        </div>
      </main>
      <FAQ />
      <WhyWorkWithUs />
      <Footer />
    </div>
  );
}

export default index;
