import React from 'react';

import { LinkItem } from '../../types/features';
import FacebookLogo from '../Svgs/FacebookLogo';
import InstagramLogo from '../Svgs/InstagramLogo';
import PinterestLogo from '../Svgs/PinTestLogo';

const sociaIcons: LinkItem[] = [
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

            <ul className="social-list">
              {sociaIcons.map((el, index) => (
                <li key={index}>
                  <a href={el.link} className="social-link">
                    {el.component}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
