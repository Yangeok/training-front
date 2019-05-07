import React from 'react';
import { Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Header, Footer } from 'components';
import { route } from 'routes';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Training-log</title>
        <meta name="description" content="Trainging blog & youtube" />
      </Helmet>
      <Header />
      <Switch>{route}</Switch>
      <Footer />
    </>
  );
};

export default App;
