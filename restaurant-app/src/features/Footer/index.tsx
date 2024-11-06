import React from 'react';

import { SOCIAL_ICONS } from '../../constants/components';
import SocialLinks from '../SocialLinks';
import Foodie from './Foodie';

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-top" style={{ backgroundImage: "url('./src/assets/footer-illustration.png')" }}>
        <div className="container">

          <Foodie />

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
