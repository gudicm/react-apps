import React from 'react';

import FacebookLogo from '../features/Svgs/FacebookLogo';
import InstagramLogo from '../features/Svgs/InstagramLogo';
import PinterestLogo from '../features/Svgs/PinTestLogo';
import { LinkItem } from '../types/features';

const SOCIAL_ICONS: LinkItem[] = [
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

export { SOCIAL_ICONS };
