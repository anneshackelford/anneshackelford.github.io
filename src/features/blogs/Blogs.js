import Navigation from "../../app/Navigation";
import SectionBar from "../../app/SectionBar";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import headerImage from "../images/aboutMindMapHeader.jpg";
// import line from "../images/line-black.svg";
import "../../styles/blogs.css";
import "../../styles/markdown.css";
import ScrollAnimation from "react-animate-on-scroll";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./blogsSlice";

function Blogs({ withBanner, match }) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  // const status = useSelector((state) => state.posts.status);
  // const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    const importAll = (r) => r.keys().map(r);
    const markdownFileNames = importAll(
      require.context("./markdown", false, /\.md$/)
    )
      .sort()
      .reverse();

    dispatch(fetchPosts(markdownFileNames));

    return () => {
      console.log('BLOGS: Cleaning up like unsubscribing to a service');
    };
  }, []);

  function getOneBlog(node) {
    while (!node.classList.contains("blogs-flexItem")) {
      node = node.parentNode;
    }
    let oneBlog = node;
    return oneBlog;
  }

  function getSiblings(e) {
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
  }

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
          {posts.map((post, idx) => (
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
                    state: { blog: post.blog },
                  }}
                >
                  <img src={post.imageLink} alt="Blog" />
                  <h1> {post.title}</h1>
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
