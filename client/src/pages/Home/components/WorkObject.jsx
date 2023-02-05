import React from "react";
import styled from "styled-components";


const WorkObject = (project) => {
  return (
    <>
      <h3>{project.name}</h3>
      <h6>
        <span className="bold-font">Roles:</span>{" "}
        <span className="light-font">{project.role}</span>
      </h6>
      <h6>
        <span className="bold-font">Company:</span>
        <span className="light-font">{project.company}</span>
      </h6>
      <h6>
        <span className="bold-font">Timeline:</span>
        <span className="light-font">{project.timeline}</span>
      </h6>
      <h6>
        <span className="bold-font">Technologies:</span>
        <span className="light-font">{project.technologies}</span>
      </h6>
      <p className="work-body">{project.description}</p>
    </>
  );
};

export default WorkObject;
