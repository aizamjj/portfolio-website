import React, { useContext } from "react";
import PortfolioContext from "../context/context";
import Title from "./Title";
import { 
  Grid, 
  Card, 
  Container,
  CardContent, 
  Typography,
  CardHeader
} from "@material-ui/core";

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  return (
    <Grid id="projects" container alignContent="space-around">
      { 
        projects.map(({ name, url, description }) => {
          return (
              <Card classes="project-card">
                  {name}        
                  {description}
              </Card>
          );
        })
      }
    </Grid>
  );
};

export default Projects;
