/* eslint-disable no-nested-ternary */
/* eslint-disable-next-line */
import React, { useState } from 'react';
import './styles/Connect.sass';
import {
  Form, Button, FormGroup, Input, Row, Col, Card,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub, faInstagram, faTwitter, faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';

const Connect = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('Initial');

  const handleSubmit = () => {
    axios.post('/api/message', formState).then((res) => {
      setStatus(res.data.status);
      setFormState({
        name: '',
        email: '',
        message: '',
      });

      setTimeout(() => {
        setStatus('Initial');
      }, 10000);
    });
  };

  const statusBody = (
    <div className="connect-status-body">
      { status === 'Sent' ? (
        <>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2" className="connect-svg">
            <circle className="path circle" fill="none" stroke="#73AF55" strokeWidth="6" strokeMiterlimit="10" cx="65.1" cy="65.1" r="62.1" />
            <polyline className="path check" fill="none" stroke="#73AF55" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
          </svg>
          <div className="status-message-container">
            <p className="success status-message">
              Hooray my code works!
              <br />
              {' '}
              I will connect with you by tomorrow.
            </p>
          </div>
        </>
      ) : status === 'Failed' ? (
        <>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2" className="connect-svg">
            <circle className="path circle" fill="none" stroke="#D06079" strokeWidth="6" strokeMiterlimit="10" cx="65.1" cy="65.1" r="62.1" />
            <line className="path line" fill="none" stroke="#D06079" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3" />
            <line className="path line" fill="none" stroke="#D06079" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2" />
          </svg>
          <p className="error status-message">
            Uh oh! Shit hit the fan!
            <br />
            {' '}
            Please try again later.
          </p>
        </>
      ) : null }
    </div>
  );

  return (
    <div id="connect-section">
      <div id="connect-head">
        <h4 className="section-head">connect</h4>
      </div>
      <div id="connect-body">
        <Row id="connect-method-row">
          <a href="mailto:hello@kyledarrion.com?subject=Hi!">
            <Card className="connect-method-card email">
              <FontAwesomeIcon icon={faEnvelope} color="black" size="1x" />
            </Card>
          </a>
          <a href="https://github.com/kyledarrion">
            <Card className="connect-method-card github">
              <FontAwesomeIcon icon={faGithub} color="black" size="1x" />
            </Card>
          </a>
          <a href="https://www.linkedin.com/in/kyle-kearney-2b3b67b4/">
            <Card className="connect-method-card linkedin">
              <FontAwesomeIcon icon={faLinkedin} color="black" size="1x" />
            </Card>
          </a>
          <a href="https://instagram.com/kyledarrion" target="_blank" rel="noopener noreferrer">
            <Card className="connect-method-card instagram">
              <FontAwesomeIcon icon={faInstagram} color="black" size="1x" />
            </Card>
          </a>

          <a href="https://twitter.com/kyledarrion" target="_blank" rel="noopener noreferrer">
            <Card className="connect-method-card twitter">
              <FontAwesomeIcon icon={faTwitter} color="black" size="1x" />
            </Card>
          </a>
        </Row>
        <Row className="w-100">
          { status === 'Initial' ? (
            <Form id="connect-form">
              <Row>
                <Col>
                  <FormGroup>
                    <Input
                      type="text"
                      name="name"
                      className="connect-form-input"
                      id="connect-form-name-input"
                      placeholder="Name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="email"
                      name="email"
                      className="connect-form-input"
                      id="connect-form-email-input"
                      placeholder="Email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input type="textarea" name="message" className="connect-form-input" id="connect-form-message-area" placeholder="Message" value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="connect-form-button-container">
                <Button className="connect-form-button" onClick={handleSubmit}>submit</Button>
              </Row>
            </Form>
          ) : statusBody }
        </Row>
      </div>
    </div>
  );
};

export default Connect;
