import { Route } from '../types/constants';

export const routes: Route[] = [
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
        path: '/#shop',
        isHeader: true,
    },
    {
        label: 'Blog',
        path: '/blog',
        isHeader: true,
    },
    {
        label: 'Contact Us',
        path: '/contact',
        isHeader: true
    },
];
