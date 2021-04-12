import React from "react";
import Navigation from "./Navigation";
import Project from "./Project";
import VersionHistory from "./VersionHistory";

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
