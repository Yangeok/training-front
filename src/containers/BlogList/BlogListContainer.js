import React, { Component } from 'react';
import { PlatformContainer } from '../';

class BlogList extends Component {
  state = {
    url: '/blog/1/100'
  };

  render() {
    return (
      <>
        <h1>BlogList</h1>
        <PlatformContainer url={this.state.url} />
      </>
    );
  }
}

export default BlogList;
