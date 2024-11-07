import React from 'react';

import { SOCIAL_ICONS } from '../../../constants/components';
import SocialLinks from '../../SocialLinks';

const FoodieContainer: React.FC = () => {
  return (
    <>
      <div className="footer-brand">
        <a href="" className="logo">
          Foodie<span className="span">.</span>
        </a>

        <p className="footer-text">
          Financial experts support or help you to to find out which way you can raise your funds more.
        </p>

        <SocialLinks items={SOCIAL_ICONS} />
      </div>
    </>
  );
};

export default FoodieContainer;
