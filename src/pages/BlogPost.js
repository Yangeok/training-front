import React from 'react';
import { PostContainer } from 'containers';
import 'assets/styles/page.css';

const BlogPost = ({ match, history, location }) => {
  return (
    <>
      <h3 className="main-description">블로그 피드</h3>
      <div className="main-description">블로그 최신 글들을 표시합니다.</div>
      <PostContainer
        id={match.params.id}
        history={history}
        location={location}
        match={match}
      />
    </>
  );
};

export default BlogPost;
