import React, { useContext } from "react";
import PortfolioContext from "../context/context";
import Grid from "@material-ui/core/Grid";
import { useSpring, config, animated } from "react-spring";

// import components
import Image from "./Image/Image";
import Title from "./Title";

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { firstParagraph, secondParagraph } = about;

  return (
    <section id="about">
      <Grid container>
        <Grid item xs={12}>
          <Title title="About Me" />
        </Grid>
        <Grid item xs={12} sm={6} className="about-image">
          <Image />
        </Grid>
        <Grid item xs={12} sm={6} className="about-info">
          <p>{firstParagraph}</p>
          <p>{secondParagraph}</p>
        </Grid>
      </Grid>
    </section>
  );
};

export default About;
