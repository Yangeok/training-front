import React from 'react';
import { PostContainer } from 'containers';

const BlogPost = ({ match, history, location }) => {
  return (
    <>
      <div>location.pathname: {location.pathname}</div>
      <div>location.search: {location.search}</div>
      <div>location.hash: {location.hash}</div>
      <div>location.state: {location.state}</div>
      <div>location.key: {location.key}</div>
      <div>match.path: {match.path}</div>
      <div>match.url: {match.url}</div>
      <div>match.params.id: {match.params.id}</div>
      <button onClick={() => history.push('/blog/post/2/100')}>button</button>
      <PostContainer />
    </>
  );
};

export default BlogPost;
