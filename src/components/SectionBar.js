import React from "react";

function SectionBar({ title, id }) {
  return <div id={id} className="sectionBar">{title}</div>;
}

export default SectionBar;
