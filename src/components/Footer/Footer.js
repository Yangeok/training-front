import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div>
        © {new Date().getFullYear()}, Built by
        {` `}
        <Link to="https://yangeok.github.io/">Yangeok</Link>
      </div>
    );
  }
}

export default Footer;
