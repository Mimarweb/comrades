import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid } from "@material-ui/core";
import "./style.css";
import "./responsive.css";
import Badge1 from "../Assets/Badge1.png";
import Badge2 from "../Assets/Badge2.png";
import Badge3 from "../Assets/Badge3.png";


 

const Achievments = () =>{
    return(

        <React.Fragment>
            <CssBaseline/>
            <div className="ach">
            <Container maxWidth="lg">
                    <div className="inner-ach">
                        <h1><span>Achievements</span></h1>
                        <p>We pride ourselves on being one of the top builders in the real estate industry. Our success is based on the quality of our customer service, design, and development.</p>
                         <div className="ach-cards">
                             <Grid container spacing={3} justifyContent="center">
                                <Grid item sm={4}>
                                    <div className="ach-card">
                                        <div className="ach-card-img">
                                           <img src={Badge1} alt="" />
                                        </div>
                                        <p>Lahore Clients</p>
                                    </div>
                                </Grid>
                                <Grid item sm={4}>
                                    <div className="ach-card">
                                        <div className="ach-card-img">
                                        <img src={Badge2} alt="" />
                                        </div>
                                        <p>Bahria Clients</p>
                                    </div>
                                </Grid>
                                <Grid item sm={4}>
                                    <div className="ach-card">
                                        <div className="ach-card-img">
                                        <img src={Badge3} alt="" />
                                        </div>
                                        <p>Islamabad Clients</p>
                                    </div>
                                </Grid>
                                
                             </Grid>
                             
                         </div>
                    </div>  
            </Container>
            </div>

        </React.Fragment>
            

        
    );
}

export default Achievments;