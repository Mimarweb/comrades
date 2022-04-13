import { Grid, Container } from "@material-ui/core";
import React from "react";
import "./headerslider.css";
import "./responsive.css";
import Typical from 'react-typical';
import Button from '@mui/material/Button';


const HomeSlider = () => {

    return(
            <div className="homeslider">
                <Container maxWidth="lg">
                    <Grid container spacing={3} className="header-slider">
                        
                        <Grid item sm={12}>
                            <div className="header-desc">
                                <div className="title">
                                    <Typical
                                    steps={['COMRADES',
                                            1000,
                                            'COMRADES CONSULTANT',500
                                        ]}
                                    loop={Infinity}
                                    wrapper="h1"
                                    />
                                </div>
                                <div className="desc-head">
                                    <p>We plan, design, and supervise based on three principles: innovation, safety, and economy.</p>
                                </div>
                                <div className="head-btn">
                                    <Button variant="outlined">Read More</Button>
                                </div>
                                
                            </div>
                        </Grid>
                        
                    </Grid>
                </Container>
            </div>      
);
}

export default HomeSlider;