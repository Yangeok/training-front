import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header, Footer, Layout } from './components/';
import { About, Blog, Youtube } from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Layout />
        <Route path="/" />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/youtube" component={Youtube} />
        <Footer />
      </div>
    );
  }
}

export default App;
