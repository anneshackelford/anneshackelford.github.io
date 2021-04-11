import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
// import phoneAndComputer from "../images/PC-and-phone-compressed-moz.jpg";
import phoneAndComputer from "../images/PC-and-phone-compressed-moz-height200.jpg"
import projectPortfolio from "../markdown/projectPosts/projectPortfolio.md";
import projectPortfolioIntro from "../markdown/projectPosts/projectIntroduction.md";
import ReactMarkdown from "react-markdown";
import SectionBar from "./SectionBar";

function Project({ featureList }) {
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

  return (
    <div>
      <SectionBar id="projects" title="Projects" />
      <div className="featureList">
        <ScrollAnimation animateIn="fadeIn">
          <ReactMarkdown children={`${markdownProjectIntro}`} />
          <ReactMarkdown
            className="portfolio"
            children={`${markdownProjectPortfolio}`}
          />
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Project;
