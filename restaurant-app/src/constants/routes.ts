import About from '../features/AboutUs';
import TopFooter from '../features/Footer/Top';
import { Route } from '../types/constants';

export const ROUTES: Route[] = [
  {
    label: 'Home',
    path: '/',
    isHeader: true,
  },
  {
    label: 'About Us',
    path: '/#about',
    isHeader: true,
  },
  {
    label: 'Shop',
    path: '/#food-menu',
    isHeader: true,
  },
  {
    label: 'Blog',
    path: '/blog',
    isHeader: false,
  },
  {
    label: 'Contact',
    path: '/#footer',
    isHeader: true,
  }
];
