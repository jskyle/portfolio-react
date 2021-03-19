/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable-next-line */
import React, { useState } from 'react';
import './styles/Navigation.sass';
import { NavLink, Link } from 'react-router-dom';
// import { Link as ScrollLink } from 'react-scroll';
import {
  Button, UncontrolledTooltip, Row, Card,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faGithub, faLinkedin, faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { Divide as Hamburger } from 'hamburger-react';

const Navigation = ({ type }) => {
  const [navOpen, toggleNavOpen] = useState(false);

  const toggle = () => {
    toggleNavOpen(!navOpen);
  };

  const navScreen = (
    <nav className={`nav-container ${navOpen && 'open'}`}>
      <ul className="nav-list">
        <li>
          <NavLink activeClassName="active" className="nav-link" to="/portfolio" onClick={toggle}>
            <span className="left">portfolio</span>
          </NavLink>
        </li>
        {/* <li>
          <NavLink activeClass="active" className="nav-link" to="/#work-section">
            <span className="left">work</span>
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink activeClass="active" className="nav-link" to="skills-section">
            <span className="left">skills</span>
          </NavLink>
        </li> */}
        <li>
          <NavLink activeClassName="active" className="nav-link" to="/my-blog" onClick={toggle}>
            <span className="left">journal</span>
          </NavLink>
        </li>
        {/* <li id="connect-link">
          <NavLink activeClass="active" className="nav-link" to="connect-section" onClick={toggle}>
            <span className="left">connect</span>
          </NavLink>
        </li> */}
        <li>
          <Row id="nav-social-row">
            <a href="mailto:hello@kyledarrion.com?subject=Hi!">
              <Card className="connect-method-card email">
                <FontAwesomeIcon icon={faEnvelope} color="black" size="sm" />
              </Card>
            </a>
            <a href="https://github.com/kyledarrion">
              <Card className="connect-method-card github">
                <FontAwesomeIcon icon={faGithub} color="black" size="sm" />
              </Card>
            </a>
            <a href="https://www.linkedin.com/in/kyle-kearney-2b3b67b4/">
              <Card className="connect-method-card linkedin">
                <FontAwesomeIcon icon={faLinkedin} color="black" size="sm" />
              </Card>
            </a>
            <a href="https://instagram.com/kyledarrion" target="_blank" rel="noopener noreferrer">
              <Card className="connect-method-card instagram">
                <FontAwesomeIcon icon={faInstagram} color="black" size="sm" />
              </Card>
            </a>

            <a href="https://twitter.com/kyledarrion" target="_blank" rel="noopener noreferrer">
              <Card className="connect-method-card twitter">
                <FontAwesomeIcon icon={faTwitter} color="black" size="sm" />
              </Card>
            </a>
          </Row>
        </li>
      </ul>
    </nav>
  );
  return (
    <>
      <div className="header-bar primary">
        <Link to="/"><h4 className="secondary-title"><span className="left">{!type ? 'Kyle Kearney' : ''}</span></h4></Link>
        <Button className="header-bar-nav-button" color="link" onClick={toggle}><Hamburger toggle={toggle} toggled={navOpen} onToggle={toggle} hideOutline label="navigation menu" /></Button>
      </div>
      {navScreen}
    </>
  );
};

Navigation.propTypes = {
  type: PropTypes.bool,
};

Navigation.defaultProps = {
  type: false,
};

export default Navigation;
