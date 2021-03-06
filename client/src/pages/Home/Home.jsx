import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { Work, Skills, Connect } from "./components/index";
import { Landing, TextSection } from "../../shared"
import axios from "axios";

const Home = (props) => {

  props.setHomeNav(true)

  useEffect(() => {
    axios.get('/api/hello').then(res => console.log(res.data)).catch(() => console.log("error"))
  }, [])

  return (
    <div>
      <Landing type="home">
        <h1>Kyle Kearney</h1>
        <h6>front end web developer</h6>
      </Landing>
      <TextSection title="about">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </TextSection>
      <Work>
        <ul id="case-study-links-container">
          <li className="case-study-links">
            <Link className="left" to="/case-study/1">Light Nostalgia</Link>
          </li>
          <li className="case-study-links">
            <Link className="left" to="/case-study/2">Pom</Link>
          </li>
          <li className="case-study-links">
            <Link className="left" to="/case-study/3">Luca</Link>
          </li>
          <li className="case-study-links">
            <Link className="left" to="/case-study/4">Posh Photo</Link>
          </li>
          <li className="case-study-links">
            <Link className="left" to="/case-study/5">Personal Blog</Link>
          </li>

        </ul>
      </Work>
      <Skills/>
      <Connect/>
    </div>
  )
}

export default Home
