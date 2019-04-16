import React, { Component } from 'react';
import { Header, Footer } from 'components';
import { HomeContainer } from 'containers';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomeContainer />
        <Footer />
      </div>
    );
  }
}

export default Home;
