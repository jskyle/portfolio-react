import React from "react";
import Emoji from "../utils/Emoji";




const About = () => (
  <section id="about-section">
    <h2 className="section-head">about</h2>
    <div className="about-body">
      <p>
        Hi there! <Emoji symbol="👋 " label="wave" id="cliche-wave" />
        My name is Kyle Kearney! I am a developer with 6+ years of
        experience. I have worked in a wide array of team environments, tech
        stacks and application types. From leading the web marketing effort at a
        multi billion dollar conglomerate, to wearing all the hats at small
        start-ups.
      </p>
      <p>
        I spent two and a half years growing at Lead Sherpa. I spent the time
        perfecting my craft with React and learning the ins and out of managing
        a product and more importantly building a team. My role shifted from
        from frontend engineer, to lead engineer, ending with technical product
        owner. While I do enjoy the business aspect of the product role, solving
        problems and working along side my fellow engineer truly brings me great
        joy.
      </p>
      <p>
        I spent a year of my career working at Splunk. Originally, brought on to
        do AEM publishing for their user conference, to managing 10+ person web
        efforts, enhancing their component libraries, and developing out global
        marketing campaigns. The role brought me a level of appreciation and
        understanding of what it takes to manage teams and web efforts for a
        large organization.
      </p>
      <p>
        Minimalism and simplicity are key values in every aspect of my life,
        especially development. Clean, readable code and quality test coverage
        are the fundamental attributes to a quality application. I primarily
        code in Javascript and Ruby, but have experience with a few other
        languages.
      </p>
      <p>
        When I am not working you can find me, cooking, learning or training for
        my first triathlon. I am a life long learner, AFoL (Adult Fan of Lego) and personal finance
        nerd, You can checkout my current projects on my GitHub. If you have a
        question, looking for a dev, or a friend feel free to reach out.
      </p>
    </div>
  </section>
);

export default About;
