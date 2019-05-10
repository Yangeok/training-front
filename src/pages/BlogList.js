import React from 'react';
import { ListContainer } from 'containers';

const BlogList = ({ match, history, location }) => {
  return (
    <>
      <ListContainer
        id={match.params.id}
        history={history}
        location={location}
      />
    </>
  );
};

export default BlogList;
