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
    path: '/',
    page: Home,
    name: 'Home'
  },
  {
    path: '/about',
    page: About,
    name: 'About'
  },
  {
    path: '/blog/1/100',
    page: BlogList,
    name: 'BlogList'
  },
  {
    path: '/blog/post/1/100',
    page: BlogPost,
    name: 'BlogPost'
  },
  {
    path: '/youtube/1/100',
    page: YoutubeList,
    name: 'YoutubeList'
  },
  {
    path: '/youtube/post/1/100',
    page: YoutubePost,
    name: 'YoutubePost'
  }
];

export const route = obj.map(({ path, page }) => (
  <Route exact={true} path={path} component={page} key={path} />
));

export const options = obj.map(({ path, name }) => (
  <Link to={path}>{name}</Link>
));
