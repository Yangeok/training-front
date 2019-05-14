import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Footer, NoMatchForm } from 'components';
import { HeaderContainer } from 'containers';
import { route } from 'routes';

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
        <Route component={NoMatchForm} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
