import Navigation from "./Navigation";
import SectionBar from "./SectionBar";
import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import headerImage from "../images/aboutMindMapHeader.jpg";
import line from "../images/line-black.svg";
import ReactMarkdown from "react-markdown";
import "../styles/about.css";

function About({ withBanner }) {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const importAll = (r) => r.keys().map(r);
    const markdownFiles = importAll(
      require.context("../markdown/about", false, /\.md$/)
    )
      .sort()
      .reverse();

    fetchAboutParagraphs(markdownFiles);
  }, []);

  const fetchAboutParagraphs = async (markdownFiles) => {
    const results = await Promise.all(
      markdownFiles.map((file) => fetch(file).then((res) => res.text()))
    ).catch((err) => console.error(err));

    setAbout(results);
  };

  return (
    <React.Fragment>
      <Navigation withBanner={withBanner} />
      <div id="content" className="content">
        <SectionBar id="about" title="About Me" />
        <div className="aboutMindMap-flexContainer">
          {about.map((article, idx) => (
            <div key={idx} className="aboutMindMap-flexItem">
              <ScrollAnimation animateIn="fadeIn">
                <ReactMarkdown source={article} />
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
