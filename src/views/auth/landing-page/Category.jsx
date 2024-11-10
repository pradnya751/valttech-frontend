import React from 'react';
import Graphics from '../../../assets/images/auth/landing-page/pen-nib.png';
function Category() {
  const data = [
    {
      id: 1,
      icon: 'bxs-pen',
      title: 'Graphics & Design',
      opening: '357 Open position'
    },
    {
        id: 2,
        icon: 'bx-code-alt',
        title: 'Code & Programing',
        opening: '312 Open position'
      },
      {
        id: 3,
        icon: 'bxs-megaphone',
        title: 'Digital Marketing',
        opening: '297 Open position'
      },
      {
        id: 4,
        icon: 'bxs-slideshow',
        title: 'Video & Animation',
        opening: '247 Open position'
      },
      {
        id: 5,
        icon: 'bxs-music',
        title: 'Music & Audio',
        opening: '204 Open position'
      },
      {
        id: 6,
        icon: 'bx-bar-chart-alt-2',
        title: 'Account & Finance',
        opening: '167 Open position'
      },
      {
        id: 7,
        icon: 'bxs-first-aid',
        title: 'Health & Care',
        opening: '125 Open position'
      },
      {
        id:8,
        icon: 'bxs-data',
        title: 'Data & Science',
        opening: '57 Open position'
      },
  ];
  return (
    <div className="my-5">
      <div className="d-flex justify-content-between">
        <h3 className="section-title">Popular Category</h3>
        <button className="view-all py-2 px-3">View All <i class='bx bx-right-arrow-alt' ></i></button>
      </div>
    <div className="row">
    {data.map((item) => (
        
        <div className="col-12 col-md-4 col-lg-3 col-xl-3 mt-4" key={item.id}>
          <div className="d-flex gap-5 wrapper p-4">
              <div className="img-container text-center flex-grow-0">
              <i class={`bx ${item.icon}`}></i>
              </div>
              <div className="title flex-grow-1">
                  <p className='mb-1'>{item.title}</p>
                  <span>{item.opening}</span>
              </div>
          </div>
        </div>
      
    ))}
    </div>
      
    </div>
  );
}

export default Category;
