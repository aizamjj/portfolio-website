import React, { useContext } from 'react';
import PortfolioContext from '../context/context';
import Grid from '@material-ui/core/Grid';

const Side = () => {

    const { footer } = useContext(PortfolioContext);
    
    return (
        <aside>
            <Grid container spacing={3}>
              {footer && footer.map(footer => {
              const { id, name, url } = footer;
              return (
                  <Grid item key={id} href={url}>{name}</Grid>
              )
              })}
            </Grid>
        </aside>
    );
    };


export default Side;
