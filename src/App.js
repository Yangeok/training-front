import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header, Footer, Layout } from './components/';
import { About, BlogList, YoutubeList } from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Layout />
        <Route path="/" />
        <Route path="/about" component={About} />
        <Route path="/blog" component={BlogList} />
        <Route path="/youtube" component={YoutubeList} />
        <Footer />
      </div>
    );
  }
}

export default App;
