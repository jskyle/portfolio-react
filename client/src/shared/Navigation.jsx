import React from 'react'
import './styles/Navigation.sass';
import { Link } from "react-router-dom"


const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/#about">about</Link></li>
        <li><Link to="/#work">work</Link></li>
        <li><Link to="/#skills">skills</Link></li>
        <li><Link to="/my-blog">blog</Link></li>
        <li><Link to="/#contact">contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation;
