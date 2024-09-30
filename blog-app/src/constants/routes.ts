import AboutPage from '../pages/About';
import HomePage from '../pages/Home';
import PostPage from '../pages/Posts';
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
