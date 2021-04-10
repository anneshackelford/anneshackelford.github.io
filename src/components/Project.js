import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
// import phoneAndComputer from "../images/PC-and-phone-compressed-moz.jpg";
import phoneAndComputer from "../images/PC-and-phone-compressed-moz-small 400w 262h.jpg"
import projectPortfolio from "../markdown/projectPosts/projectPortfolio.md";
import ReactMarkdown from "react-markdown";
import SectionBar from "./SectionBar";

function Project({ featureList }) {
  const featuresByStatus = {};
  featuresByStatus["Done"] = [];

  if (featureList) {
  featureList.forEach((feature) =>
    featuresByStatus[feature.feature_status].push(feature)
  );}

  let doneElements = [];
  featuresByStatus["Done"].forEach((feature, index) => {
    doneElements.push(
      <div className="feature" key={index}>
        <strong>{feature.name}</strong>
      </div>
    );
  });

  const [markdown, setMarkdown] = useState([]);
  fetch(projectPortfolio)
    .then((res) => res.text())
    .then((post) => setMarkdown(post))
    .catch((err) => console.error(err));

  return (
    <div>
      <SectionBar id="projects" title="Projects" />
      <div className="featureList">
        <ScrollAnimation animateIn="fadeIn">
          <span id="featureList"></span>
          <h1>This Web Developer Portfolio Project</h1>
          <div className="imageAndIntro">
            <img
              className="phoneAndComputer"
              src={phoneAndComputer}
              alt="phone and computer photos"
              width="400px" height="262px"
            />
            <div className="details">
              <p>
                This website was designed and developed by me as an example of
                what I can do. It is a responsive full-stack website focusing on
                the front-end development. You can find information concerning
                this website project as well as blogs on subjects that I find
                interesting that are related to information I needed when
                building this website.
              </p>
            </div>
          </div>
          <div className="features">
            <h2>Features </h2>
            <div className="done">{doneElements}</div>
            <ReactMarkdown className="portfolio" children={`${markdown}`} />
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Project;
