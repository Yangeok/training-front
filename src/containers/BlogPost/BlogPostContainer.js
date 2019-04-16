import React, { Component } from 'react';
import { FeedContainer } from '../';

class BlogPost extends Component {
  state = {
    url: '/blog/feed'
  };

  render() {
    return (
      <>
        <h1>BlogPost</h1>
        <FeedContainer url={this.state.url} />
      </>
    );
  }
}

export default BlogPost;
