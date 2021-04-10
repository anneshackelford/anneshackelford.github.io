import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import line from "../images/line-black.svg";

/**
 * Multiple loading of react files found here:
 * https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
 *
 * @param {*} r
 * @returns
 */

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(
  require.context("../markdown/versionUpdates", false, /\.md$/)
)
  .sort()
  .reverse();

class VersionHistory extends Component {
  state = {
    posts: []
  };

  onToggle(e) {
    let node = e.target;
    node.scrollIntoView();
  }

  async componentDidMount() {
    const posts = await Promise.all(
      markdownFiles.map((file) => fetch(file).then((res) => res.text()))
    ).catch((err) => console.error(err));

    this.setState((state) => ({ ...state, posts }));
  }

  render() {
    /* eslint-disable react/no-array-index-key */
    const { posts } = this.state;
    let firstPost, remainingPosts;
    if (posts) {
      firstPost = posts[0];
      remainingPosts = posts.slice(1);
    }

    return (
      <div id="versionHistory" className="versionHistory">
        <details className="lastUpdated" onToggle={this.onToggle} >
          <summary>
            <b>{firstPost ? firstPost.split('\n')[0] : null}</b>
          </summary>
          <ReactMarkdown plugins={[gfm]} source={firstPost ? (firstPost.slice(firstPost.indexOf('\n') + 1)) : null} />
          <img className="line" src={line} alt="Line"  height="25w" width="246w"/>
          <h3>Previous Versions</h3>
          <div>
            {remainingPosts ? remainingPosts.map((post, idx) => (
              <div key={idx}>
                <details className="lastUpdated previousVersions" onToggle={this.onToggle}>
                  <summary>
                    <b>{post.split('\n')[0]}</b>
                  </summary>
                  <ReactMarkdown plugins={[gfm]} source={post.slice(post.indexOf('\n') + 1)} />
                </details>
              </div>
            )) : null}
          </div>
        </details>
      </div>
    );
    /* eslint-enable react/no-array-index-key */
  }
}

export default VersionHistory;
