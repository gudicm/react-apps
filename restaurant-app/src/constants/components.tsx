import React from 'react';

import FacebookLogo from '../features/Svgs/FacebookLogo';
import InstagramLogo from '../features/Svgs/InstagramLogo';
import PinterestLogo from '../features/Svgs/PinTestLogo';
import { ListItem } from '../types/components';
import { LinkItem } from '../types/features';

export const SOCIAL_ICONS: LinkItem[] = [
  {
    component: <FacebookLogo />,
    link: 'https://www.facebook.com/',
  },
  {
    component: <InstagramLogo />,
    link: 'https://www.instagram.com/',
  },
  {
    component: <PinterestLogo />,
    link: 'https://www.pinterest.com/',
  },
];

export const CONTACT_INFO: Array<ListItem> = [
  {
    label: 'Contact Info',
  },
  {
    label: '+1 (062) 109-9222',
  },
  {
    label: 'Info@YourGmail24.com',
  },
  {
    label: '153 Williamson Plaza, Maggieberg, MT 09514',
  },
];

export const OPENING_HOURS: Array<ListItem> = [
  {
    label: 'Opening Hours',
  },
  {
    label: 'Mon - Fri: 08:00 am - 09:00 pm',
  },
  {
    label: 'Sat: 10:00 am - 08:00 pm',
  },
  {
    label: 'Sun: Closed',
  },
];
