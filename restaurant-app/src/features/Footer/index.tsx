import React from 'react';

import { SOCIAL_ICONS } from '../../constants/components';
import SocialLinks from '../SocialLinks';

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-top" style={{ backgroundImage: "url('./src/assets/footer-illustration.png')" }}>
        <div className="container">
          <div className="footer-brand">
            <a href="" className="logo">
              Foodie<span className="span">.</span>
            </a>

            <p className="footer-text">
              Financial experts support or help you to to find out which way you can raise your funds more.
            </p>

            <SocialLinks items={SOCIAL_ICONS} />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright-text">
            © 2022
            <a href="#" className="copyright-link">
              codewithsadee
            </a>{' '}
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
