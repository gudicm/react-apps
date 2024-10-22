import React from 'react';

import Button from '../../components/Button';
import Image from '../../components/Image';

const Main: React.FC = () => {
  return (
    <main>
      <article>
        {/* hero section */}
        <section className="hero" id="home" style={{ backgroundImage: "url('./src/assets/hero-bg.jpg')" }}>
          <div className="container">
            <div className="hero-content">
              <p className="hero-subtitle">Eat Sleep And</p>
              <h2 className="h1 hero-title">Supper delicious Burger in town!</h2>
              <p className="hero-text">
                Food is any substance consumed to provide nutritional support for an organism.
              </p>

              {/* <button className="btn">Book A Table</button> */}
              <Button text="Book A Table" className="btn" />
            </div>

            <figure className="hero-banner">
              <Image src="./src/assets/hero-banner-bg.png" width="820" height="716" className="w-100 hero-img-bg" />
              <Image
                src="./src/assets/hero-banner.png"
                width="700"
                height="637"
                alt="Burger"
                className="w-100 hero-img"
              />
            </figure>
          </div>
        </section>
      </article>
    </main>
  );
};
export default Main;
