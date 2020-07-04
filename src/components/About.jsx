import React, { useContext } from 'react';
import PortfolioContext from '../context/context';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { firstParagraph, secondParagraph } = about;

  return (
      <section id="about">
        <Container>
          <GridList col={3}>
            <h1>About Me</h1>
            <div>
              <p>{firstParagraph}</p>
              <p>{secondParagraph}</p>
            </div>
          </GridList>
        </Container>
      </section>
  )

}

export default About;