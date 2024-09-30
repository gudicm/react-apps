import AboutPage from '../pages/about';
import HomePage from '../pages/home';
import PostPage from '../pages/posts';
import { Route } from '../types/constants/routes';

export const routes: Route[] = [
  {
    label: 'Home',
    path: '/',
    component: HomePage,
  },
  {
    label: 'Posts',
    path: '/posts',
    component: PostPage,
  },
  {
    label: 'About',
    path: '/about',
    component: AboutPage,
  },
];
