import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer } from './';
import { route } from '../routes';

class App extends Component {
  render() {
    return (
      <>
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
