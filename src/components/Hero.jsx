import React, { useContext, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { useSpring, animated } from 'react-spring';
import PortfolioContext from '../context/context';

const Hero = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;
  const letters = ['a', 'j', ' ', 'j'];

  //Animation
  
  
  const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #00b09b 10%, #96c93d 100%)',
    }
    
  })(Button);
      const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
      });
    
      const AnimatedView = animated(StyledButton);

  return (
      <section id="hero">
        <Container>
            <h1 className="hero-title">
              {title}
              <animated.span className="hero-name" style={props}>{name}</animated.span>
                <br />
                {subtitle}
            </h1>
            <p className="hero-cta">
            <AnimatedView style={props}>
                {cta}
              </AnimatedView>
              {/* <StyledButton>
                {cta}
              </StyledButton> */}
            </p>
        </Container>
      </section>
  );
};

export default Hero;
