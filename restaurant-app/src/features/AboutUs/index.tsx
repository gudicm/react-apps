import React from 'react';

import Image from '../../components/Image';

Image
const About: React.FC = () => {
    return (
        <section className="about" id="about">
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
                    lazyLoading={false} 
                />
            </div>


        </section>

    );
};

export default About;
