import React, { useContext } from 'react';
import PortfolioContext from '../context/context';

const Hero = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  return (
      <section>
        <h1>
          {title}
          <span>
              {name}
              <br />
              {subtitle}
          </span>
        </h1>
        <p>
          <a>
            {cta}
          </a>
        </p>
      </section>
  );
};

export default Hero;
