import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PlatformContainer } from '../';

const BlogList = () => {
  return (
    <>
      <h1>BlogList</h1>
      <PlatformContainer url="blog" />
    </>
  );
};

export default BlogList;
