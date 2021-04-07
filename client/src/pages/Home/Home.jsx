/* eslint-disable max-len */
/* eslint-disable-next-line */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { UncontrolledTooltip } from 'reactstrap';
import { Link as ScrollLink } from "react-scroll";
import ReactRotatingText from 'react-rotating-text';
import { Work, Skills, Connect } from './components/index';
import { Landing, TextSection, PageMotionWrapper } from '../../shared';
import { Emoji } from '../../utils';


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
  };
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

const Home = () => {
  const subTitles = ['front end web developer', 'software engineer', 'ui engineer', 'react artisan', 'digital creator', 'book worm', 'economics enthusiast'];


  return (
    <PageMotionWrapper>
      <Landing type="home">
        <h1>Kyle Kearney</h1>
        <h6 className="sub-header rotate-1">
          <ReactRotatingText items={subTitles} />
        </h6>
      </Landing>
      <div id="about-section">
        <TextSection title="about">
          <p>Hi there! <Emoji symbol="👋 " label="wave" id="cliche-wave"/>My name is Kyle Kearney! I am a <Bold>developer</Bold>, designer, digital creator, lover of books and quirky economic facts. I am currently working remotely for a sms lead generation SaaS platform. My day to day tasks include <Bold>managing millions of records</Bold> and <Bold>developing pixel perfect components</Bold> in React. I have had the pleasure of working with a large variety of companies in my <Bold>5 years of experience.</Bold> From <Bold id="shopify-flex">Shopify apps seen by millions everyday</Bold>, to <Bold>enterprise systems for nation wide organizations.</Bold> I have had the pleasure of being a part of some wonderful projects.</p>
          <p>While many of my professional roles have been <Bold className="left" id="frontend">front end</Bold> focused. I bring a well rounded skillset to the table including <Bold className="left" id="database">database technologies</Bold>, <Bold className="left" id="backend">backend languages</Bold> and project management skills as well. I hold a <Bold>certificate</Bold> for <Bold>full stack development</Bold> from the <Bold>University of Denver.</Bold> I love working on challenging, high demand and high impact projects. Tight deadlines and high energy environments cultivate my energy. I work best under the proverbial <Emoji symbol="🔫" label="gun" id="gun"/> you could say.</p>
          <p>Outside of my current role you can find me <Bold>producing digital content</Bold>, <Bold>developing apps and games</Bold>, and practicing self creation. I am up early, reading a lot of <Emoji symbol="📚" label="books" id="books"/>, and <Emoji symbol="🧘🏻‍♂️" label="yoga" id="yoga"/>-ing  like there is no tomorrow. You can <Bold>checkout my current projects</Bold> on my <a href="https://github.com/kyledkearney" target="_blank" rel="noopener noreferrer"><Bold className="left" pointer="pointer">GitHub.</Bold></a> As I finish them you can find them down below in my <ScrollLink to="work-section" spy={true} smooth={true} offset={50} duration={500}><Bold className="left" pointer="pointer">work section</Bold></ScrollLink>, and read about them in my <Link to="/blog"><Bold className="left" pointer="pointer">blog</Bold></Link>. If you have a question, looking for a <Emoji symbol="🧑🏻‍💻" label="developer" id="developer"/>, or a friend feel free to <ScrollLink to="connect-section" spy={true} smooth={true} offset={50} duration={500}><Bold className="left" pointer="pointer">reach out.</Bold></ScrollLink></p>
          <p>Dream big, do good.</p>
        </TextSection>
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
            <li>Php</li>
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
            <li>Bootstap</li>
          </ul>
        </StyledToolTip>
      </div>
      <Work>
        <ul>
          <li>
            <a href="https://frenchsquirrel.com/" target="_blank" rel="norefferer noopener"><span className="left-big">French Squirrel</span></a>
          </li>
          <li>
            <a href="https://boosterapps.com/" target="_blank" rel="norefferer noopener"><span className="left-big">Booster Apps</span></a>
          </li>
          <li>
            <a href="http://barnhousetap.com/" target="_blank" rel="norefferer noopener"><span className="left-big">Barn House Tap</span></a>
          </li>
          <li>
            <a href="http://jonesbodywork.com" target="_blank" rel="norefferer noopener"><span className="left-big">Posh Photo</span></a>
          </li>
          <li>
            <a href="http://jonesbodywork.com" target="_blank" rel="norefferer noopener"><span className="left-big">Jones Bodywork</span></a>
          </li>
        </ul>
      </Work>
      {/* <Skills /> */}
      <Connect />
    </PageMotionWrapper>
  );
};

export default Home;
