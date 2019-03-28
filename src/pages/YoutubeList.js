import React, { Component } from 'react';
import axios from 'axios';
import {
  TableRow,
  TableCell,
  Table,
  TableBody,
  TableHead
} from '@material-ui/core';

class YoutubeList extends Component {
  state = {
    people: []
  };

  componentDidMount() {
    axios.get('/youtube').then(res => {
      const people = res.data.parseYaml.parseYoutube;
      this.setState({ people });
    });
  }

  render() {
    return (
      <div>
        <h1>YoutubeList</h1>
        <Table>
          <TableHead>
            <TableCell>NAME</TableCell>
            <TableCell>DESCRIPTION</TableCell>
            <TableCell>URL</TableCell>
          </TableHead>
          <TableBody>
            {this.state.people.map(person => (
              <TableRow>
                <TableCell key={person.id}>{person.name}</TableCell>
                <TableCell>{person.desc}</TableCell>
                <TableCell>
                  <a href={person.url}>{person.url}</a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default YoutubeList;
