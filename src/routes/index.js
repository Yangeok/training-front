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
    name: '메인'
  },
  {
    path: '/about/',
    page: About,
    name: '도움말'
  },
  {
    path: '/blog/:id/1/',
    page: BlogList,
    name: '블로그 목록'
  },
  {
    path: '/blog/post/:id/15/',
    page: BlogPost,
    name: '블로그 피드'
  },
  {
    path: '/youtube/:id/1/',
    page: YoutubeList,
    name: '유튜브 목록'
  },
  {
    path: '/youtube/post/:id/15/',
    page: YoutubePost,
    name: '유튜브 피드'
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
