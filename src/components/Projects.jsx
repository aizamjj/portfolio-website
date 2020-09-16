import React, { useContext, useEffect, useState } from 'react';
import PortfolioContext from '../context/context';
import Title from './Title';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container'
import { CardMedia, CardContent, Typography } from '@material-ui/core';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  return (
    <section id="projects">
        <Container>
          {projects.map((projects, index) => {
            const { name, url, description } = projects;
            return (
            <Card className="box">
                <CardMedia />
                <CardContent> 
                  <Typography variant="h5" component="h2" >{name}</Typography>
                  <Typography variant="body2" component="p" >{description}</Typography>
                </CardContent>
            </Card>
            )
          })}
        </Container>
    </section>
  )
}

export default Projects;