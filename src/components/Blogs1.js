import Navigation from "./Navigation";
import SectionBar from "./SectionBar";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import ScrollAnimation from "react-animate-on-scroll";
// import headerImage from "../images/aboutMindMapHeader.jpg";
// import line from "../images/line-black.svg";
import "../styles/blogs1.css";
import "../styles/markdown.css";

function Blogs1({ withBanner, match }) {
  const [blogs, setBlogs] = useState([]);
  const [blogObjects, setBlogObjects] = useState([]);

  useEffect(() => {
    const importAll = (r) => r.keys().map(r);
    const markdownFiles = importAll(
      require.context("../markdown/blogPosts", false, /\.md$/)
    )
      .sort()
      .reverse();

    fetchBlogPosts(markdownFiles);
  }, []);

  const fetchBlogPosts = async (markdownFiles) => {
    const results = await Promise.all(
      markdownFiles.map((file) => fetch(file).then((res) => res.text()))
    ).catch((err) => console.error(err));

    setBlogs(results);
  };

  useEffect(() => {
    let blogObjects = getListOfBlogObjects();
    setBlogObjects(blogObjects);
  }, [blogs]);

//   function getOneBlog(node) {
//     while (!node.classList.contains("blogs1-flexItem")) {
//       node = node.parentNode;
//     }
//     let oneBlog = node;
//     return oneBlog;
//   }

//   function getTitle(node) {
//     if (!node) return null;
//     let titleNode = node.firstChild;
//     console.log("titleNode", titleNode);
//     let title = titleNode.innerHTML;
//     return title;
//   }

  //   function onClick(e) {
  //     console.log("onclick", e.target);
  //     let oneBlog = getOneBlog(e.target);
  //     console.log("oneBlog", oneBlog);

  //     let title = getTitle(oneBlog);
  //     console.log("title", title);
  //   }

  function getListOfBlogObjects() {
    let blogObjects = blogs.map((article, idx) => {
      let index = article.indexOf("\n");
      let firstLine = article.slice(0, index);
      let blogObject = { title: firstLine.slice(2), index: idx, blog: article };
      return blogObject;
    });
    return blogObjects;
  }

  return (
    <React.Fragment>
      <Navigation withBanner={withBanner} />
      <div id="content" className="content">
        <SectionBar id="blogs1" title="Blogs1" />
        <div className="blogs1-flexContainer">
          {blogObjects.map((blogObject, idx) => (
            <div key={idx} className="blogs1-flexItem">
              <Link
                to={{
                  pathname: `/blogs1/${idx + 1}`,
                  state: { blog: blogObject.blog },
                }}
              >
                {blogObject.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Blogs1;
