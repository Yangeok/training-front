import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  TableRow,
  TableCell,
  Table,
  TableBody,
  TableHead
} from '@material-ui/core';

const BlogList = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get('/blog').then(res => {
      setPeople(res.data.parseYaml.parseBlog);
    });
  }, []);

  return (
    <div>
      <h1>BlogList</h1>
      <Table>
        <TableHead>
          <TableCell>NAME</TableCell>
          <TableCell>DESCRIPTION</TableCell>
          <TableCell>URL</TableCell>
        </TableHead>
        <TableBody>
          {people.map(person => (
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
};

export default BlogList;
