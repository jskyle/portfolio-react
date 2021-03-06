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
              <Col xl={6} md={6}>
                <FormGroup>
                  <Label for="connect-form-name-input" className="connect-form-input-label">name</Label>
                  <Input type="text" name="name" id="connect-form-name-input" placeholder="Super Awesome Person" value={formState.name} onChange={(value) => setFormState({...formState, name: value})} />
                </FormGroup>
                <FormGroup>
                  <legend className="col-form-label connect-form-input-label">preferred connect method</legend>
                  <FormGroup className="connect-form-radio-options-container">
                  <FormGroup check>
                    <Input type="radio" name="email-option" id="connect-form-radio-email-option" className="connect-form-radio-option-label" />
                    <Label for="connect-form-radio-email-option">email</Label>
                  </FormGroup>
                  <FormGroup check className="ml-4">
                    <Input type="radio" name="phone-option" id="connect-form-radio-phone-option" className="connect-form-radio-option-label" />
                    <Label for="connect-form-radio-phone-option">phone</Label>
                  </FormGroup>
                  </FormGroup>
                </FormGroup>
                <FormGroup>
                  <Label for="connect-form-email-input" className="connect-form-input-label">email</Label>
                  <Input type="email" name="name" id="connect-form-email-input" placeholder="you.are.great@gmail.com" value={formState.email} onChange={(value) => setFormState({ ...formState, email: value })} />
                </FormGroup>
                <FormGroup>
                  <Label for="connect-form-phone-input" className="connect-form-input-label" >phone</Label>
                    <Input type="tel" name="name" id="connect-form-phone-input" placeholder="(371) 352-6526" value={formState.phone} onChange={(value) => setFormState({ ...formState, phone: value })}/>
                </FormGroup>
              </Col>
              <Col xl={6} md={6}>
                <FormGroup>
                  <Label for="connect-form-message-area" className="connect-form-input-label">message</Label>
                  <Input type="textarea" name="name" id="connect-form-message-area" placeholder="Once upon a time..." value={formState.message}  onChange={(value) => setFormState({ ...formState, message: value })}/>
                </FormGroup>
              </Col>
            </Row>
            <Row className="connect-form-purpose-container">
              <Col>
              <Row>
                  <legend className="col-form-label connect-form-input-label">purpose</legend>
              </Row>
              </Col>
              <Col>
                <Row className="connect-form-purposes-row">
                  {buttonOptions.map((e) => (
                    <Button onClick={() => setFormState({...formState, purpose: e.value})}>
                      {e.label}
                    </Button>
                  ))}
                </Row>
              </Col>
            </Row>
            <Row>
              <Button block color="primary">Say Hi!</Button>
            </Row>
          </Form>
        </Row>
      </div>
    </div>
  )
}

export default Connect
