import React, { Component } from 'react';
import axios from 'axios';
import { TableTemplateContainer } from '../';

class YoutubeList extends Component {
  state = {
    people: [],
    completed: 0
  };

  componentDidMount() {
    this.timer = setInterval(this.progress(), 20);
    axios.get('/youtube').then(res => {
      const people = res.data;
      this.setState({ people });
    });
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>YoutubeList</h1>
        <TableTemplateContainer
          people={this.state.people}
          progress={classes}
          completed={this.state.completed}
        />
      </div>
    );
  }
}

export default YoutubeList;
