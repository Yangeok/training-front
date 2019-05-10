import React from 'react';
import { PostContainer } from 'containers';

const BlogPost = ({ match, history, location }) => {
  return (
    <>
      <PostContainer
        id={match.params.id}
        history={history}
        location={location}
      />
    </>
  );
};

export default BlogPost;
