import React from "react";
import "./experience.css";
import ExperienceDetails from "./ExperienceDetails";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
            <ExperienceDetails text="HTML / CSS" />
            <ExperienceDetails text="JavaScript" />
            <ExperienceDetails text="SASS / SCSS" />
            <ExperienceDetails text="Bootstrap, Tailwind" />
            <ExperienceDetails text="React , Vite JS, Next Js" />
            <ExperienceDetails text="Firebase" />
            <ExperienceDetails text="Typescript" />
            <ExperienceDetails text="Node.js, Express.js" />
            <ExperienceDetails text="Responsive Design, BEM Methodology" />
            <ExperienceDetails text="Redux, Redux-toolkit, Context API" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
