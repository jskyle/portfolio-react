import React from "react";

const WorkObject = ({ project }) => {
  return (
    <>
    <div>
      <h3>{project.name}</h3>
    </div>
    <div className="row">
    <div className="col-lg-8">
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
    </div>
    <div className="col-lg-4"></div>
    </div>
    </>
  );
};

export default WorkObject;
