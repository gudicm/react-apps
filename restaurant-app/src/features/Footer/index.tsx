import React from 'react';

import FoodieContainer from './FoodieContainer';
import List from '../../components/List';
import { CONTACT_INFO, OPENING_HOURS } from '../../constants/components';

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-top" style={{ backgroundImage: "url('./src/assets/footer-illustration.png')" }}>
        <div className="container">
          <FoodieContainer />

          <List
            items={CONTACT_INFO}
            itemFirstClassName="footer-list-title"
            listClassName="footer-list"
            itemLabelClassName="footer-list-item"
            tag="p"
          />

          <List
            items={OPENING_HOURS}
            itemFirstClassName="footer-list-title"
            listClassName="footer-list"
            itemLabelClassName="footer-list-item"
            tag="p"
          />
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
