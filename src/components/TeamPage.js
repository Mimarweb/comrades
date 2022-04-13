
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import '../components/aboutpage.css';
import "./responsive.css";
import service1 from "../Assets/CEO.jpg";
import service2 from "../Assets/executive.jpg";
import service3 from "../Assets/teams.jpg";
import avt1 from '../Assets/Team/avt (1).jpg';
import avt2 from '../Assets/Team/avt (2).jpg';
import avt3 from '../Assets/Team/avt (3).jpg';
import avt4 from '../Assets/Team/avt (4).jpg';
import avt5 from '../Assets/Team/avt (5).jpg';
import avt6 from '../Assets/Team/avt (6).jpg';
import avt7 from '../Assets/Team/avt (7).jpg';
import avt8 from '../Assets/Team/avt (8).jpg';


const TeamPage = () => {
    return(

        <React.Fragment>
        <CssBaseline/>
            <Grid container style={{padding: '0' , margin: '0',}}>
                <Grid item sm={12} className='team-header'>
                    <div className='about-title'>
                        <h2>Our Team</h2>
                    </div>
                </Grid>
            </Grid>
            <div className='spacer'></div>
            <Container maxWidth="lg">
                <Grid contaienr>
                    <Grid item sm={12} justifyContent="center" className='s-mb'>
                        <p className='about-desc'>With our real estate design, and development consulting services we offer proven, innovative processes and technology to help you reach your objectives - irrespective of your project's complexity or size. This approach helps us provide cost-effective solutions that are technical and economical while balancing quality, risk, and time.</p>
                        <div className='spacer'></div>
                    </Grid>
                   
                </Grid>
            </Container>

            <div className='spacer'></div>

            <Container maxWidth="lg">
            <Grid container spacing={3}>
                        <Grid item sm={12} container className='s-mb'>
                            <Grid item sm={4}>
                                    <div className="team-s">
                                        <div className="team-s-img">
                                            <img src={service1} alt="image" />
                                        </div>
                                        
                                    </div>
                            </Grid>
                            <Grid item sm={8}>
                                <div className='team-s'>
                                        <h2>CEO</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid item sm={12} container className='s-mb'>
                            <Grid item sm={8}>
                            <div className='team-s'>
                                    <h2>Executives</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                            </div>
                            </Grid>
                            <Grid item sm={4}>
                                    <div className="team-s">
                                        <div className="team-s-img">
                                            <img src={service2} alt="image" />
                                        </div>
                                        
                                    </div>
                            </Grid>
                        </Grid>
                        <Grid item sm={12} container className='s-mb'>
                            <Grid item sm={4}>
                                    <div className="team-s">
                                        <div className="team-s-img">
                                            <img src={service3} alt="image" />
                                        </div>
                                        
                                    </div>
                            </Grid>
                            <Grid item sm={8}>
                            <div className='team-s'>
                                    <h2>Teams</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                            </div>
                            </Grid>
                        </Grid>



                        <Grid item sm={12} container spacing={2}>
                            <Grid item sm={3} xs={6} className="img-project">
                                <img src={avt1} alt='img' />
                            </Grid>
                            <Grid item sm={3} xs={6} className="img-project">
                                <img src={avt2} alt='img' />
                            </Grid>
                            <Grid item sm={3} xs={6} className="img-project">
                                <img src={avt3} alt='img' />
                            </Grid>
                            <Grid item sm={3} xs={6} className="img-project">
                                <img src={avt4} alt='img' />
                            </Grid>
                            <Grid item sm={3} xs={6} className="img-project">
                                <img src={avt5} alt='img' />
                            </Grid>
                            <Grid item sm={3} xs={6} className="img-project">
                                <img src={avt6} alt='img' />
                            </Grid>
                            <Grid item sm={3} xs={6} className="img-project">
                                <img src={avt7} alt='img' />
                            </Grid>
                            <Grid item sm={3} xs={6} className="img-project">
                                <img src={avt8} alt='img' />
                            </Grid>
                            
                                    
                        </Grid>
                        
                        </Grid>
            </Container>

            

         

            </React.Fragment>

            
    );
}

export default TeamPage;