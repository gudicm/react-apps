import React from 'react';

import { Route } from '../../types/constants';

type NavigationProps = {
  routes: Route[];
  classNameNav?: string;
  classNameList?: string;
  classNameItem?: string;
  classNameLink?: string;
  onClickItem?: () => void;
};
const Navigation: React.FC<NavigationProps> = ({
  routes,
  classNameNav = 'navbar',
  classNameList = 'navbar-list',
  classNameItem = 'nav-item',
  classNameLink = 'navbar-link',
  onClickItem,
}) => {
  return (
    <nav className={classNameNav} data-navbar="">
      <ul className={classNameList}>
        {routes
          .filter((route) => route.isHeader)
          .map((route) => (
            <li key={route.path} className={classNameItem}>
              <a
                href={route.path}
                className={classNameLink}
                data-nav-link=""
                onClick={() => {
                  if (onClickItem) {
                    onClickItem();
                  }
                }}
              >
                {route.label}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
};
export default Navigation;
