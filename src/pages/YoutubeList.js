import React from 'react';
import { ListContainer } from 'containers';

const YoutubeList = ({ match, history, location }) => {
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

export default YoutubeList;
