import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import headerImage from "../images/computerScreensAndPhone.jpg";
import aboutCareer from "../markdown/about/aboutCareer.md";
import ReactMarkdown from "react-markdown";

function AboutCareer() {
  const [markdownAboutCareer, setMarkdownAboutCareer] = useState([]);
  fetch(aboutCareer)
    .then((res) => res.text())
    .then((post) => setMarkdownAboutCareer(post))
    .catch((err) => console.error(err));

  return (
    <div className="about">
      <ScrollAnimation animateIn="fadeIn">
        <ReactMarkdown children={`${markdownAboutCareer}`} />
      </ScrollAnimation>
    </div>
  );
}

export default AboutCareer;
