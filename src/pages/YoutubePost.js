import React from 'react';
import { PostContainer } from 'containers';
import 'assets/styles/page.css';

const YoutubePost = ({ match, history, location }) => {
  return (
    <>
      <h3 className="margin">유튜브 피드</h3>
      <span className="margin">유튜브 최신 영상들을 표시합니다.</span>
      <PostContainer
        id={match.params.id}
        history={history}
        location={location}
      />
    </>
  );
};

export default YoutubePost;
