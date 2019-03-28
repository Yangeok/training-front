import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        © {new Date().getFullYear()}, Built by {``}
        <a href="https://yangeok.github.io/">Yangeok</a>
      </div>
    );
  }
}

export default Footer;
