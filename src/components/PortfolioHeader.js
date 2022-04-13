
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import '../components/aboutpage.css';
import "./responsive.css";
import service1 from "../Assets/service1.jpg";
import service2 from "../Assets/service2.jpg";
import service3 from "../Assets/service3.jpg";
import service4 from "../Assets/service4.jpg";



const PortfolioPage = () => {
    return(

        <React.Fragment>
        <CssBaseline/>
            <Grid container style={{padding: '0' , margin: '0',}}>
                <Grid item sm={12} className='portfolio-header'>
                    <div className='about-title'>
                        <h2>Our Portfoio</h2>
                    </div>
                </Grid>
            </Grid>
            </React.Fragment>

            
    );
}

export default PortfolioPage;