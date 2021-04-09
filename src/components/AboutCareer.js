import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import headerImage from "../images/computerScreensAndPhone.jpg";

function AboutCareer({ name }) {
  return (
    <div className="about">
      <ScrollAnimation animateIn="fadeIn">
        <span id="about"></span>
        <h1>A Brief Resume</h1>
        <img className="headerImage" src={headerImage} alt="CSS" />
        <div className="details">
          <div>
            <b>Frontend Web Development</b>
          </div>
          <div>
            {" "}
            <ul>
              <li>
                Frontend Web Development since specialization of Graphical User
                Interfaces in Master’s Degree in Computer Science
              </li>
              <li> Latest Technologies: JavaScript, React.js</li>
            </ul>
          </div>
          <div>
            <b>Agile Methodologies</b>
          </div>
          <div>
            {" "}
            <ul>
              <li>Certified SAFe® 5 Advanced Scrum Master</li>
              <li>
                Promoted to Scrum Master in 2018 in the development team thanks
                to organizational / leadership skills
              </li>
              <li>
                Worked using Agile Methodologies (Scrum, SAFe, Kanban) with Jira
                for over 10 years
              </li>
            </ul>
          </div>
          <div>
            <b>User Experience (UX)</b>
          </div>
          <div>
            {" "}
            <ul>
              <li>
                Interested in transitioning to User Experience (UX) from UI to
                include the use of prototypes, personnas, web design
              </li>
            </ul>
          </div>
          <p>
            English: Mother Tongue<br></br>
            French: Fluent
          </p>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default AboutCareer;
