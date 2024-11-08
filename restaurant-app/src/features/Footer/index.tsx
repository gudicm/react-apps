import React from 'react';

import TopFooter from './Top';
import HtmlComment from '../../components/HtmlComment';

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="footer">
      <TopFooter />

      <HtmlComment comment="Footer bottom section" />
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
      <HtmlComment comment="Footer bottom section end" />
    </footer>
  );
};

export default Footer;
