import React from 'react';
import { Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Header, Footer } from 'components';
import { route } from 'routes';

const title = 'Training-log';

const App = () => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="Trainging blog & youtube" />
      </Helmet>
      <Header title={title} />
      <Switch>{route}</Switch>
      <Footer />
    </>
  );
};

export default App;
