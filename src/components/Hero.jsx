import React, { useContext } from 'react';
import PortfolioContext from '../context/context';
import { withStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const Hero = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #00b09b 10%, #96c93d 100%)',
    }

  })(Button);

  return (
      <section id="hero">
        <Container>
            <h1 className="hero-title">
              {title}
              <span className="hero-name">{name}</span>
                <br />
                {subtitle}
            </h1>
            <p className="hero-cta">
              <StyledButton>
                {cta}
              </StyledButton>
            </p>
        </Container>
      </section>
  );
};

export default Hero;
