import React from 'react'
import './styles/Navigation.sass';
import { Link } from "react-router-dom"


const Navigation = ({ type = false }) => {

    return (
      <nav className={type ? "primary" : "secondary"}>
        <Link to="/"><h4 className="secondary-title">Kyle Kearney</h4></Link>
        <ul>
          <li>
            <Link activeClassName="active" className="nav-link left" to="/#about-section">
              about
            </Link>
          </li>
          <li>
            <Link activeClassName="active" className="nav-link left" to="/#work-section">
              work
            </Link>
          </li>
          <li>
            <Link activeClassName="active" className="nav-link left" to="/#skills-section">
              skills
            </Link>
          </li>
          <li>
            <Link activeClassName="active" className="nav-link left" to="/my-blog">
              blog
            </Link>
          </li>
          <li>
            <Link activeClassName="active" className="nav-link left" to="/#connect-section">
              connect
            </Link>
          </li>
        </ul>
      </nav>
    )

}

export default Navigation;
