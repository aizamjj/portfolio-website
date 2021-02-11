import React, { useContext } from "react";
import Container from "@material-ui/core/Container";
import { useSpring, config, animated } from "react-spring";
import PortfolioContext from "../context/context";

const Hero = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

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
            <span className="gradient-name">{name}</span>
            <br />
            {subtitle}
          </h1>
          <a className="cta-btn" href="#about">
            {cta}
          </a>
        </animated.div>
      </Container>
    </section>
  );
};

export default Hero;
