import React, { Component } from 'react';
import { FeedContainer } from '../';

class YoutubePostContainer extends Component {
  state = {
    url: '/youtube/feed'
  };

  render() {
    return (
      <>
        <h1>YoutubePost</h1>
        <FeedContainer url={this.state.url} />
      </>
    );
  }
}

export default YoutubePostContainer;
