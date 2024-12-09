import React from 'react';
import empLogo from '../../../assets/images/auth/landing-page/emp-logo.png';
import { Card,Button } from 'react-bootstrap';
function TopCompanies() {
  const data = [
    {
      title: 'Dribbble',
      address: 'Dhaka, Bangladesh',
      openPosition: 'Open Position (3)',
      logo: empLogo,
      id:1
    },
    {
        title: 'Dribbble',
        address: 'Dhaka, Bangladesh',
        openPosition: 'Open Position (3)',
        logo: empLogo,
        id:2
      },
      {
        title: 'Dribbble',
        address: 'Dhaka, Bangladesh',
        openPosition: 'Open Position (3)',
        logo: empLogo,
        id:3
      },
      {
        title: 'Dribbble',
        address: 'Dhaka, Bangladesh',
        openPosition: 'Open Position (3)',
        logo: empLogo,
        id:4
      },
      {
        title: 'Dribbble',
        address: 'Dhaka, Bangladesh',
        openPosition: 'Open Position (3)',
        logo: empLogo,
        id:5
      },
      {
        title: 'Dribbble',
        address: 'Dhaka, Bangladesh',
        openPosition: 'Open Position (3)',
        logo: empLogo,
        id:6
      }
  ];
  return (
    <div className="top-companies">
      <h3 className="text-right">Top Hiring Companies</h3>

      <div className="row mt-5">
     {
        data?.map((item)=>(
            <div className="col-12 col-md-4 col-lg-4" key={item.id}>
          <Card className="rounded-4">
            <Card.Body>
               <div className="row">
                <div className="d-flex gap-3 flex-wrap">
                    <div className="img">
                    <img src={item.logo} alt="" />
                    </div>
                    <div className="d-flex flex-column ">
                       <div>
                       <span className='me-3 t'> {item.title}</span>
                       <span className="badge bg-danger-subtle text-danger rounded-5 px-3 py-1">Featured</span>
                       </div>
                        <div className="location mt-2">
                          <span><i class='bx bx-map me-1'></i></span>
                          <span>{item.address}</span>
                        </div>
                    </div>
                </div>
               </div>
              <Button variant="light" className="mt-3 w-100">
                {item.openPosition}
              </Button>
            </Card.Body>
          </Card>
        </div>
        ))
     }
      </div>
    </div>
  );
}

export default TopCompanies;
