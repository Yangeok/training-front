import React from 'react';
import { ListContainer } from 'containers';
import 'assets/styles/page.css';

const BlogList = ({ match, history, location }) => {
  return (
    <>
      <h3 className="main-description">블로그 목록</h3>
      <div className="main-description">블로그를 가나다 순으로 표시합니다.</div>
      <ListContainer
        id={match.params.id}
        history={history}
        location={location}
      />
    </>
  );
};

export default BlogList;
