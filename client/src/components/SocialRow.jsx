import React from 'react'
import styled, { css } from 'styled-components';
import { Row, Card } from 'reactstrap';

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faGithub, faLinkedin, faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const StyledSocialRow = styled(Row)`
  width: 100%;
  max-width: 800px;
  margin-top: 2rem;
  font-size: 1.2rem !important;
  display: flex;
  justify-content: space-between;

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center !important;
    text-align: center;
    padding: 1rem;
    border: 5px solid black;
    border-radius: 50% !important;
    width: fit-content;
    font-size: 1.2rem !important;
  }

  .email:hover {
    border: 5px solid #405DE6;
    box-shadow: 0 0 15px #405DE6;
    transition: all 0.5s ease;

    svg {
      color: #405DE6;
      text-shadow: 0 0 15px #405DE6;
      transition: all 0.5s ease;
    }
  }
  .github:hover {
    border: 5px solid #6e5494;
    box-shadow: 0 0 15px #6e5494;
    transition: all 0.5s ease;

    svg {
      color: #6e5494;
      text-shadow: 0 0 15px #6e5494;
      transition: all 0.5s ease;
    }
  }
  .linkedin:hover {
    border: 5px solid #0E76A8;
    box-shadow: 0 0 15px #0E76A8;
    transition: all 0.5s ease;

    svg {
      color: #0E76A8;
      text-shadow: 0 0 15px #0E76A8;
      transition: all 0.5s ease;
    }
  }
  .twitter:hover {
    border: 5px solid #00aced;
    box-shadow: 0 0 15px #00aced;
    transition: all 0.5s ease;

    svg {
      color: #00aced;
      text-shadow: 0 0 15px #00aced;
      transition: all 0.5s ease;
    }
  }
  .instagram:hover {
    border: 5px solid #e1306c;
    box-shadow: 0 0 15px #e1306c;
    transition: all 0.5s ease;

    svg {
      color: #e1306c;
      text-shadow: 0 0 15px #e1306c;
      transition: all 0.5s ease;
    }
  }
`

const SocialRow = () => {
  return (
    <StyledSocialRow>
      <a href="mailto:hello@kyledarrion.com?subject=Hi!">
        <Card className="email" hovercolor={'$emao;'}>
          <FontAwesomeIcon icon={faEnvelope} color="black" size="sm" />
        </Card>
      </a>
      <a href="https://github.com/kyledkearney" target="_blank" rel="noopener noreferrer">
        <Card className="github">
          <FontAwesomeIcon icon={faGithub} color="black" size="sm" />
        </Card>
      </a>
      <a href="https://www.linkedin.com/in/kyle-kearney-2b3b67b4/" target="_blank" rel="noopener noreferrer">
        <Card className="linkedin">
          <FontAwesomeIcon icon={faLinkedin} color="black" size="sm" />
        </Card>
      </a>
      {/* <a href="https://instagram.com/kyledarrion" target="_blank" rel="noopener noreferrer">
        <Card className="instagram">
          <FontAwesomeIcon icon={faInstagram} color="black" size="sm" />
        </Card>
      </a> */}

      {/* <a href="https://twitter.com/kyledarrion" target="_blank" rel="noopener noreferrer">
        <Card className="twitter">
          <FontAwesomeIcon icon={faTwitter} color="black" size="sm" />
        </Card>
      </a> */}
    </StyledSocialRow>
  );
}

export default SocialRow
