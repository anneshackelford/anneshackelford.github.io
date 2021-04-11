import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import headerImage from "../images/aboutMindMapHeader.jpg";
import line from "../images/line-black.svg";

function AboutMindMap({ name }) {
  return (
    <div className="about aboutMindMap">
      <ScrollAnimation animateIn="fadeIn">
        <span id="about"></span>
        {/* <div className="aboutTitle">Introduction</div> */}
        <h1>Who Am I?</h1>
        <img className="headerImage" src={headerImage} alt="CSS" />
        <div className="details">
          <div className="detailsFlexItem">
            <div className="title">
              <h3>Who Am I?</h3>
              <img className="line" src={line} alt="Line" height="25w" width="246w" />
            </div>
            <p>
              Hello! I am Anne Shackelford - a Senior Frontend Web Developer and Scrum
              Master working at Nokia in the Paris region of France. I have over
              20 years of experience in domains related to Frontend Development.
              I have dual French / American Nationality.
            </p>
          </div>
          <div className="detailsFlexItem">
            <div className="title">
              <h3>What Have I Done?</h3>
              <img className="line" src={line} alt="Line" height="25w" width="246w" />
            </div>
            <p>
              My first significant project started around 2001 when I designed
              and developped a large scale Windows application in Java for
              monitoring the network. I continued with the specifications of
              this software as the development was moved offsite. The software
              is still in use today by major telecommunication companies for
              optimizing their customer networks.
            </p>
            <p>
              My latest significant project started in 2017 in React.js, CSS,
              and JavaScript working closely with the Backend Developpers and
              communicating through a REST API. Today, this software is around
              60,000 lines of code. This application is for browsing and
              filtering a large set of telecommunication database records.
            </p>
          </div>
          <div className="detailsFlexItem">
            <div className="title">
              <h3>What is my Expertise?</h3>
              <img className="line" src={line} alt="Line" height="25w" width="246w" />
            </div>
            <p>
              I developped an expertise in the use of React.js, CSS, JavaScript,
              Junit tests, automated tests on a Kubernetes platform.
            </p>
            <p>
              I also consider myself a Full Stack Developer even if my expertise
              is in Frontend Development. I have some experience on Backend
              Development with database connections, as well as working with the
              UX team to implement their inputs.
            </p>
          </div>
          <div className="detailsFlexItem">
            <div className="title">
              <h3>What is my Education?</h3>
              <img className="line" src={line} alt="Line"  height="25w" width="246w"/>
            </div>
            <p>
              I have a Masters in Computer Science with a specialization in
              Graphical User Interfaces from the University of Virginia.
            </p>
            <p>
              Since then I have constantly and consistently learned on the job
              to know all the latest technologies.
            </p>
          </div>
          <div className="detailsFlexItem">
            <div className="title">
              <h3>What is my Professional Project?</h3>
              <img className="line" src={line} alt="Line"  height="25w" width="246w"/>
            </div>
            <p>
              Today I am looking for a new challenge in Frontend Web Development
              in React.js in a dynamic international environment.
            </p>
          </div>
          <div className="detailsFlexItem">
            <div className="title">
              <h3>What else Interests me?</h3>
              <img className="line" src={line} alt="Line" height="25w" width="246w" />
            </div>
            <p>
              Other than Frontend Development interests, I am interested in a
              related topic: visually appealing photography. You can see this
              for yourself on my Instagram website.
            </p>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default AboutMindMap;
