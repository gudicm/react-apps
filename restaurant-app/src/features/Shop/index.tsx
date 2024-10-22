import React from 'react';

import WrapperRating from './WrapperRating';
import { SHOP_FILTER_LIST } from '../../constants/general';


const Shop: React.FC = () => {


  return (
    <section className="section food-menu" id="food-menu">
      <div className="container">
        <p className="section-subtitle">Popular Dishes</p>

        <h2 className="h2 section-title">
          Our Delicious <span className="span">Foods</span>
        </h2>

        <p className="section-text">
          Food is any substance consumed to provide nutritional support for an organism.
        </p>


        <ul className="fiter-list">
          {SHOP_FILTER_LIST.map((item, index) => (
            <li key={index}>
              <button className="filter-btn  active">{item}</button>
            </li>
          ))}

        </ul>


        <ul className="food-menu-list">
          <li>
            <div className="food-menu-card">

              <div className="card-banner">
                <img src="./src/assets/food-menu-1.png" width="300" height="300" loading="lazy" alt="Fried Chicken Unlimited" className="w-100" />

                <div className="badge">-15%</div>

                <button className="btn food-menu-btn">Order Now</button>
              </div>

              <div className="wrapper">
                <p className="category">Chicken</p>

                <WrapperRating />
              </div>

              <h3 className="h3 card-title">Fried Chicken Unlimited</h3>

              <div className="price-wrapper">

                <p className="price-text">Price:</p>

                <data className="price">$49.00</data>

                {/* <del className="del" value="69.00">$69.00</del> */}

              </div>

            </div>
          </li>
          <li>
            <div className="food-menu-card">

              <div className="card-banner">
                <img src="./src/assets/food-menu-2.png" width="300" height="300" loading="lazy" alt="Burger King Whopper" className="w-100" />

                <div className="badge">-10%</div>

                <button className="btn food-menu-btn">Order Now</button>
              </div>

              <div className="wrapper">
                <p className="category">Noddles</p>
                <WrapperRating />
              </div>

              <h3 className="h3 card-title">Burger King Whopper</h3>

              <div className="price-wrapper">

                <p className="price-text">Price:</p>

                <data className="price" value="29.00">$29.00</data>

                <del className="del">$39.00</del>

              </div>

            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Shop;
