import React from "react";
import "./about.scss";

const About = () => {
  return (
    <article className="about">
      <header>
        <h1>About me</h1>
      </header>
      <section >
        <p>
          I'm a software developer with a great passion for new challenges and partially done
          education at the Faculty of Physics and Mathematics at South Ukrainian National
          Pedagogical University, named after K. D. Ushynsky.
        </p>

        <p>
          I'm constantly evolving by gaining new knowledge. This knowledge is related to computer
          science, web platform-specific technologies, as my primary interest.
        </p>

        <p>In my spare time, I enjoy being outdoors, fishing, and practicing code.</p>
        <p>
          In my spare time, I enjoy being outdoors, fishing, and designing tools that help me do my
          job more efficiently at my current place.
        </p>
      </section>
    </article>
  );
};

export default About;
