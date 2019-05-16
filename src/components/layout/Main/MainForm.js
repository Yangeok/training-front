import React from 'react';
import 'assets/styles/page.css';

const MainForm = ({ posts, children }) => {
  return (
    <div className="grid-content">
      {children}
      <ul>
        {posts &&
          posts.map(post => {
            return (
              <li className="grid-list">
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  {post.title.substring(0, 40)}...
                </a>{' '}
                {post.creator}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MainForm;
