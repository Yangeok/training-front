import React from 'react';
import { Switch, Route, Router, HashRouter, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Footer, NoMatchForm } from 'components';
import { HeaderContainer } from 'containers';
import { route } from 'routes';
import { Home } from 'pages';

const title = 'Training-log';

const App = () => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="Trainging blog & youtube" />
      </Helmet>
      <HeaderContainer title={title} />
      <Switch>
        {route}
        {/* <Route component={NoMatchForm} /> */}
      </Switch>
      <Footer />
    </>
  );
};

export default App;
