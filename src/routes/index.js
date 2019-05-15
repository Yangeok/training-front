import React from 'react';
import { Link, Route } from 'react-router-dom';

import {
  Home,
  About,
  BlogList,
  BlogPost,
  YoutubeList,
  YoutubePost
} from 'pages';

const obj = [
  {
    path: '/#/',
    page: Home,
    name: 'Home'
  },
  {
    path: '/about/',
    page: About,
    name: 'About'
  },
  {
    path: '/blog/:id/20/',
    page: BlogList,
    name: 'BlogList'
  },
  {
    path: '/blog/post/:id/20/',
    page: BlogPost,
    name: 'BlogPost'
  },
  {
    path: '/youtube/:id/20/',
    page: YoutubeList,
    name: 'YoutubeList'
  },
  {
    path: '/youtube/post/:id/20/',
    page: YoutubePost,
    name: 'YoutubePost'
  }
];

export const route = obj.map(({ path, page }) => (
  <Route exact={true} path={path} component={page} key={path} />
));

export const options = obj.map(({ path, name }) => (
  <Link className="header" to={path}>
    {name}
  </Link>
));
