import React, { useContext } from 'react';
import PortfolioContext from '../context/context';
import Container from '@material-ui/core/Container';

const Hero = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  return (
      <section id="hero">
        <Container>
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
        </Container>
      </section>
  );
};

export default Hero;
