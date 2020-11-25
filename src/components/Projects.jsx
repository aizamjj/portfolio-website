import React, { useContext } from "react";
import PortfolioContext from "../context/context";
import Title from "./Title";
import { 
  Grid, 
  Card, 
  Container,
  CardMedia, CardContent, Typography
} from "@material-ui/core";

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  return (
    <section id="projects">
      <Grid container alignContent="space-around">
        {projects.map((projects, index) => {
          const { name, url, description } = projects;
          return (
            <Card className="box">
              <CardMedia />
              <CardContent>
                <h1>
                  {name}
                </h1>
                <p>
                  {description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </Grid>
    </section>
  );
};

export default Projects;
