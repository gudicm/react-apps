import React from 'react';

import FoodieContainer from './FoodieContainer';
import HtmlComment from '../../components/HtmlComment';
import List from '../../components/List';
import { CONTACT_INFO, OPENING_HOURS } from '../../constants/components';

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-top" style={{ backgroundImage: "url('./src/assets/footer-illustration.png')" }}>
        <div className="container">
          <HtmlComment comment="Foodie section" />
          <FoodieContainer />
          <HtmlComment comment="Foodie section end" />

          <HtmlComment comment="Contact Info section" />
          <List
            items={CONTACT_INFO}
            itemFirstClassName="footer-list-title"
            listClassName="footer-list"
            itemLabelClassName="footer-list-item"
            tag="p"
          />
          <HtmlComment comment="Contact Info section end" />

          <HtmlComment comment="Opening hours section" />
          <List
            items={OPENING_HOURS}
            itemFirstClassName="footer-list-title"
            listClassName="footer-list"
            itemLabelClassName="footer-list-item"
            tag="p"
          />
          <HtmlComment comment="Opening hours section end" />
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
