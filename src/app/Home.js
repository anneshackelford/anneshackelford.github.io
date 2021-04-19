import React from "react";
import Navigation from "./Navigation";
import Project from "../features/project/Project";
import VersionHistory from "../features/temp/VersionHistory";

function Home({ withBanner }) {
  return (
    <div>
      <Navigation withBanner={withBanner} />
      <div id="content" className="content">
        <Project />
        {withBanner ? <VersionHistory /> : null}
      </div>
    </div>
  );
}

export default Home;
