import React, { useState } from 'react'
import './styles/Connect.sass';
import { Form, Button, FormGroup, Label, Input, Row, Col, Card } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Connect = (props) => {
  const [ formState, setFormState ] = useState({ 
    name: "",
    preferredContact: "",
    email: "",
    phone: "",
    purpose: "",
    message: "",
  });

  const buttonOptions = [
    {
      label: "Employment Opportunity",
      value: "job",
    },
    {
      label: "Freelance Project",
      value: "freelance",
    },
    {
      label: "Collaboration Idea",
      value: "collab",
    },
    {
      label: "Chit Chat",
      value: "other",
    },
  ]

  return (
    <div className="section-container">
      <div id="connect-head">
        <h4 className="section-head">connect</h4>
      </div>
      <div id="connect-body">
        <Row id="connect-method-row">
          <Col xl={3} className="connect-method-col">
            <Card className="connect-method-card">
              <FontAwesomeIcon icon={faEnvelope} color="black" size="2x"/>
              <p className="connect-method-card-label">hello@kyledarrion.com</p>
            </Card>
          </Col>
          <Col xl={3} className="connect-method-col">
            <Card className="connect-method-card">
              <FontAwesomeIcon icon={faGithub} color="black" size="2x" />
              <p className="connect-method-card-label">@kyledarrion</p>
            </Card>
          </Col>
          <Col xl={3} className="connect-method-col">
            <Card className="connect-method-card">
              <FontAwesomeIcon icon={faInstagram} color="black" size="2x" />
              <p className="connect-method-card-label">@kyledarrion</p>
            </Card>
          </Col>
        </Row>
        <Row className="w-100">
          <Form id="connect-form">
            <Row>
              <Col>
                <FormGroup>
                  {/* <Label for="connect-form-name-input" className="connect-form-input-label">name</Label> */}
                  <Input type="text" name="name" className="connect-form-input" id="connect-form-name-input" placeholder="Your Name" value={formState.name} onChange={(value) => setFormState({...formState, name: value})} />
                </FormGroup>
                <FormGroup>
                  {/* <Label for="connect-form-email-input" className="connect-form-input-label">email</Label> */}
                  <Input type="email" name="email" className="connect-form-input" id="connect-form-email-input" placeholder="Your Email" value={formState.email} onChange={(value) => setFormState({ ...formState, email: value })} />
                </FormGroup>
                <FormGroup>
                  {/* <Label for="connect-form-message-area" className="connect-form-input-label">message</Label> */}
                  <Input type="textarea" name="message" className="connect-form-input" id="connect-form-message-area" placeholder="Message" value={formState.message}  onChange={(value) => setFormState({ ...formState, message: value })}/>
                </FormGroup>
              </Col>
            </Row>
            <Row className="connect-form-button-container">
              <Button className="connect-form-button">submit</Button>
            </Row>
          </Form>
        </Row>
      </div>
    </div>
  )
}

export default Connect
