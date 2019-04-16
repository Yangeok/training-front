import React, { Component } from 'react';
import { FeedContainer } from '../';

class BlogPost extends Component {
  state = {
    url: '/blog/feed'
  };

  render() {
    return (
      <div>
        <h1>BlogPost</h1>
        <FeedContainer url={this.state.url} />
      </div>
    );
  }
}

export default BlogPost;
