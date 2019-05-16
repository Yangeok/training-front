import React from 'react';
import { ListContainer } from 'containers';
import 'assets/styles/page.css';

const YoutubeList = ({ match, history, location }) => {
  return (
    <>
      <h3 className="main-decsription">유튜브 목록</h3>
      <div className="main-decsription">유튜브를 가나다 순으로 표시합니다.</div>
      <ListContainer
        id={match.params.id}
        history={history}
        location={location}
      />
    </>
  );
};

export default YoutubeList;
