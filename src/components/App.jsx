import React, { useState, useEffect } from 'react';
import '../style/main.scss';
import { PortfolioProvider } from '../context/context';

// component imports
// import Image from './Image/Image';
import Hero from './Hero';
import About from './About';

// other imports
import { heroData, aboutData } from '../data/data';

const App = () => {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about }}>
      <Hero id="hero" />
      <About />
    </PortfolioProvider>
  );
};

export default App;
