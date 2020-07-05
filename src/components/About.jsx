import React, { useContext } from 'react';
import PortfolioContext from '../context/context';
import Grid from '@material-ui/core/Grid';
import Image from './Image/Image';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { firstParagraph, secondParagraph } = about;

  return (
      <section id="about">
        {/* <Container> */}
          <Grid container spacing={3} >
            <Grid item xs={12}>
              <h1>About Me</h1>
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
        {/* </Container> */}
      </section>
  )

}

export default About;