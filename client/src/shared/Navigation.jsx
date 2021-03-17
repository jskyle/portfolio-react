import React from 'react';
import './styles/Navigation.sass';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { UncontrolledTooltip } from 'reactstrap';

const Navigation = ({ type = false }) => (
  <nav className={type ? 'primary' : 'secondary'}>
    <Link to="/"><h4 className="secondary-title "><span className="left">Kyle Kearney</span></h4></Link>
    <ul>
      <li>
        <ScrollLink activeClass="active" className="nav-link" to="about-section" spy smooth offset={-200} duration={1400}>
          <span className="left">about</span>
        </ScrollLink>
      </li>
      <li>
        <ScrollLink activeClass="active" className="nav-link" to="work-section" spy smooth offset={-200} duration={1400}>
          <span className="left">work</span>
        </ScrollLink>
      </li>
      <li>
        <ScrollLink activeClass="active" className="nav-link" to="skills-section" spy smooth offset={-200} duration={1400}>
          <span className="left">skills</span>
        </ScrollLink>
      </li>
      <li>
        <Link activeClassName="active" className="nav-link" to="/my-blog">
          <span className="left">blog</span>
        </Link>
      </li>
      <li id="connect-link">
        <ScrollLink activeClass="active" className="nav-link" to="connect-section" spy smooth offset={-200} duration={1400}>
          <span className="left">connect</span>
        </ScrollLink>
        <UncontrolledTooltip autohide={false} target="connect-link" placement="bottom" id="contact-tooltip">
          <ul>
            <li className="contact-tooltip-item left"><a href="mailto:hello@kyledarrion.com?subject=Howdy!">email</a></li>
            <li className="contact-tooltip-item left">
              {' '}
              <a href="https://github.com/kyledkearney" target="_blank" rel="noreferrer">github</a>
            </li>
            <li className="contact-tooltip-item left"><a href="https://instagram.com/kyledarrion" target="_blank" rel="noreferrer">instagram</a></li>
          </ul>
        </UncontrolledTooltip>
      </li>
    </ul>
  </nav>
);

export default Navigation;
