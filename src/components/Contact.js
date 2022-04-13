import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import "./style.css";
import "./responsive.css";
import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/Styles"
import { Button } from "@material-ui/core";
import Logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const useStyles = makeStyles({
   
    input:{
        border: "1px solid #fff"
    }
    
  });

const Contact = () => {

    const classes = useStyles();
    return(
        
        <React.Fragment>
            <CssBaseline/>
            <div className='footer'>
                <Container maxWidth="lg">
                    <Grid container className='contact'>
                    <Grid item sm={5} container>
                        <div className="footer-l">
                            <Link to="/"><img src={Logo} alt="logo" className='footer-logo' /></Link>
                            <p>We are a team of professional Engineers associated with Engineering Consultancy. Our expertise includes Planning, Designing, and Construction Supervision of a number of diverse projects. Our engineers have worked on a variety of projects both in Pakistan and abroad.</p>
                        </div>
                    </Grid>
                    <Grid item sm={3}>
                        <div className='footer-m'>
                            <b>EXPLORE OUR SITE</b>
                                <div className='footer-links'>
                                    <Link to="/">< ChevronRightOutlinedIcon />Home</Link>
                                    <Link to="/about">< ChevronRightOutlinedIcon />About</Link>
                                    <Link to="/services">< ChevronRightOutlinedIcon />Services</Link>
                                    <Link to="/portfolio">< ChevronRightOutlinedIcon />Portfolio</Link>
                                    <Link to="/team">< ChevronRightOutlinedIcon />Team</Link>
                                    <Link to="/contact">< ChevronRightOutlinedIcon />Contact us</Link>
                                </div>
                            
                        </div>
                    </Grid>
                    <Grid container item sm={4} className='contact-form' spacing={1}>
                            <Grid item sm={12} xs={12}>
                                <b>Contact us now</b>
                            </Grid>
                            <Grid item sm={12} xs={12}>
                                <TextField
                                    id="standard-basic" 
                                    className={classes.input}
                                    label={'color="white"'}
                                    label="Full Name" 
                                    variant="outlined"
                                    type="text"
                                    size='small'
                                    fullWidth
                                    required
                                    
                                
                                />
                            </Grid>
                            <Grid item sm={12} xs={12}>
                                <TextField
                                    id="standard-basic" 
                                    label="Email"
                                    variant="outlined"
                                    size='small'
                                 
                                    className={classes.input}
                                    fullWidth 
                                    type="email"
                                    width="100%"
                                    required
                                
                                />
                            </Grid>
                            <Grid item sm={12} xs={12}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Message"
                                    multiline
                                    rows={4}
                                    className={classes.input}
                                    size='large'
                                    fullWidth
                                    variant="outlined"
                                    required
                                    />
                            </Grid>
                            <Grid item sm={12}>
                                <Button color="primary" variant='contained'>Submit</Button>
                            </Grid>
                    </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='footer-bottom'>
                <Grid container justifyContent='center' alignItems='center'>
                    <p>© 2022 Comrades Consultants. All Rights Reserved.</p>
                </Grid>
            </div>
            
        </React.Fragment>
    );
}

export default Contact;