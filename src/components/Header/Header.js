import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <h1>SPORTS-LOG</h1>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/blog'}>Blog</Link>
        <Link to={'/youtube'}>Youtube</Link>
        <Link to={'/blog/post'}>BlogPost</Link>
        <Link to={'/youtube/post'}>YoutubePost</Link>
        <Link to={'/test'}>Test</Link>
      </div>
    );
  }
}

export default Header;
