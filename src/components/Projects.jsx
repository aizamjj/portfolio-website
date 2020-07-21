import React, { useContext, useEffect, useState } from 'react';
import PortfolioContext from '../context/context';
import Title from './Title';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container'

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  return (
    <section id="projects">
        <Container>
          {projects.map((projects, index) => {
            const { name, url, description } = projects;
            return (
            <div className="box">
                <div className="content">
                  <h2 key={index} className="projects-name" >{name}</h2>
                  <p key={index} className="projects-description" >{description}</p>
                </div>
            </div>
            )
          })}
        </Container>
    </section>
  )
}

export default Projects;