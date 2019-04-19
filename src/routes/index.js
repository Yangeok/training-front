import {
  Home,
  About,
  BlogList,
  BlogPost,
  YoutubeList,
  YoutubePost
} from '../pages';

export const route = [
  {
    path: '/',
    page: Home
  },
  {
    path: '/about',
    page: About
  },
  {
    path: '/blog/1/100',
    page: BlogList
  },
  {
    path: '/blog/post/1/100',
    page: BlogPost
  },
  {
    path: '/youtube/1/100',
    page: YoutubeList
  },
  {
    path: '/youtube/post/1/100',
    page: YoutubePost
  }
];
