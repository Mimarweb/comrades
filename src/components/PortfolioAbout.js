import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import "./style.css";
import "./responsive.css";
import { Grid } from "@material-ui/core";
import img1 from "../Assets/about1.jpg";
import Button from '@mui/material/Button';

const HomeAbout = () => {
    return(
        
        <React.Fragment>
            <CssBaseline/>
            <div className="spacer"></div>
            <Container maxWidth="lg">
                <Grid Container className='about'>
                    <Grid item sm={8} className='portfolio-home'>
                     
                        <h1>See Our Best Work  </h1>
                        <p>We are a team of professional Engineers associated with Engineering Consultancy. Our expertise includes Planning, Designing, and Construction Supervision of a number of diverse projects. Our engineers have worked on a variety of projects both in Pakistan and abroad.</p>
                        <p>We are a team of professional Engineers associated with Engineering Consultancy. Our expertise includes Planning, Designing, and Construction Supervision of a number of diverse projects. Our engineers have worked on a variety of projects both in Pakistan and abroad.</p>

                        <div className="about-btn">
                           
                        </div>
                    </Grid>
                    <Grid item sm={4} xs={12} className="portfolio-img">
                        <img src={img1} alt="" />
                    </Grid>
                </Grid>
            </Container>
            <div className="spacer"></div>
        </React.Fragment>
    );
}

export default HomeAbout;