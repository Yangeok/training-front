import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Header, Footer, TestForm } from 'components';
import { route } from 'routes';

class App extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Training-log</title>
          <meta name="description" content="Trainging blog & youtube" />
        </Helmet>
        <Header />
        <TestForm />
        <Switch>{route}</Switch>
        <Footer />
      </>
    );
  }
}

export default App;
