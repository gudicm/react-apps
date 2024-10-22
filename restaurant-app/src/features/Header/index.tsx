import React, { useEffect, useState } from 'react';

import Button from '../../components/Button';
import { ROUTES } from '../../constants/routes';
import Navigation from '../Navigation';

const Header: React.FC = () => {
    const [toggleSmallNav, setToggleSmallNav] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            // Check if the viewport width is greater than 990px
            if (window.innerWidth > 990) {
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

    }, [])

    return (
        <>
            <header className="header active">
                <div className="container">

                    <h1>
                        <a href="https://codewithsadee.github.io/foodie/#" className="logo">Foodie<span className="span">.</span></a>
                    </h1>


                    <div className="header-btn-group">



                        <Navigation
                            routes={ROUTES}
                        />

                        {toggleSmallNav && (

                            <Navigation
                                routes={ROUTES}
                                classNameNav='navbar active'

                                onClickItem={() => setToggleSmallNav(!toggleSmallNav)}
                            />

                        )}

                        <Button
                            text="Reservation"
                            className="btn btn-hover"
                        />
                        <Button
                            className="nav-toggle-btn"
                            onClick={() => {
                                setToggleSmallNav(!toggleSmallNav)
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
    )

}
export default Header;