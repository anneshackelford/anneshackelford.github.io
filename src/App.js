import React from "react";
import Contact from "./components/Contact";
import Blogs2 from "./components/Blogs2";
import Blogs from "./components/Blogs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Blog from "./components/Blog";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/projects"
          exact
          component={() => <Home withBanner={false} />}
        />
        <Route
          path="/blogs2"
          exact
          component={() => <Blogs2 withBanner={false} />}
        />
        <Route path={`/blogs/:id`} component={() => <Blog />} />
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
        <Route path="/" exact component={() => <Home withBanner={true} />} />
      </Switch>
    </Router>
  );
}

export default App;
