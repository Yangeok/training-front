import React from 'react';
import { PostContainer } from 'containers';

const YoutubePost = ({ match, history, location }) => {
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

export default YoutubePost;
