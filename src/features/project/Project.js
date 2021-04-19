import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
// import phoneAndComputer from "../images/PC-and-phone-compressed-moz.jpg";
// import phoneAndComputer from "../images/PC-and-phone-compressed-moz-height200.jpg";
import projectPortfolio from "./markdown/projectPortfolio.md";
import projectPortfolioIntro from "./markdown/projectIntroduction.md";
import projectLibraries from "./markdown/projectLibraries.md";
import ReactMarkdown from "react-markdown";
import SectionBar from "../../app/SectionBar";
import "../../styles/project.css"
import "../../styles/markdown.css"

function Project() {
  const [markdownProjectPortfolio, setMarkdownProjectPortfolio] = useState([]);
  fetch(projectPortfolio)
    .then((res) => res.text())
    .then((post) => setMarkdownProjectPortfolio(post))
    .catch((err) => console.error(err));

  const [markdownProjectIntro, setMarkdownProjectIntro] = useState([]);
  fetch(projectPortfolioIntro)
    .then((res) => res.text())
    .then((post) => setMarkdownProjectIntro(post))
    .catch((err) => console.error(err));

  const [markdownProjectLibraries, setMarkdownProjectLibraries] = useState([]);
  fetch(projectLibraries)
    .then((res) => res.text())
    .then((post) => setMarkdownProjectLibraries(post))
    .catch((err) => console.error(err));

  return (
    <div>
      <SectionBar id="projects" title="Projects" />
      <div className="featureList">
        <ScrollAnimation animateIn="fadeIn">
          <ReactMarkdown children={`${markdownProjectIntro}`} />
          <ReactMarkdown
            className="portfolio markdown"
            children={`${markdownProjectPortfolio}`}
          />
          <ReactMarkdown
            className="portfolio markdown"
            children={`${markdownProjectLibraries}`}
          />
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Project;
