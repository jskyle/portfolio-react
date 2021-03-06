import React from 'react'
import "./Login.sass"
import { Form, Button, FormGroup, Label, Input, Row, Col, Card } from 'reactstrap';

const Login = () => {
  return (
    <div className="login-page-container">
      <Form className="login-form">
        <FormGroup>
          <Label for="login-form-email-input" className="login-form-input-label">username</Label>
          <Input type="text" name="name" id="login-form-email-input" placeholder="example"/>
        </FormGroup>
        <FormGroup>
          <Label for="login-form-password-input" className="login-form-input-label">password</Label>
          <Input type="password" name="name" id="login-form-password-input" placeholder="password"/>
        </FormGroup>
        <FormGroup>
          <Button block color="dark">Submit</Button>
        </FormGroup>
      </Form>
    </div>
  )
}

export default Login
