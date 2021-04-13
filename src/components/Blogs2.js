import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import ScrollAnimation from "react-animate-on-scroll";
import SectionBar from "./SectionBar";
import Navigation from "./Navigation";
import "../styles/blogs2.css"
import "../styles/markdown.css"

/**
 * Multiple loading of react files found here:
 * https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
 *
 * @param {*} r
 * @returns
 */

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(
  require.context("../markdown/blogPosts", false, /\.md$/)
)
  .sort()
  .reverse();

Object.defineProperty(Element.prototype, "outerHeight", {
  get: function () {
    var height = this.clientHeight;
    var computedStyle = window.getComputedStyle(this);
    height += parseInt(computedStyle.marginTop, 10);
    height += parseInt(computedStyle.marginBottom, 10);
    height += parseInt(computedStyle.borderTopWidth, 10);
    height += parseInt(computedStyle.borderBottomWidth, 10);
    return height;
  },
});

class Blogs2 extends Component {

  state = {
    posts: [],
    marginTop: "150px",
    chevronDirection: "fa fa-chevron-down",
  };

  async componentDidMount() {
    const posts = await Promise.all(
      markdownFiles.map((file) => fetch(file).then((res) => res.text()))
    ).catch((err) => console.error(err));

    this.setState((state) => ({ ...state, posts }));
  }

  // https://www.javascripttutorial.net/javascript-dom/javascript-siblings/
  getSiblings = (e) => {
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

  getOneBlog = (node) => {
    while (!node.classList.contains("oneBlog")) {
      node = node.parentNode;
    }
    let oneBlog = node;
    return oneBlog;
  };

  getOverlay = (node) => {
    let oneBlog = this.getOneBlog(node);
    // now go down 2 children nodes and it should be the overlay :)
    let overlay = oneBlog.firstChild.firstChild;
    return overlay;
  };

  toggleChevron = (chevron) => {
    let chevronIcon = chevron.firstChild;
    if (chevronIcon.classList.contains("fa-chevron-down")) {
      chevronIcon.classList.remove("fa-chevron-down");
      chevronIcon.classList.add("fa-chevron-up");
    } else if (chevronIcon.classList.contains("fa-chevron-up")) {
      chevronIcon.classList.add("fa-chevron-down");
      chevronIcon.classList.remove("fa-chevron-up");
    }
  };

  toggleAll = (node) => {
    // toggle self
    if (node && node.classList) {
      node.classList.toggle("show");

      // toggle first child with this function
      this.toggleAll(node.firstChild);

      // toggle next sibling with this function
      this.toggleAll(node.nextSibling);
    }
  };

  toggle = (node) => {
    let overlay = this.getOverlay(node);

    if (overlay.classList.contains("hide")) {
      overlay.className = "overlay";
    } else {
      overlay.className += " hide";
    }

    let chevron = overlay.nextSibling;
    this.toggleChevron(chevron);

    // toggle the rest of the nodes
    this.toggleAll(overlay.nextSibling);
  };

  nodeCanToggle = (node) => {
    if (
      !(
        node.nodeName === "IMG" ||
        node.nodeName === "H1" ||
        node.nodeName === "P" ||
        node.nodeName === "DIV" ||
        node.nodeName === "I"
      )
    ) {
      return false;
    }

    if (node.nodeName === "DIV") {
      let divClasslist = node.classList;
      if (
        !(
          divClasslist.contains("overlay") ||
          divClasslist.contains("overlayText") ||
          divClasslist.contains("chevron")
        )
      ) {
        return false;
      }
    }

    if (node.nodeName === "I") {
      if (node.classList.contains("fa-download")) {
        return false;
      }
    }

    // check if not possible for the IMG because it can only be the
    // image of the second child(blog banner image) in order to continue to toggle
    if (node.nodeName === "IMG") {
      let goodIMG =
        node.parentNode.parentNode.firstChild.nextSibling.nextSibling
          .nextSibling === node.parentNode;
      if (!goodIMG) {
        return false;
      }
    }

    // check if not possible for the H1 because it can only be the
    // the first child as blog header in order to continue to toggle
    if (node.nodeName === "H1") {
      let goodH1 = node.parentNode.firstChild.nextSibling.nextSibling === node;
      if (!goodH1) {
        return false;
      }
    }

    // check if not possible for the P because it can only be the
    // the third child as under blog header in order to continue to toggle
    if (node.nodeName === "P") {
      let goodP =
        node.parentNode.firstChild.nextSibling.nextSibling.nextSibling === node;
      if (!goodP) {
        return false;
      }
    }

    return true;
  };

  onClick = (e) => {
    // only possible cases can be of these types to continue to toggle
    if (this.nodeCanToggle(e.target)) {
      if (e.target.classList.contains("overlayText")) {
        this.toggle(e.target.parentNode);
      } else {
        this.toggle(e.target);
      }
    }
  };

  onMouseEnter = (e) => {
    // add notFocused class to all but this one
    let blog = this.getOneBlog(e.target);
    blog.classList.add("focused");

    // get siblings of this blog
    let siblings = this.getSiblings(blog);

    // add notFocused to their class
    siblings.forEach((siblingBlog) => {
      siblingBlog.classList.add("notFocused");
      siblingBlog.classList.remove("focused");
    });
  };

  onMouseLeave = (e) => {
    // remove the notFocused class
    let blog = this.getOneBlog(e.target);
    blog.classList.remove("focused");

    // get siblings of this blog
    let siblings = this.getSiblings(blog);

    // add notFocused to their class
    siblings.forEach((siblingBlog) => {
      siblingBlog.classList.remove("notFocused");
      siblingBlog.classList.add("focused");
    });
  };

  onMouseOverOverlay = (e) => {
    let overlay = e.target;
    let chevron = overlay.nextSibling;
    if (chevron) {
      let title = chevron.nextSibling;
      if (title) {
        this.setState({
          marginTop: title.outerHeight + chevron.outerHeight + 10,
        });
      }
    }
  };

  gettFilenameForCurrentPost = (post) => {
    let firstLine = post.split("\n")[0];
    let afterRemovingUnneeded = firstLine.slice(2);
    let filename = afterRemovingUnneeded.replace(/[/\\?%*:|"<>.,;= ]/g, "-");
    return filename;
  };

  render() {
    /* eslint-disable react/no-array-index-key */
    const { posts, marginTop } = this.state;

    return (
      <div>
        <Navigation withBanner={this.props.withBanner}/>
        <div id="content" className="content">
        <SectionBar id="blogs" title="Blogs" />

        <div className="blogs markdown">
          {posts.map((post, idx) => (
            <div
              onClick={this.onClick}
              onMouseEnter={this.onMouseEnter}
              onMouseLeave={this.onMouseLeave}
              className="oneBlog"
              key={idx}
            >
              <ScrollAnimation animateIn="fadeIn">
                <div
                  className="overlay"
                  onMouseOver={this.onMouseOverOverlay}
                  style={{
                    height: "200px",
                    marginTop: marginTop,
                  }}
                >
                  <div className="overlayText">See Full Blog</div>
                </div>
                <div className="chevron">
                  <i className="fa fa-chevron-down"></i>
                </div>
                <ReactMarkdown plugins={[gfm]} source={post} />
                <div className="downloadLink">
                  <a
                    href={
                      "data:text/plain;charset=utf-8," +
                      encodeURIComponent(post)
                    }
                    download={this.gettFilenameForCurrentPost(post) + ".md"}
                  >
                    <i className="fas fa-download"></i>
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
      </div>
    );
    /* eslint-enable react/no-array-index-key */
  }
}

export default Blogs2;
