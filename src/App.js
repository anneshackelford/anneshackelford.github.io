import React, { useEffect } from "react";
import Contact from "./features/contact/Contact";
import Blogs from "./features/blogs/Blogs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./features/about/About";
import Home from "./app/Home";
import Blog from "./features/blogs/Blog";
import "./styles/styles.css"
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "./features/themes/themeSlice";

function App() {

  /** Theme Management ********************************************************/
  const dispatch = useDispatch();
  const selectedTheme = useSelector((state) => state.theme.selectedTheme);
  const previousTheme = useSelector((state) => state.theme.previousTheme);

  useEffect(() => {
    let savedTheme = localStorage.getItem("mytheme") || "default";
    dispatch(changeTheme({oldTheme: "default", newTheme: savedTheme}))

    return () => {
      console.log('APP: Cleaning up like unsubscribing to a service');
    };
  }, []);

  useEffect(() => {
    setTheme(previousTheme, selectedTheme);
    return () => {
      console.log('APP2: Cleaning up like unsubscribing to a service');
    };
  }, [selectedTheme]);

  function setTheme(oldTheme, newTheme) {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove(oldTheme);
    body.classList.add(newTheme);
    localStorage.setItem("mytheme", newTheme);
  }
  /*************************************************************************** */

  return (
    <div>
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
