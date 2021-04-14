import Navigation from "./Navigation";
import SectionBar from "./SectionBar";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import headerImage from "../images/aboutMindMapHeader.jpg";
// import line from "../images/line-black.svg";
import "../styles/blogs.css";
import "../styles/markdown.css";
import ScrollAnimation from "react-animate-on-scroll";

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
    let index = article.indexOf("\n");
    let firstLine = article.slice(0, index);
    let title = firstLine.slice(2);
    return title;
  }

  function getImage(article) {
    let index = article.indexOf("\n");
    let restOfArticle = article.slice(index + 1);
    index = restOfArticle.indexOf("\n");
    let imageLink = restOfArticle.slice(4, index - 1);
    return imageLink;
  }

  function getOneBlog  (node)  {
    while (!node.classList.contains("blogs-flexItem")) {
      node = node.parentNode;
    }
    let oneBlog = node;
    return oneBlog;
  };

  function getSiblings  (e)  {
    // for collecting siblings
    let siblings = [];
    // if no parent, return no sibling
    if (!e.parentNode) {
      return siblings;
    }

    // first child of the parent node
    let sibling = e.parentNode.firstChild;

    if (sibling === e && !sibling.nextSibling && sibling.nodeName === "IMG") {
      sibling = e.parentNode;
    }

    // collecting siblings
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== e) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
    }
    return siblings;
  };


  function onMouseEnter(e) {
    // add notFocused class to all but this one
    let blog = getOneBlog(e.target);
    blog.classList.add("focused");

    // get siblings of this blog
    let siblings = getSiblings(blog);

    // add notFocused to their class
    siblings.forEach((siblingBlog) => {
      siblingBlog.classList.add("notFocused");
      siblingBlog.classList.remove("focused");
    });
  }

  function onMouseLeave(e) {
    // remove the notFocused class
    let blog = getOneBlog(e.target);
    blog.classList.remove("focused");

    // get siblings of this blog
    let siblings = getSiblings(blog);

    // add notFocused to their class
    siblings.forEach((siblingBlog) => {
      siblingBlog.classList.remove("notFocused");
      siblingBlog.classList.add("focused");
    });
  }

  return (
    <React.Fragment>
      <Navigation withBanner={withBanner} />
      <div id="content" className="content">
        <SectionBar id="blogs" title="Blogs" />

        <div className="blogs-flexContainer">
          {blogObjects.map((blogObject, idx) => (
            <div
              key={idx}
              className="blogs-flexItem"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <ScrollAnimation animateIn="fadeIn">
                <Link
                  className="blog-gridContainer"
                  to={{
                    pathname: `/blogs/${idx + 1}`,
                    state: { blog: blogObject.blog },
                  }}
                >
                  <img src={blogObject.imageLink} alt="Blog" />
                  <h1> {blogObject.title}</h1>
                </Link>
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Blogs;
