
import React from 'react';

import Image from '../../components/Image';
import CheckedIcon from '../Ionic/Checked';



const About: React.FC = () => {
    return (
        <section className="section section-divider gray about" id="about">
            <div className="container">

                <div className="about-banner">
                    <Image
                        src="./src/assets/about-banner.png"
                        width="509"
                        height="459"
                        alt="Burger with Drinks"
                        className="w-100 about-img"
                        lazyLoading={true}
                    />

                    <Image
                        src="./src/assets/sale-shape-red.png"
                        width="216"
                        height="226"
                        alt="get up to 50% off now"
                        className="abs-img scale-up-anim"
                        lazyLoading={true}
                    />

                </div>
                <div className="about-content">

                    <h2 className="h2 section-title">
                        Caferio, Burgers, and Best Pizzas
                        <span className="span">in Town!</span>
                    </h2>

                    <p className="section-text">
                        The restaurants in Hangzhou also catered to many northern Chinese who had fled south from Kaifeng during
                        the Jurchen
                        invasion of the 1120s, while it is also known that many restaurants were run by families.
                    </p>

                    <ul className="about-list">
                        <li className="about-item">
                            <CheckedIcon/>
                            <span className="span">Delicious &amp; Healthy Foods</span>

                        </li>
                    </ul>
                </div>

            </div>
        </section>



    );
};

export default About;
