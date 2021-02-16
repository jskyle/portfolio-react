import React from 'react'
import './styles/Navigation.sass';
import { Link } from "react-router-dom"


const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link className="nav-link left" to="/#about">about</Link></li>
        <li><Link className="nav-link left" to="/#work">work</Link></li>
        <li><Link className="nav-link left" to="/#skills">skills</Link></li>
        <li><Link className="nav-link left" to="/my-blog">blog</Link></li>
        <li><Link className="nav-link left" to="/#contact">contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation;
