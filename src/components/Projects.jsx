import React, { useContext, useEffect, useState } from 'react';
import PortfolioContext from '../context/context';
import Title from './Title';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  return (
    <section id="projects">
      <Grid container spacing={3}>
        <Grid item xs={12} >
            <Title title="Projects" />
        </Grid>
        {/* <Grid item xs={6} spacing={3}> */}
          {projects.map((projects, index) => {
              const { name, url } = projects;
              return (
                <Grid key={index} xs={6} spacing={3} >{name}</Grid>
              )
          })}
         {/* </Grid> */}
      </Grid>

    </section>
  )
}

export default Projects;