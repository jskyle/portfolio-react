import React from "react";

const WorkObject = ({ project }) => {
  return (
    <div className="row work-object-row">
      <div className="col-lg-8 work-object-column">
        <h3>{project.name}</h3>
        <div className="row work-object-info-row">
          <h6>
            <span className="bold-font">Roles:</span>{" "}
            <span className="light-font">{project.role}</span>
          </h6>
          <h6>
            <span className="bold-font">Company:</span>{" "}
            <span className="light-font">{project.company}</span>
          </h6>
          <h6>
            <span className="bold-font">Timeline:</span>{" "}
            <span className="light-font">{project.timeline}</span>
          </h6>
          <h6>
            <span className="bold-font">Technologies:</span>{" "}
            <span className="light-font">{project.technologies}</span>
          </h6>
        </div>
        <p className="work-body">{project.description}</p>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
};

export default WorkObject;
