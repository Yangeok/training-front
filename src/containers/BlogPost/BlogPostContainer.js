import React, { Component } from 'react';
import { FeedContainer, Pagination } from '../';

class BlogPost extends Component {
  state = {
    url: '/blog/feed/1/100'
  };

  render() {
    return (
      <>
        <h1>BlogPost</h1>
        <FeedContainer url={this.state.url} />
        <Pagination />
      </>
    );
  }
}

export default BlogPost;
