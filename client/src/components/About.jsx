import React from "react";
import Emoji from "../utils/Emoji";




const About = () => (
  <section id="about-section">
    <h2 className="section-head">about</h2>
    <div className="about-body">
      <p>
        Hi there! <Emoji symbol="👋 " label="wave" id="cliche-wave" />
        My name is Kyle Kearney! I am a{" "}
        <span className="bold-font" id="frontend">
          front
        </span>{" "}
        end engineer with 6+ years of experience. I have spent the last year
        ethically over-employed. My first role was a Product Owner for Lead
        Sherpa an SMS SaaS platform. My second role was a web specialist for
        Splunk managing and developing the online presence, for their global
        marketing campaigns and their annual user conference.{" "}
      </p>
      <p>
        Minimalism and simplicity are key values in every aspect of my life,
        especially development. Clean, concise and understandable code are the
        fundamental attributes to a quality application. I primarily code in
        Javascript and Ruby, but have experience with a few other languages.
      </p>
      <p>
        When I am not working you can find me, cooking, learning or training for
        my first triathlon. I am a Life long learner, lego connoisseur and
        personal finance nerd, You can checkout my current projects on
        my GitHub. Follow along on my dev pursuits or my personal finance
        journey. If you have a question, looking for a dev, or a friend feel
        free to reach out.
      </p>
    </div>
  </section>
);

export default About;
