import PostContent from '../features/PostContent';
import AboutPage from '../pages/About';
import HomePage from '../pages/Home';
import PostsPage from '../pages/Posts';
import { Route } from '../types/constants/routes';

export const routes: Route[] = [
  {
    label: 'Home',
    path: '/',
    component: HomePage,
    isHeader: true,
  },
  {
    label: 'Posts',
    path: '/posts',
    component: PostsPage,
    isHeader: true,
  },
  {
    label: 'About',
    path: '/about',
    component: AboutPage,
    isHeader: true,
  },
  {
    label: 'Blog Post',
    path: '/posts/:id',
    component: PostContent,
    isHeader: false,
  },
];
