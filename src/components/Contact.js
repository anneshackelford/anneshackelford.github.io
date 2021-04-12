import React from "react";
import profile from "../images/profile.jpg";
import line from "../images/line-white.svg";
import ScrollAnimation from "react-animate-on-scroll";
import SectionBar from "./SectionBar";
import Navigation from "./Navigation";
import '../styles/contact.css'

function Contact({ withBanner }) {
  return (
    <div>
      <Navigation withBanner={withBanner} />
      <div id="content" className="content">
        <SectionBar id="contact" title="Contact" />
        <div className="contact">
          <ScrollAnimation animateIn="fadeIn">
            <span id="contact"></span>
            <img src={profile} alt="Anne" />
            <div>Anne Shackelford</div>
            <img className="line" src={line} alt="Anne"  height="25w" width="246w" />
            <p className="title">Front-End Web Developer</p>
            <div className="iconGroup">
              <a
                href="https://www.linkedin.com/in/anne-shackelford/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://instagram.com/anne_shackelford_iphoneography/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.github.com/anneshackelford"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://stackoverflow.com/users/15289887/anne-shackelford"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-stack-overflow"></i>
              </a>
              <a
                href="https://www.twitter.com/@anne91620"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default Contact;
