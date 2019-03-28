import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TableTemplate } from '../components';

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
      <TableTemplate people={people} />
    </div>
  );
};

export default BlogList;
