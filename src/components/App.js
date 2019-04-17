import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Header, Footer } from './';
import { route } from '../routes';

class App extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Training-log</title>
          <meta name="description" content="Trainging blog & youtube" />
        </Helmet>
        <Header />
        <Switch>
          {route.map(({ path, page }) => (
            <Route exact={true} path={path} component={page} />
          ))}
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
