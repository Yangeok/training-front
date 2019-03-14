import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <h1>SPORTS-LOG</h1>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/blog'}>Blog</Link>
          </li>
          <li>
            <Link to={'/youtube'}>Youtube</Link>
          </li>
          <li>
            <Link to={'/blog/post'}>BlogPost</Link>
          </li>
          <li>
            <Link to={'/youtube/post'}>YoutubePost</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
