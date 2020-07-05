import React, { useContext } from 'react';
import Title from './Title';
import PortfolioContext from '../context/context';
import Grid from '@material-ui/core/Grid';

const Contact = () => {
    const { contact } = useContext(PortfolioContext);
    const { email } = contact;

    return (
        <section id="contact">
            <Title title="Contact" />
            <Grid item>
                <p>Would you like to work with me? Awesome!</p>
            </Grid>
            <Grid>
                <a>Let's talk!</a>
            </Grid>
        </section>
    )
}

export default Contact;