import React from "react";
import "../styles/sectionBar.css"

function SectionBar({ title, id }) {
  return <div id={id} className="sectionBar">{title}</div>;
}

export default SectionBar;
