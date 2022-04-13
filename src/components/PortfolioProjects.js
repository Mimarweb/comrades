import React from 'react';
import Container from '@mui/material/Container';
import "./style.css";
import "./responsive.css";
import pro1 from '../Assets/projects/pro (1).jpg';
import pro2 from '../Assets/projects/pro (2).jpg';
import pro3 from '../Assets/projects/pro (3).jpg';
import pro4 from '../Assets/projects/pro (4).jpg';
import pro5 from '../Assets/projects/pro (5).jpg';
import pro6 from '../Assets/projects/pro (6).jpg';
import pro7 from '../Assets/projects/pro (7).jpg';
import pro8 from '../Assets/projects/pro (8).jpg';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';

 

const PortfolioProject = () =>{
    return(
       
        <>
        <Container maxWidth="lg" className='portfolio-pro'>
            <h1>Ongoing <span>Projects</span></h1>
            <Grid container spacing={2}>
                <Grid item sm={4} className="img-project">
                    <img src={pro7} alt='img' />
                </Grid>
                <Grid item sm={4} className="img-project">
                    <img src={pro2} alt='img' />
                </Grid>
                <Grid item sm={4} className="img-project">
                    <img src={pro3} alt='img' />
                </Grid>
                <Grid item sm={4} className="img-project">
                    <img src={pro4} alt='img' />
                </Grid>
                <Grid item sm={4} className="img-project">
                    <img src={pro5} alt='img' />
                </Grid>
                <Grid item sm={4} className="img-project">
                    <img src={pro6} alt='img' />
                </Grid>
                <Grid item sm={12} xs={12} className="btn-project">
                    <Button size="large" variant='outlined' color="primary">See More </Button>
                </Grid>
                
            </Grid>
        </Container>
            
        <div className="spacer"></div>
        
            <Container maxWidth="lg" className='portfolio-pro'>
            <h1>Completed <span>Projects</span></h1>
            <Grid container spacing={2}>
                <Grid item sm={4} className="img-project">
                    <img src={pro7} alt='img' />
                </Grid>
                <Grid item sm={4} className="img-project">
                    <img src={pro2} alt='img' />
                </Grid>
                <Grid item sm={4} className="img-project">
                    <img src={pro3} alt='img' />
                </Grid>
                <Grid item sm={4} className="img-project">
                    <img src={pro4} alt='img' />
                </Grid>
                <Grid item sm={4} className="img-project">
                    <img src={pro5} alt='img' />
                </Grid>
                <Grid item sm={4} className="img-project">
                    <img src={pro6} alt='img' />
                </Grid>
                <Grid item sm={12} xs={12} className="btn-project">
                    <Button size="large" variant='outlined' color="primary">See More </Button>
                </Grid>
                
            </Grid>
        </Container>

        </>
    );
}

export default PortfolioProject;