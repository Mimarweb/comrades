import React from 'react'
import { Grid, Container } from '@material-ui/core';
import { Link } from "react-router-dom";
import '../components/style.css';


const MobileNav = () => {
    return(

        <Container maxWidth="lg">
            <Grid container justifyContent="center">
                <Grid item sm={12}>
                    <div className='mobileMenu'>
                        <Link to="/">Home</Link>
                        <Link to="/about">About us</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/teams">Team</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </Grid>
            </Grid>
        </Container>
        
    )   
}

export default MobileNav;