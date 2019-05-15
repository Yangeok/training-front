import React from 'react';

const Footer = () => {
  return (
    <div>
      <p />
      <div className="footer">
        {' '}
        © {new Date().getFullYear()}, Built by {``}
        <a href="https://yangeok.github.io/">Yangeok</a>
      </div>
    </div>
  );
};

export default Footer;
