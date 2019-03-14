import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header, Footer, Layout } from './components/';
import { About, BlogList, YoutubeList, BlogPost, YoutubePost } from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <Router />
        <Header />
        <Layout />
        <Route path="/" />
        <Route path="/about" component={About} />
        <Route path="/blog" component={BlogList} />
        <Route path="/youtube" component={YoutubeList} />
        <Route path="/blog/post" component={BlogPost} />
        <Route path="/youtube/post" component={YoutubePost} />
        <Footer />
      </div>
    );
  }
}

export default App;
