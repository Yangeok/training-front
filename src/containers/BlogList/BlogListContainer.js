import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PlatformContainer } from '../';

const BlogList = () => {
  // const [people, setPeople] = useState([]);

  // useEffect(() => {
  //   axios.get('blog').then(res => {
  //     setPeople(res.data);
  //   });
  // }, []);

  return (
    <div>
      <h1>BlogList</h1>
      <PlatformContainer url="blog" />
    </div>
  );
};

export default BlogList;
