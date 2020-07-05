import React, { useState, useEffect } from 'react';
import '../style/main.scss';
import { PortfolioProvider } from '../context/context';

// component imports
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Side from './Side';

// other imports
import { heroData, aboutData, projectsData, footerData, contactData } from '../data/data';

const App = () => {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [footer, setFooter] = useState([]);
  const [contact, setContact] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setFooter([...footerData ]);
    setContact({...contactData});
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, footer, contact }}>
      <Side />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
};

export default App;
