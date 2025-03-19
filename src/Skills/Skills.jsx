import React from "react";
import "./Skills.css";
import htmlLogo from "../assets/Skills/html.png";
import cssLogo from "../assets/Skills/css.png";
import jsLogo from "../assets/Skills/javascript.png";
import reactLogo from "../assets/Skills/react.jpeg";
import mongodbLogo from "../assets/Skills/mongodb.png";
import postmanLogo from "../assets/Skills/postman.png";
import uiuxLogo from "../assets/Skills/uiux.png";
import pythonLogo from "../assets/Skills/python.jpeg";

const Skills = () => {
  const skills = [
    { logo: htmlLogo, name: "HTML" },
    { logo: cssLogo, name: "CSS" },
    { logo: jsLogo, name: "JavaScript" },
    { logo: reactLogo, name: "React" },
    { logo: mongodbLogo, name: "MongoDB" },
    { logo: postmanLogo, name: "Postman" },
    { logo: uiuxLogo, name: "UI/UX" },
    { logo: pythonLogo, name: "Python" },
  ];

  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <p className="intro-text">
        These are the skills I specialize in:
      </p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.logo} alt={skill.name} title={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
