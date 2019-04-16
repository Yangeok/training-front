import React, { Component } from 'react';
import axios from 'axios';
import { PlatformContainer } from '../';

class YoutubeList extends Component {
  state = {
    url: '/youtube'
  };

  componentDidMount() {
    // axios.get('/youtube').then(res => {
    //   const people = res.data;
    //   this.setState({ people });
    // });
  }

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
