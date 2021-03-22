/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import styled from "styled-components";
import { useSelector } from "react-redux";
import { NavLink, useParams } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { ImageContainer, Landing, TextSection, PageMotionWrapper } from '../../shared';

import { getContent } from '../../store/ui/selectors';

const StyledRow = styled(Row)`
  justify-content: center;

  .col {
    text-align: center;
  }
`;

const StyledLink = styled.span`
  font-weight: 800;
  text-align: center;
  font-size: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  &.active {
    .left:before{
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      bottom: -2px;
      left: 0;
      background-color: #000000;
      visibility: visible;
      transition: all 0.3s ease-in-out;
    };
  }
`;

const CaseStudy = () => {
  const { slug } = useParams();
  const caseStudy = useSelector((state) => getContent(state, {type: "caseStudy", key: slug }))


  return (
    <PageMotionWrapper>
      <Landing type="case-study" start>
        <h5>Case Study:</h5>
        <h1>{caseStudy.title}</h1>
      </Landing>
      <TextSection>
        <p>
         {caseStudy.intro.p[0]}
        </p>
      </TextSection>
      <ImageContainer />
      <TextSection title="result">
        <p>
          {caseStudy.result.p[0]}
        </p>
      </TextSection>
      {caseStudy.planned && (
      <TextSection title="planned">
            {caseStudy.planned.p.map((p) => (<p>{p}</p>))}
      </TextSection>
      )}
      <ImageContainer/>
        <TextSection title="other projects">
          <StyledRow>
            <Col>
              <StyledNavLink activeClass="active" to="/case-study/blog"><StyledLink className="left">Blog</StyledLink></StyledNavLink>
            </Col>
            <Col>
              <StyledNavLink activeClassName="active" to="/case-study/light-nostalgia"><StyledLink className="left">Light Nostalgia</StyledLink></StyledNavLink>
            </Col>
            <Col>
              <StyledNavLink activeClassName="active" to="/case-study/posh-photo"><StyledLink className="left">Posh Photography</StyledLink></StyledNavLink>
            </Col>
            <Col>
              <StyledNavLink activeClassName="active" to="/case-study/jeff-jones"><StyledLink className="left">Jeff Jones</StyledLink></StyledNavLink>
            </Col>
          </StyledRow>
        </TextSection>
    </PageMotionWrapper>
  );
};

export default CaseStudy;
