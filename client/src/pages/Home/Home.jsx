import React from 'react'
import { Link } from "react-router-dom"
import { Work, Skills, Connect } from "./components/index";
import { Landing, TextSection } from "../../shared"
import ReactRotatingText from "react-rotating-text";

const Home = (props) => {
  props.setHomeNav(true)

  const subTitles = ["front end web developer", "software engineer", "ui engineer", "react artisan", "digital creator", "book worm", "economics enthusiast"];


  return (
    <div>
      <Landing type="home">
        <h1>Kyle Kearney</h1>
        <h6 className="sub-header rotate-1">
          <ReactRotatingText items={subTitles}/>
        </h6>
      </Landing>
      <TextSection title="about">
        <p>Kyle Kearney is a competent front end developer with 5 years of experience currently based in Denver, Colorado. Throughout his experience he has had the pleasure of experiencing all the web development realm has had to offer. From small agencies and start ups to freelancing for large companies and working for large SASS applications. A well rounded individual not only highly skilled in technical matters, but also soft skills like project management and communication.</p>
        <p>With a certificate for full stack development from the University of Denver, Kyle brings an grass roots education new meaning. Always searching for better practices and methods, he is focused on producing the best result every time. Highly compassionate and pragmatic, reducing friction, improving automation, and connecting with people are his guiding values.</p>
        <p>Self creation are self improvement are woven into his DNA. Up at 4 am every day to seize each second. From training, yoga, to learning new skills. A fan of challenges, and pushing the boundaries of what is possible guides his life. While structure and order are how he bases his life, he always welcome new and different challenges and experiences.</p>
      </TextSection>
      <Work>
        <ul id="case-study-links-container">
          <li className="case-study-links">
            <Link to="/case-study/1"><span className="left">Light Nostalgia</span></Link>
          </li>
          <li className="case-study-links">
            <Link to="/case-study/2"><span className="left">Pom</span></Link>
          </li>
          <li className="case-study-links">
            <Link to="/case-study/3"><span className="left">Luca</span></Link>
          </li>
          <li className="case-study-links">
            <Link to="/case-study/4"><span className="left">Posh Photo</span></Link>
          </li>
          <li className="case-study-links">
            <Link to="/case-study/5"><span className="left">Personal Blog</span></Link>
          </li>

        </ul>
      </Work>
      <Skills/>
      <Connect/>
    </div>
  )
}

export default Home
