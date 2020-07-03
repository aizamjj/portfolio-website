import React, { useContext } from 'react';
import PortfolioContext from '../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { firstParagraph, secondParagraph } = about;

  return (
      <section>
          <h1>About Me</h1>
          <div>
            <p>{firstParagraph}</p>
            <p>{secondParagraph}</p>
          </div>
      </section>
  )

}

export default About;