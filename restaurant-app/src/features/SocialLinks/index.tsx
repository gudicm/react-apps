import React from 'react';

import { LinkItem } from '../../types/features';

interface SocialIconsProps {
  items: LinkItem[];
}

const SocialLinks: React.FC<SocialIconsProps> = ({ items }) => {
  return (
    <>
      <ul className="social-list">
        {items.map((el, index) => (
          <li key={index}>
            <a href={el.link} className="social-link">
              {el.component}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SocialLinks;
