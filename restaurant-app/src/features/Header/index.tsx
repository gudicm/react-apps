import React from 'react';

import Button from '../../components/Button';


const Header: React.FC = () => {
    return (
        <>
            <header className="header active">
                <div className="container">

                    <h1>
                        <a href="https://codewithsadee.github.io/foodie/#" className="logo">Foodie<span className="span">.</span></a>
                    </h1>

                    <nav className="navbar" data-navbar="">
                        <ul className="navbar-list">

                            <li className="nav-item">
                                <a href="https://codewithsadee.github.io/foodie/#home" className="navbar-link" data-nav-link="">Home</a>
                            </li>

                            <li className="nav-item">
                                <a href="https://codewithsadee.github.io/foodie/#about" className="navbar-link" data-nav-link="">About Us</a>
                            </li>

                            <li className="nav-item">
                                <a href="https://codewithsadee.github.io/foodie/#food-menu" className="navbar-link" data-nav-link="">Shop</a>
                            </li>

                            <li className="nav-item">
                                <a href="https://codewithsadee.github.io/foodie/#blog" className="navbar-link" data-nav-link="">Blog</a>
                            </li>

                            <li className="nav-item">
                                <a href="https://codewithsadee.github.io/foodie/#" className="navbar-link" data-nav-link="">Contact Us</a>
                            </li>

                        </ul>
                    </nav>

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