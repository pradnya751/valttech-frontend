import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
function RecentJobE() {
  return (
    <div>
         <Card className='mb-3 rounded-4'>
                <Card.Body>
                  <Card.Title className='mb-3 mt2'>📨  Email me for jobs</Card.Title>
                  <Card.Text>Ut esse eiusmod aute. Sit enim labore dolore. Aute ea fugiat commodo ea foes.</Card.Text>
                  <Form className="mt-3">
                  <Form.Group >
                    <Form.Control type="email" placeholder="name@gmail.com" />
                  </Form.Group>
                  <Button variant="success" className="my-3 w-100">Subcribe</Button>
                </Form>

                </Card.Body>
              </Card>
              <Card className='mb-3 rounded-4'>
                <Card.Body>
                  <Card.Title className='mb-3 mt2'>🚀 Get noticed faster</Card.Title>
                  <Card.Text>Quis eiusmod deserunt cillum laboris magna cupidatat esse labore irure quis cupidatat in.</Card.Text>
                  <Button variant="success" className="my-3 w-100">Upload your resume</Button>

                </Card.Body>
              </Card>
    </div>
  )
}

export default RecentJobE  