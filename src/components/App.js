import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Header, Footer } from 'components';
import { route } from 'routes';
import { TestContainer } from 'containers';

class App extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Training-log</title>
          <meta name="description" content="Trainging blog & youtube" />
        </Helmet>
        <Header />
        {/* <TestContainer /> */}
        <Switch>{route}</Switch>
        <Footer />
      </>
    );
  }
}

export default App;
