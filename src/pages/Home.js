import React from 'react';
import { HomeContainer } from 'containers';
import 'assets/styles/page.css';

const Home = () => {
  return (
    <>
      <h3 className="margin">메인</h3>
      <span className="margin">메인페이지</span>
      <HomeContainer />
    </>
  );
};

export default Home;
