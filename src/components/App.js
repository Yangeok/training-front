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
          {/* <Route path="/" /> */}
          {/* <Route path="/about" component={About} /> */}
          {/* <Route path="/blog" component={BlogList} /> */}
          {/* <Route path="/youtube" component={YoutubeList} /> */}
          {/* <Route path="/blog/post" component={BlogPost} /> */}
          {/* <Route path="/youtube/post" component={YoutubePost} /> */}
          {/* <Route path="/test" component={Test} /> */}
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
