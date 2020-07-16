import React, { useContext } from 'react';
import PortfolioContext from '../context/context';
import Grid from '@material-ui/core/Grid';
import { useSpring, config, animated } from 'react-spring';

// import components
import Image from './Image/Image';
import Title from './Title';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { firstParagraph, secondParagraph } = about;

  return (
      <section id="about">
          <Grid container spacing={3} >
            <Grid item xs={12}>
              <Title title="About Me" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="about-image">
                <Image />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="about-info">
                <p>{firstParagraph}</p>
                <p>{secondParagraph}</p>
              </div>
            </Grid>
          </Grid>
      </section>
  )

}

export default About;