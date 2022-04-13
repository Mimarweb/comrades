
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import '../components/aboutpage.css';
import "./responsive.css";
import service1 from "../Assets/about1.jpg";
import service2 from "../Assets/about2.jpg";
import service3 from "../Assets/about3.jpg";
import service4 from "../Assets/about4.jpg";
import all from "../Assets/whoarewe.jpg";


const About = () => {
    return(

        <React.Fragment>
        <CssBaseline/>
            <Grid container style={{padding: '0' , margin: '0',}}>
                <Grid item sm={12} className='about-header'>
                    <div className='about-title'>
                        <h2>About Us</h2>
                    </div>
                </Grid>
            </Grid>
            <div className='spacer'></div>
            <Container maxWidth="lg">
                <Grid contaienr>
                    <Grid item sm={12} justifyContent="center">
                        <p className='about-desc'>Comrades Planning and Design Consultants (Private) Limited is a group of experienced Engineers in the field of Engineering Consultancy and have successfully taken on a number of projects involving the Planning, Designing, and Construction Supervision of projects of diverse nature. Engineers working for the firm have extensive experience in working in Pakistan and abroad, on many types of projects. As an engineering company, we are quality conscious about our work and can handle projects of any size and scope according to standard engineering practices and techniques.</p>
                    </Grid>
                </Grid>
            </Container>

            <div className='spacer'></div>

            <Container maxWidth="lg">
            <Grid container spacing={3}>
                                <Grid item sm={3} xs={12} justifyContent="center" alignItems='center'>
                                    <div className="card">
                                        <div className="card-img">
                                            <img src={service1} alt="" />
                                        </div>
                                        <p>Consultants</p>
                                    </div>
                                </Grid>
                                <Grid item sm={3} xs={12}>
                                    <div className="card">
                                        <div className="card-img">
                                            <img src={service2} alt="" />
                                        </div>
                                        <p>Consultants</p>
                                    </div>
                                </Grid>
                                <Grid item sm={3} xs={12}>
                                    <div className="card">
                                        <div className="card-img">
                                        <img src={service3} alt="" />
                                        </div>
                                        <p>Consultants</p>
                                    </div>
                                </Grid>
                                <Grid item sm={3} xs={12}>
                                    <div className="card">
                                        <div className="card-img">
                                        <img src={service4} alt="" />
                                        </div>
                                        <p>Consultants</p>
                                    </div>
                                </Grid>
                             </Grid>
            </Container>

            

            <div className='spacer'></div>

            <Container maxWidth="lg">
            <Grid container spacing={3}>
                                <Grid item sm={12} justifyContent="center" alignItems='center'>
                                    <h1 className='center spacing'>WHO ARE WE</h1>
                                    <p className='about-desc'>We are a team of highly qualified professionals with extensive knowledge and experience in architecture, engineering, urban planning, and regional planning. There are experienced and qualified engineers in the company, as well as highly capable field surveyors and inspectors who are well-versed in the latest developments and are fully equipped with modern instruments to conduct the surveys. In addition, the firm also possesses the latest computer technology, which allows us to achieve high levels of precision in data analysis, calculation, and drawing preparation.</p>
                                </Grid>
                                <Grid item sm={12}>
                                    <div className='img-abt'>
                                        <img src={all} alt="picture" />
                                    </div>
                                        
                                   
                                </Grid>
                               
                             </Grid>
            </Container>

            </React.Fragment>

            
    );
}

export default About;