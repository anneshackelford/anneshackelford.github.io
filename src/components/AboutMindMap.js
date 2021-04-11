import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import headerImage from "../images/aboutMindMapHeader.jpg";
import line from "../images/line-black.svg";
import ReactMarkdown from "react-markdown";
import "../styles/about.css";

function AboutMindMap() {
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
    <div className="aboutMindMap">
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
  );
}

export default AboutMindMap;
