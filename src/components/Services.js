import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid } from "@material-ui/core";
import "./style.css";
import "./responsive.css";
import service1 from "../Assets/service1.jpg";
import service2 from "../Assets/service2.jpg";
import service3 from "../Assets/service3.jpg";
import service4 from "../Assets/service4.jpg";
 

const Services = () =>{
    return(

        <React.Fragment>
            <CssBaseline/>
            <div className="services">
            <Container maxWidth="lg">
               
                    <div className="inner-services">
                        <h1>Our <span>Services</span></h1>
                        <p>Our services are based upon three principles: Innovation, Safety, and Economy. Planning, Design, and <br />Supervision are all influenced by the three principles.</p>
                         <div className="service-cards">
                             <Grid container spacing={3}>
                                <Grid item sm={3}>
                                    <div className="card">
                                        <div className="card-img">
                                            <img src={service1}></img>
                                        </div>
                                        <p>Arhitectures</p>
                                    </div>
                                </Grid>
                                <Grid item sm={3}>
                                    <div className="card">
                                        <div className="card-img">
                                        <img src={service2}></img>
                                        </div>
                                        <p>Consultants</p>
                                    </div>
                                </Grid>
                                <Grid item sm={3}>
                                    <div className="card">
                                        <div className="card-img">
                                        <img src={service3}></img>
                                        </div>
                                        <p>GIS</p>
                                    </div>
                                </Grid>
                                <Grid item sm={3}>
                                    <div className="card">
                                        <div className="card-img">
                                        <img src={service4}></img>
                                        </div>
                                        <p>Developers</p>
                                    </div>
                                </Grid>
                             </Grid>
                             
                         </div>
                    </div>  
                
                <div className="serviec-consultant-btn">
                    <h2>Free Consultancy</h2>
                </div>
            </Container>
            </div>
        </React.Fragment>
            

        
    );
}

export default Services;