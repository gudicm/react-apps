import React from 'react';

import HtmlComment from '../../../components/HtmlComment';
import List from '../../../components/List';
import { CONTACT_INFO, OPENING_HOURS } from '../../../constants/components';
import FoodieContainer from '../FoodieContainer';

interface TopFooterProps {
  isFull?: boolean;
}
const TopFooter: React.FC<TopFooterProps> = ({
    isFull = true,
  }
) => {
  return (
    <div className="footer-top" style={{ backgroundImage: "url('./src/assets/footer-illustration.png')" }}>
      <div className={isFull ? 'container full-viewport' : 'container'}>
      
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
  );
};

export default TopFooter;
