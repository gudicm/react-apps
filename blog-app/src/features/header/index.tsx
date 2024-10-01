import React, { lazy, useState } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../constants/routes';

// example of lazy loading
const FaList = lazy(() => import('react-icons/fa').then((module) => ({ default: module.FaList })));

type HeaderProps = {
  children?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children = null }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // State to control mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <header>
      <span className="menu-icon" onClick={toggleMenu}>
        <FaList />
      </span>
      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        {routes
          .filter((r) => r.isHeader === true)
          .map((route) => (
            <Link key={route.path} to={route.path}>
              {route.label}
            </Link>
          ))}
      </nav>
      {children}
    </header>
  );
};

export default Header;
