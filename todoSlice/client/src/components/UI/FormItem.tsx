import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import postHooks from '../../hooks/postHook';

export default function FormItem():JSX.Element {
    const {addPostActionHandler} = postHooks()
  return (
    <Row className="mt-1">
    <Col>
      <Form onSubmit={addPostActionHandler} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Post</Form.Label>
          <Form.Control type="text" name="text" placeholder="post" />
        </Form.Group>
        <Button variant="light" type="submit">
          send
        </Button>
      </Form>
    </Col>
  </Row>
  )
}
