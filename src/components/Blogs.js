import Navigation from "./Navigation";
import SectionBar from "./SectionBar";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import ScrollAnimation from "react-animate-on-scroll";
import headerImage from "../images/aboutMindMapHeader.jpg";
// import line from "../images/line-black.svg";
import "../styles/blogs.css";
import "../styles/markdown.css";

function Blogs({ withBanner, match }) {
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
      let title = getTitle(article);
      let imageLink = getImage(article);
      let blogObject = {
        title: title,
        index: idx,
        imageLink: imageLink,
        blog: article,
      };
      return blogObject;
    });
    return blogObjects;
  }

  function getTitle(article) {
    console.log("get image from this", article);
    let index = article.indexOf("\n");
    let firstLine = article.slice(0, index);
    let title = firstLine.slice(2);
    return title;
  }

  function getImage(article) {
    let index = article.indexOf("\n");
    // console.log("index",index);
    let restOfArticle = article.slice(index + 1);
    // console.log("rest", restOfArticle)
    index = restOfArticle.indexOf("\n");
    // console.log("index after image", index)
    let imageLink = restOfArticle.slice(4, index - 1);
    return imageLink;
  }

  return (
    <React.Fragment>
      <Navigation withBanner={withBanner} />
      <div id="content" className="content">
        <SectionBar id="blogs" title="Blogs" />
        <div className="blogs-flexContainer">
        {/* <div className="blogs-flexContainer"> */}
          {blogObjects.map((blogObject, idx) => (
            <div key={idx} className="blogs-flexItem ">
                          {/* <div key={idx} className="blogs-flexItem "> */}
              <Link
                // className="blog-gridContainerr"
                className="blog-gridContainer"
                to={{
                  pathname: `/blogs/${idx + 1}`,
                  state: { blog: blogObject.blog },
                }}
              >
                <img
                  // className="blog-gridItem"
                  src={blogObject.imageLink}
                  alt="Blog"
                />
                <h1 
                // className="blog-gridItem"
                > {blogObject.title}</h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Blogs;
