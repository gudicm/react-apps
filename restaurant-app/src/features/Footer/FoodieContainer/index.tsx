import React from 'react';

import { SOCIAL_ICONS } from '../../../constants/components';
import SocialLinks from '../../SocialLinks';

const FoodieContainer: React.FC = () => {
  return (
    <>
      <div style={{ display: 'none' }} dangerouslySetInnerHTML={{ __html: `<!-- Foodie section -->` }} />
      <div className="footer-brand">
        <a href="" className="logo">
          Foodie<span className="span">.</span>
        </a>

        <p className="footer-text">
          Financial experts support or help you to to find out which way you can raise your funds more.
        </p>

        <SocialLinks items={SOCIAL_ICONS} />
      </div>
      <div style={{ display: 'none' }} dangerouslySetInnerHTML={{ __html: `<!-- End Foodie section -->` }} />
    </>
  );
};

export default FoodieContainer;
