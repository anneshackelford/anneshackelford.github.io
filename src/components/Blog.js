import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/blog.css";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import "../styles/markdown.css";
import Navigation from "./Navigation";
import ScrollAnimation from "react-animate-on-scroll";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [blogObjects, setBlogObjects] = useState([]);
  const [blog, setBlog] = useState();

  let { id } = useParams();

  useEffect(() => {
    const importAll = (r) => r.keys().map(r);
    const markdownFiles = importAll(
      require.context("../markdown/blogPosts", false, /\.md$/)
    )
      .sort()
      .reverse();

    fetchBlogPosts(markdownFiles);
  }, []);

  useEffect(() => {
    let blogObjects = getListOfBlogObjects();
    setBlogObjects(blogObjects);
  }, [blogs]);

  useEffect(() => {
    if (blogObjects.length > 0) {
      let blog = null;
      if (blogObjects[id - 1] != null) blog = blogObjects[id - 1].blog;
      setBlog(blog);
    }
  }, [blogObjects]);

  const fetchBlogPosts = async (markdownFiles) => {
    const results = await Promise.all(
      markdownFiles.map((file) => fetch(file).then((res) => res.text()))
    ).catch((err) => console.error(err));

    setBlogs(results);
  };

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
      <Navigation withBanner={false} />
      <div id="content" className="content blogContent">
        {blog ? (
          <ScrollAnimation animateIn="fadeIn">
            <ReactMarkdown
              className="blog markdown"
              plugins={[gfm]}
              children={blog}
            />
          </ScrollAnimation>
        ) : null}
      </div>
    </React.Fragment>
  );
}

export default Blog;
