import React from "react";
import Contact from "./features/contact/Contact";
import Blogs from "./features/blogs/Blogs";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import About from "./features/about/About";
import Home from "./app/Home";
import Blog from "./features/blogs/Blog";
import "./styles/styles.css"

function App() {
  return (
    <div className="**featured**">
    <Router>
      <Switch>
        <Route
          path="/projects"
          exact
          component={() => <Home withBanner={false} />}
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
    </div>
  );
}

export default App;
