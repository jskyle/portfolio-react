import React from "react";
import Emoji from "../utils/Emoji";




const About = () => (
  <section id="about-section">
    <h2 className="section-head">about</h2>
    <div className="about-body">
      <p>
        Hi there! <Emoji symbol="👋 " label="wave" id="cliche-wave" />
        My name is Kyle Kearney! I am a <span className="bold-font" id="frontend">front</span> end engineer with 6+
        years of experience. I have spent the last year ethically over-employed.
        My first role was a Product Owner for Lead Sherpa an SMS SaaS platform.
        My second role was a web specialist for Splunk managing and developing
        the online presence, for their global marketing campaigns and their
        annual user conference.{" "}
      </p>
    </div>
  </section>
);

export default About;
