import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';


const WebinarAndNews = () => {
  return (
    <Container className="webinar-container fluid p-5 ">
      <h2 className='mb-4'>Events And Webinars For You</h2>
      <Row className="mb-4">
        <Col md={4}>
          <Card className="text-center webinar-card">
            <Card.Body>
              <Card.Title>Become a Employers</Card.Title>
              <Card.Text>
                Cras in massa pellentesque, mollis ligula non, luctus dui. Morbi sed efficitur dolor. Pelque augue risus, aliqu.
              </Card.Text>
              <Button variant="primary">Register Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center resume-card">
            <Card.Body>
              <Card.Title>Do you want to improve your resume?</Card.Title>
              <Card.Text>
                Improve your resume and get the easy job. To get new opportunity just need to click on the below button.
              </Card.Text>
              <Button variant="primary">Improve My Resume</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center become-card">
            <Card.Body>
              <Card.Title>Become</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in massa pellentesque, mollis ligula non, luctus dui.
              </Card.Text>
              <Button variant="primary">Register Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className=" News-container text news-card ">
            <Card.Body>
              <Card.Title>News and Updates</Card.Title>
              <Card.Text>
                Stay updated with the latest news from HireFast! From new features to success stories, our news section keeps you informed about everything happening in our community. Check back often to see what's new!
              </Card.Text>
              <Button variant="primary">Know more</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WebinarAndNews;
