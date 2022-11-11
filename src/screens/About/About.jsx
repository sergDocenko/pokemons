import React from "react";
import "./about.scss";

const About = () => {
  return (
    <article className="about">
      <header>
        <h1>About me</h1>
      </header>
      <section>
        <p>
          I'm an entry-level software developer with a great passion for new challenges and
          partially done education at the Faculty of Physics and Mathematics at South Ukrainian
          National Pedagogical University, named after K. D. Ushynsky.
        </p>
        <p>
          Even though I do not have a lot of commercial experience, I'm constantly evolving by
          gaining new knowledge. This knowledge is related to computer science, web
          platform-specific technologies, as my primary interest, and practicing writing source
          code.
        </p>

        <p>
          In quite a short term, I've covered lots of areas related to software development due to
          personal mentoring with a mature software engineer. Mentoring guided me to design a
          self-improvement road map that helped me to avoid the wrong paths in self-education at an
          early stage.
        </p>
        <p>
          In my spare time, I enjoy being outdoors, fishing, and designing tools that help me do my
          job more efficiently at my current place.
        </p>
      </section>
    </article>
  );
};

export default About;
