import React from 'react';
import Card from 'react-bootstrap/Card';
import Logo from '../../../assets/images/auth/landing-page/Logo.png';
function RecentJobs() {
  const data = [
    {
      id: 1,
      title: 'Forward Security Director',
      subTitle: 'Bauch, Schuppe and Schulist Co',
      time: '10 min ago',
      business: 'Hotels & Tourism',
      jobType: 'Full time',
      salary: '$40000-$42000',
      location: 'New-York, USA'
    },
    {
      id: 2,
      title: 'Forward Security Director',
      subTitle: 'Bauch, Schuppe and Schulist Co',
      time: '10 min ago',
      business: 'Hotels & Tourism',
      jobType: 'Full time',
      salary: '$40000-$42000',
      location: 'New-York, USA'
    },
    {
      id: 3,
      title: 'Forward Security Director',
      subTitle: 'Bauch, Schuppe and Schulist Co',
      time: '10 min ago',
      business: 'Hotels & Tourism',
      jobType: 'Full time',
      salary: '$40000-$42000',
      location: 'New-York, USA'
    },
    {
      id: 4,
      title: 'Forward Security Director',
      subTitle: 'Bauch, Schuppe and Schulist Co',
      time: '10 min ago',
      business: 'Hotels & Tourism',
      jobType: 'Full time',
      salary: '$40000-$42000',
      location: 'New-York, USA'
    },
    {
      id: 5,
      title: 'Forward Security Director',
      subTitle: 'Bauch, Schuppe and Schulist Co',
      time: '10 min ago',
      business: 'Hotels & Tourism',
      jobType: 'Full time',
      salary: '$40000-$42000',
      location: 'New-York, USA'
    },
    {
      id: 6,
      title: 'Forward Security Director',
      subTitle: 'Bauch, Schuppe and Schulist Co',
      time: '10 min ago',
      business: 'Hotels & Tourism',
      jobType: 'Full time',
      salary: '$40000-$42000',
      location: 'New-York, USA'
    }
  ];
  return (
    <div className="job-wrapper">
      <div className="row">
        {data?.map((item) => (
          <div className="col-12">
            <Card className="rounded-4 mb-3">
              <Card.Body>
                <Card.Title>
                  <div className="d-flex justify-content-between">
                    <div className="time">
                      <span className="badge py-2">{item.time}</span>
                    </div>
                    <div className="bookmark">
                      <i class="bx bx-bookmark-plus"></i>
                    </div>
                  </div>
                </Card.Title>
                <div className="d-flex gap-3 my-3">
                  <div className="img">
                    <img src={Logo} alt="" />
                  </div>
                  <div className="title">
                    <h3 className="t">{item.title}</h3>
                    <h4 className="">{item.subTitle}</h4>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                  <div className="footer d-flex gap-3 align-items-center flex-wrap">
                    <div className="d-flex align-items-center flex-wrap">
                      <i class="bx bx-briefcase"></i>
                      <span className="px-2">{item.business}</span>
                    </div>
                    <div className="d-flex align-items-center flex-wrap">
                      <i class="bx bx-time-five"></i>
                      <span className="px-2">{item.jobType}</span>
                    </div>
                    <div className="d-flex align-items-center flex-wrap">
                      <i class="bx bx-wallet-alt"></i>
                      <span className="px-2">{item.salary}</span>
                    </div>
                    <div className="d-flex align-items-center flex-wrap">
                      <i class="bx bxs-map"></i>
                      <span className="px-2">{item.location}</span>
                    </div>
                  </div>
                  <div className="btn px-0">
                    <button className="btn btn-success">Job Details</button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentJobs;
