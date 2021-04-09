import React from "react";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import useFeatureList from "./requests/useFeatureList";

function App() {
  const [featureList, error] = useFeatureList();

  return (
    <Router>
      {error != null ? (
        <p>Error fetching feature list: {error}</p>
      ) : (
        <Switch>
          <Route
            path="/projects"
            exact
            component={() => (
              <Home featureList={featureList} withBanner={false} />
            )}
          />
          <Route
            path="/blogs"
            exact
            component={() => <Blogs withBanner={false} />}
          />
          <Route
            path="/about"
            exact
            component={() => <About withBanner={false} />}
          />
          <Route
            path="/contact"
            exact
            component={() => <Contact withBanner={false} />}
          />
          <Route
            path="/"
            exact
            component={() => (
              <Home featureList={featureList} withBanner={true} />
            )}
          />
        </Switch>
      )}
    </Router>
  );
}

export default App;
