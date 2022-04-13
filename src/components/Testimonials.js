import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid } from "@material-ui/core";
import company from "../Assets/company.png";
import Item from "./Item";
import "./style.css";
import "./responsive.css";
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
  ];

const Testimonials = () =>{
    return(
        <React.Fragment>
            <CssBaseline/>
            <div className="testimonial">
                <Container maxWidth="lg">
                    <div className="testomonials-slider">
                        <Grid container spacing={3}>
                            <Grid item sm={12} xs={12}>
                                <Carousel breakPoints={breakPoints}>
                                    <Item>
                                        <div className="testimonial-card">
                                            <div className="testimonial-card-img">
                                            </div>
                                            <b>Hasham Rehmat</b>
                                            <p>"Sbcne incs dicbsdnoi nsdisk bsbs icbsdnci  u sdnc bsbs icbsdnci  sdncihwvbwn iuabsbcne incs dicbsdnoi nsdisk bsbs sdnc bsbs icbsdnci  u sdncihwvbwn iuabsbcne incs"</p>
                                        </div>
                                    </Item>
                                    <Item>
                                        <div className="testimonial-card">
                                            <div className="testimonial-card-img">
                                            </div>
                                            <p>Hasham Rehmat</p>
                                            <p>"Sbcne incs dicbsdnoi nsdisk bsbs icbsdnci  u sdnc bsbs icbsdnci  sdncihwvbwn iuabsbcne incs dicbsdnoi nsdisk bsbs bsbs icbsdnci  u sdncihwvbwn iuabsbcne incs"</p>
                                        </div>
                                    </Item>
                                </Carousel>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default Testimonials;