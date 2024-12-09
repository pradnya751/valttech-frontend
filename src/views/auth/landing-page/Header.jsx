// import React from 'react';
// // import './Header.css';

// const Header = () => {
//   return (
//     <header>
//       <div className="top-bar">
//         <p>Explore 5000+ new Jobs*</p>
//       </div>
//       <nav className="navbar">
//         <div className="logo">
//           <h1>Job Portal</h1>
//         </div>
//         <ul className="nav-links">
//           <li><a href="#jobs">Jobs</a></li>
//           <li><a href="#companies">Companies</a></li>
//           <li><a href="#blog">Blog</a></li>
//           <li><a href="#contact">Contact Us</a></li>
//         </ul>
//         <div className="auth-buttons">
//           <button className="sign-in">Sign In</button>
//           <button className="sign-up">Sign Up</button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import { Navbar, Nav, Button, Form, FormControl, Container, Row, Col } from 'react-bootstrap';
import headImage from "../../../assets/images/headImage.png";


const Header = () => {
  return (
    <header className='py-0'>
      {/* Top Banner */}
      <div className="top-bar">
        <span>"Explore 5000+ new Jobs"</span>
      </div>

   {/* Navbar */}
  <Navbar bg="transparent" expand="lg" className="px-5 py-4">
        <Navbar.Brand href="#home" className="logo">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {/* Search Bar */}
            <Form className="d-flex me-3 position-relative" style={{ maxWidth: '300px' }}>
             <i className="bi bi-search position-absolute start-0 top-50 translate-middle-y text-secondary px-3"></i>
           <FormControl
                  type="search"
                  placeholder="Job title or company"
                  className="me-2 ps-5" 
                  aria-label="Search"
                 />
               </Form>

            {/* Links */}
            <Nav.Link href="#jobs" className="text mx-3">Jobs</Nav.Link>
            <Nav.Link href="#blogs" className="text mx-3">Blogs</Nav.Link>
            <Nav.Link href="#contact" className="text mx-3">Contact Us</Nav.Link>
            <Nav.Link href="#" className="text mx-3">
              <i className="bi bi-telephone"></i> (849) 970-9452
            </Nav.Link>
            <Nav.Link href="#" className="text mx-3">
              <i className="bi bi-envelope"></i> test@gmail.com
            </Nav.Link>
            <Nav.Link href="#" className="text mx-3">
              <i className="bi bi-bell-fill"></i> 
            </Nav.Link>
            
            {/* Authentication */}
            <Nav.Link href="#signin" className="text-primary mx-3">Sign In</Nav.Link>
            <Button className="ms-2 text-white bg-suc">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        
      <div className="banner text-center text-white d-flex align-items-center justify-content-center">
  {/* Unlock Your Future Section */}
  <Container fluid className="unlock-your-future container-border mx-5">
    <Row className="align-items-center justify-content-center">
      <Col lg={6} className="text-center text-lg-start">
        <h1 className="fw-bold">Unlock Your Future!</h1>
        <p className="lead">
          Explore hiring trends, discover companies hiring, find internships, and
          seize upskilling opportunities. Build your profile, enhance your personal
          brand, and earn certificates to stand out in the job market!
        </p>
        <Button className=" custom-btn  mt-3 ">Get Started</Button>
      </Col>
      <Col lg={6} className="text-center position-relative">
        <img
          src={headImage}
          alt="head"
          className="img-fluid rounded"
        />
      </Col>
    </Row>
    {/* Filters Section */}
    <Row className="filters-section justify-content-center mt-1">
  <Col xs={12} lg={10} className="filters-container border rounded py-1 px-2 bg-white shadow">
    <Form className="d-flex align-items-center justify-content-between flex-wrap">
      <Form.Control
        type="text"
        placeholder="Job Title or Company"
        className="filter-input mb-1"
      />
      <Form.Select className="filter-select mb-1">
        <option>Select Location</option>
      </Form.Select>
      <Form.Select className="filter-select mb-1">
        <option>Type of Work</option>
      </Form.Select>
      <Form.Select className="filter-select mb-1">
        <option>Category</option>
      </Form.Select>
      <Button variant="primary" className="search-btn">
      <i className="bi bi-search  text-white px-2"></i>
        Search Job
      </Button>
    </Form>
  </Col>
</Row>
  </Container>
</div>

    </header>
  );
};

export default Header;