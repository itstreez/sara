import React from "react";
import "./About.css";
import yara from "../../assets/sara2.jpg";
import { FiAward } from "react-icons/fi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>

      <h2> About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image-div">
            <img src={yara} alt="elio2" className="about__me-image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5> Experience</h5>
              <h3> 1 Year Working</h3>
            </article>

          </div>
          <p>
          A final year translation undergraduate passionate about exploring all aspects of
my major that allows me to discover many fields. I aspire to further develop my
love for languages and to put my passion for writing to use. I have experience
translating technical documents and have a great interest in writing and editing
articles.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
