import React, { useEffect, useState } from 'react';

import Button from '../../components/Button';
import { MENU_SCREEN_WIDTH_TOGGLE } from '../../constants/general';
import { ROUTES } from '../../constants/routes';
import Navigation from '../Navigation';

const Header: React.FC = () => {
  const [toggleSmallNav, setToggleSmallNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Check if the viewport width is greater than toggle width
      if (window.innerWidth > MENU_SCREEN_WIDTH_TOGGLE) {
        setToggleSmallNav(false); // Set state to false if the width is more than 990px
      }
    };

    // Initial check when the component mounts
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header className="header active">
        <div className="container">
          <h1>
            <a href="/" className="logo">
              Foodie<span className="span">.</span>
            </a>
          </h1>

          <div className="header-btn-group">
            <Navigation routes={ROUTES} />

            {toggleSmallNav && (
              <Navigation
                routes={ROUTES}
                classNameNav="navbar active"
                onClickItem={() => setToggleSmallNav(!toggleSmallNav)}
              />
            )}

            <Button text="Reservation" className="btn btn-hover" />
            <Button
              className="nav-toggle-btn"
              onClick={() => {
                setToggleSmallNav(!toggleSmallNav);
              }}
            >
              <span className="line top"></span>
              <span className="line middle"></span>
              <span className="line bottom"></span>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
