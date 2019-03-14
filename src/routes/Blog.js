import React, { Component } from 'react';
import axios from 'axios';
import proxy from '../lib/readPackageJson';

class Blog extends Component {
  state = {
    people: []
  };

  componentWillMount() {
    axios.get(proxy + '/blog').then(res => {
      console.log(res);
      const people = res.data.parseYaml.parseBlog;
      this.setState({ people });
    });
  }

  render() {
    return (
      <div>
        <h1>Blog</h1>
        <h3>
          {this.state.people.map(person => (
            <ul>
              <li>
                <a href={person.url}>{person.name}</a>
              </li>
              <li>{person.desc}</li>
            </ul>
          ))}
        </h3>
      </div>
    );
  }
}

export default Blog;
