import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../styles/blog.css";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import "../../styles/markdown.css";
import Navigation from "../../app/Navigation";
import ScrollAnimation from "react-animate-on-scroll";
import { useSelector } from "react-redux";

function Blog() {
  const [post, setPost] = useState();
  const posts = useSelector((state) => state.posts.posts);

  let { id } = useParams();

  useEffect(() => {
    if (posts.length > 0) {
      let post = null;
      if (posts[id - 1] != null) post = posts[id - 1].blog;
      setPost(post);
    }
    return () => {
      console.log('BLOG: Cleaning up like unsubscribing to a service');
    };
  }, [posts]);

  return (
    <React.Fragment>
      <Navigation withBanner={false} />
      <div id="content" className="content blogContent">
        {post ? (
          <ScrollAnimation animateIn="fadeIn">
            <ReactMarkdown
              className="blog markdown"
              plugins={[gfm]}
              children={post}
            />
          </ScrollAnimation>
        ) : <section>
        <h2>Post not found</h2>
      </section>}
      </div>
    </React.Fragment>
  );
}

export default Blog;
