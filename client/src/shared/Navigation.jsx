import React from 'react'
import './styles/Navigation.sass';
import { Link } from "react-router-dom";
import { UncontrolledTooltip } from 'reactstrap';


const Navigation = ({ type = false }) => {

    return (
      <nav className={type ? "primary" : "secondary"}>
        <Link to="/"><h4 className="secondary-title "><span className="left">Kyle Kearney</span></h4></Link>
        <ul>
          <li>
            <Link activeClassName="active" className="nav-link" to="/#about-section">
              <span className="left">about</span>
            </Link>
          </li>
          <li>
            <Link activeClassName="active" className="nav-link" to="/#work-section">
              <span className="left">work</span>
            </Link>
          </li>
          <li>
            <Link activeClassName="active" className="nav-link" to="/#skills-section">
              <span className="left">skills</span>
            </Link>
          </li>
          {/* <li>
            <Link activeClassName="active" className="nav-link left" to="/my-blog">
              blog
            </Link>
          </li> */}
          <li id="connect-link">
            <Link activeClassName="active" className="nav-link" to="/#connect-section">
              <span className="left">connect</span>
            </Link>
            <UncontrolledTooltip autohide={false} target="connect-link" placement="bottom" id="contact-tooltip">
                <ul>
                  <li className="contact-tooltip-item left"><a href="mailto:hello@kyledarrion.com?subject=Howdy!">email</a></li>
                  <li className="contact-tooltip-item left"> <a href="https://github.com/kyledkearney" target="_blank" rel="noreferrer">github</a></li>
                  <li className="contact-tooltip-item left"><a href="https://instagram.com/kyledarrion" target="_blank" rel="noreferrer">instagram</a></li>
                </ul>
            </UncontrolledTooltip>
          </li>
        </ul>
      </nav>
    )

}

export default Navigation;
