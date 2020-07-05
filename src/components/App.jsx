import React, { useState, useEffect } from 'react';
import '../style/main.scss';
import { PortfolioProvider } from '../context/context';

// component imports
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';

// other imports
import { heroData, aboutData, projectsData, footerData } from '../data/data';

const App = () => {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [footer, setFooter] = useState([]);

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setFooter([ ...footerData ]);
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, footer }}>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </PortfolioProvider>
  );
};

export default App;
