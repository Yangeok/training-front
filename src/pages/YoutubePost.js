import React from 'react';
import { PostContainer } from 'containers';
import 'assets/styles/page.css';

const YoutubePost = ({ match, history, location }) => {
  return (
    <>
      <h3 className="main">유튜브 피드</h3>
      <div className="main">유튜브 최신 영상들을 표시합니다.</div>
      <PostContainer
        id={match.params.id}
        history={history}
        location={location}
        match={match}
      />
    </>
  );
};

export default YoutubePost;
