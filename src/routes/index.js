import {
  Home,
  About,
  BlogList,
  BlogPost,
  YoutubeList,
  YoutubePost,
  Test
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
    path: '/blog',
    page: BlogList
  },
  {
    path: '/blog/post',
    page: BlogPost
  },
  {
    path: '/youtube',
    page: YoutubeList
  },
  {
    path: '/youtube/post',
    page: YoutubePost
  },
  {
    path: '/test',
    page: Test
  }
];
