import React, { useState, useEffect } from 'react';
import '../style/main.scss';
import { PortfolioProvider } from '../context/context';

// component imports
// import Image from './Image/Image';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';

// other imports
import { heroData, aboutData, projectsData } from '../data/data';

const App = () => {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects }}>
      <Hero />
      <About />
      <Projects />
    </PortfolioProvider>
  );
};

export default App;
