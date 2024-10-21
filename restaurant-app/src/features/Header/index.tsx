import React from 'react';

import Button from '../../components/Button';
import { routes } from '../../constants/routes';
import Navigation from '../Navigation';

const Header: React.FC = () => {
    
    return (
        <>
            <header className="header active">
                <div className="container">

                    <h1>
                        <a href="https://codewithsadee.github.io/foodie/#" className="logo">Foodie<span className="span">.</span></a>
                    </h1>

                    <Navigation
                        routes={routes}
                    />


                    <div className="header-btn-group">

                        <Button
                            text="Reservation"
                            className="btn btn-hover"
                        />
                        {/* <button className="btn btn-hover">Reservation</button> */}

                        <button className="nav-toggle-btn" aria-label="Toggle Menu" data-menu-toggle-btn="">
                            <span className="line top"></span>
                            <span className="line middle"></span>
                            <span className="line bottom"></span>
                        </button>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header;