import React from "react";
import Navigation from "./Navigation";
import Project from "../features/project/Project";
import VersionHistory from "../features/versionHistory/VersionHistory";
import ThemeSelector from "../features/themes/ThemeSelector";

function Home({ withBanner }) {
  return (
    <div>
      <Navigation withBanner={withBanner} />
      <div id="content" className="content">
        <Project />
        {withBanner ? <VersionHistory /> : null}
      </div>
      <ThemeSelector />
    </div>
  );
}

export default Home;
