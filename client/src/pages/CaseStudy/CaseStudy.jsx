/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { ImageContainer, Landing, TextSection } from '../../shared';

const CaseStudy = (props) => {
  // let { id } = useParams();
  // props.setHomeNav(false);
  
  return (
    <div>
      <Landing type="case-study">
        <h5>Case Study:</h5>
        <h1>Light Nostalgia</h1>
      </Landing>
      <TextSection>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </TextSection>
      <TextSection title="stack">
        <p>Shopify</p>
      </TextSection>
      <ImageContainer />
      <TextSection title="purpose">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </TextSection>
      <Row>
        <Col>
          <Row>
            <ImageContainer />
          </Row>
          <Row>
            <ImageContainer />
          </Row>
        </Col>
        <Col>
          <ImageContainer />
        </Col>
      </Row>
      <Row>
        <TextSection title="other projects">
          <ul>
            <li>
              <Link to="/">Link 1</Link>
            </li>
            <li>
              <Link to="/">Link 2</Link>
            </li>
            <li>
              <Link to="/">Link 3</Link>
            </li>
            <li>
              <Link to="/">Link 4</Link>
            </li>
          </ul>
        </TextSection>
      </Row>
    </div>
  );
};

export default CaseStudy;
