import React from "react";
import "./about.css";
import Me from "../images/me.jpeg";

function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={Me} alt="about image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_card">
              <p>
                Hello, I am self-taught front-end developer with a desire to
                learn and grow in a collaborative team environment. I like to
                code, and enjoy bringing ideas to life in the browser. Below
                you'll find projects I've completed that showcase my skills in
                developing websites.
              </p>
              <a href="#contact" className="btn btn-primary">
                Let's Talk
              </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
