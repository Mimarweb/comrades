
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import '../components/aboutpage.css';
import "./responsive.css";
import TextField from '@mui/material/TextField';




const ContactPage = () => {
    return(

        <React.Fragment>
        <CssBaseline/>
            <Grid container style={{padding: '0' , margin: '0',}}>
                <Grid item sm={12}  className='contact-header'>
                    <div className='about-title'>
                        <h2>Contact us</h2>
                    </div>
                </Grid>
            </Grid>
            <div className='spacer'></div>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item sm={12} justifyContent="center" >
                        <Grid item sm={12} xs={12}>
                            <h2>Contact us</h2>
                        </Grid>
                        <Grid item sm={12} container spacing={3}>
                            <Grid item sm={6} xs={12}>
                            <TextField
                                id="outlined-name"
                                label="Name"
                                
                                fullWidth
                                />
                            </Grid>
                            
                    
                            <Grid item sm={6} xs={12}>
                                <TextField
                                id="outlined-name"
                                label="Email"
                                size='large'
                                type="email"
                                fullWidth
                                />
                                </Grid>
                                <Grid item sm={12} xs={12}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Message"
                                    multiline
                                    rows={5}
                                    size='large'
                                    fullWidth
                                    variant="outlined"
                                    />
                                </Grid>
                        </Grid>
                        
                        <div className='spacer'></div>
                    </Grid>
                   
                </Grid>
            </Container>

            <Container maxWidth="lg">
                    <Grid item sm={12}>
                            <h2>Our Location</h2>
                    </Grid>
                    <Grid item sm={12}>
                        <div className='google-map-code'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.2622234091946!2d73.08647908374162!3d33.52056731541645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfed2334123c6d%3A0xcc0d07770326e9ed!2sComrades%20Associates!5e0!3m2!1sen!2s!4v1649411090246!5m2!1sen!2s" width="100%" height="600" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </Grid>
                
            </Container>

            <div className='spacer'></div>

       

            

         

            </React.Fragment>

            
    );
}

export default ContactPage;