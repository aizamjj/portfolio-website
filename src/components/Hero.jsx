import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { useSpring, config, animated } from 'react-spring';
import PortfolioContext from '../context/context';

const Hero = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #00b09b 10%, #96c93d 100%)',
    }
  })(Button);

  const props = useSpring({
    from: {
      opacity: 0, 
      marginLeft: -50,
    },
    to: {
      opacity: 1,
      marginLeft: 0,
    },
    config: config.slow,
  });

  return (
      <section id="hero">
        <Container>
          <animated.div style={props}>
            <h1 className="hero-title">
              {title}
              <span className="hero-name">{name}</span>
                <br />
                {subtitle}
            </h1>
          </animated.div>
            <animated.p className="hero-cta" style={ props } >
              <StyledButton>
                {cta}
              </StyledButton>
            </animated.p>
        </Container>
      </section>
  );
};

export default Hero;
