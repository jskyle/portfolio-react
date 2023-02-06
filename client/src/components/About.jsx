import React from "react";
import styled from "styled-components";

import { UncontrolledTooltip } from "reactstrap";
import { Emoji } from "../utils";

const Bold = styled.strong`
  font-weight: 600;
  letter-spacing: -0.3px;

  cursor: ${(props) => props.pointer || "initial"};

  &.left:before {
    cursor: pointer;
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 2px;
    left: 0;
    background-color: #000000;
    visibility: visible;
    transition: all 0.3s ease-in-out;
  }
`;

const StyledToolTip = styled(UncontrolledTooltip)`

  div.tooltip-inner {
    background-color: #ffffff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  };

  div.tooltip {
    background-color: transparent !important;
    opacity 1 !important;
  };

  span, ul {
    font-family: 'Manrope', sans-serif !important;
    font-weight: 600 !important;
    color: black;
  };

  ul {
    text-align: left;
    margin-bottom: 0px;
  }
`;



const About = () => (
  <section id="about-section">
    <h2 className="section-head">about</h2>
    <div className="about-body">
      <p>
        Hi there! <Emoji symbol="👋 " label="wave" id="cliche-wave" />
        My name is Kyle Kearney! I am a <Bold>front end engineer</Bold>,
        Certified Scrum Master, lover of books and quirky economic facts. I am
        currently working as a lead front end engineer remotely for a sms lead
        generation SaaS platform. My day to day tasks include{" "}
        <Bold>designing our system architecture</Bold> and{" "}
        <Bold>overseeing the work of 12 engineers</Bold>. I have had the
        pleasure of working with a large variety of companies over my{" "}
        <Bold>6+ year career</Bold> From managing Splunk's web effort for their{" "}
        <a
          href="https://conf.splunk.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          yearly conference
        </a>{" "}
        and global campaigns.
        <Bold id="shopify-flex">
          Developing Shopify apps seen by millions everyday
        </Bold>
        , to <Bold>enterprise systems for nation wide organizations.</Bold> I
        have had the pleasure of being a part of some wonderful teams.
      </p>
      <p>
        While many of my professional roles have been{" "}
        <Bold className="left" id="frontend">
          front end
        </Bold>{" "}
        focused. I bring a well rounded skillset to the table including Scrum
        Certifications
        <Bold className="left" id="database">
          database technologies
        </Bold>
        ,{" "}
        <Bold className="left" id="backend">
          backend languages
        </Bold>{" "}
        and 3 years managing teams and projects. I hold a{" "}
        <Bold>certificate</Bold> for <Bold>full stack development</Bold> from
        the <Bold>University of Denver.</Bold> I love working on challenging,
        high demand and high impact projects. Tight deadlines and high energy
        environments cultivate my energy. I work best under the proverbial{" "}
        <Emoji symbol="🔫" label="gun" id="gun" /> you could say.
      </p>
      <p>
        Outside of my current role you can find me{" "}
        <Bold>developing apps and games</Bold>, cooking or training for my first
        triathlon. I am up early, reading a lot of{" "}
        <Emoji symbol="📚" label="books" id="books" />, and{" "}
        <Emoji symbol="🧘🏻‍♂️" label="yoga" id="yoga" />
        -ing like there is no tomorrow. You can{" "}
        <Bold>checkout my current projects</Bold> on my{" "}
        <a
          href="https://github.com/jskyle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Bold className="left" pointer="pointer">
            GitHub.
          </Bold>
        </a>{" "}
        As I finish them you can find them down below in my . If you have a
        question, looking for a{" "}
        <Emoji symbol="🧑🏻‍💻" label="developer" id="developer" />, or a friend feel
        free to{" "}
        <a href="mailto:hello@kyleswork.com">
          <Bold className="left" pointer="pointer">
            reach out
          </Bold>
        </a>
        .
      </p>
      <p>Dream big, do good.</p>
    </div>
    <StyledToolTip placement="top" target="cliche-wave">
      <span>Cliche wave emoji!</span>
    </StyledToolTip>
    <StyledToolTip placement="top" target="books">
      <span>1 book a week!</span>
    </StyledToolTip>
    <StyledToolTip placement="top" target="yoga">
      <span>Very amateur yogi</span>
    </StyledToolTip>
    <StyledToolTip placement="top" target="gun">
      <span>Nerf gun preferably.</span>
    </StyledToolTip>
    <StyledToolTip placement="top" target="developer">
      <span>#self-portrait</span>
    </StyledToolTip>
    <StyledToolTip placement="top" target="database">
      <ul>
        <li>PostgreSQL</li>
        <li>Azure</li>
        <li>MongoDB</li>
        <li>MySQL</li>
      </ul>
    </StyledToolTip>
    <StyledToolTip placement="top" target="backend">
      <ul>
        <li>Node</li>
        <li>Python</li>
        <li>Ruby</li>
      </ul>
    </StyledToolTip>
    <StyledToolTip placement="top" target="frontend">
      <ul>
        <li>HTML</li>
        <li>SASS</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Angular</li>
        <li>Bootstrap</li>
      </ul>
    </StyledToolTip>
  </section>
);

export default About;
