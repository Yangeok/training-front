import React, { Component } from 'react';
import { PlatformContainer } from '../';

class YoutubeList extends Component {
  state = {
    url: '/youtube/1/100'
  };

  render() {
    return (
      <>
        <h1>YoutubeList</h1>
        <PlatformContainer url={this.state.url} />
      </>
    );
  }
}

export default YoutubeList;
