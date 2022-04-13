
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
import all from "../Assets/whoarewe.jpg";


const ServicesPage = () => {
    return(

        <React.Fragment>
        <CssBaseline/>
            <Grid container style={{padding: '0' , margin: '0',}}>
                <Grid item sm={12} className='service-header'>
                    <div className='about-title'>
                        <h2>Our Services</h2>
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
                            <Grid item sm={6}>
                                    <div className="card-s">
                                        <div className="card-s-img">
                                            <img src={service1} alt="image" />
                                        </div>
                                        
                                    </div>
                            </Grid>
                            <Grid item sm={6}>
                            <div className='left-s'>
                                    <h2>Architecture</h2>
                                    <p>The interior/exterior designers and architects on our team are united in providing you with the right service at a reasonable price. As an architecture design company, we strive to improve people's quality of life by offering innovative residential and commercial architecture design solutions.</p>
                            </div>
                            </Grid>
                        </Grid>
                        <Grid item sm={12} container className='s-mb'>
                            <Grid item sm={6}>
                            <div className='left-s'>
                                    <h2>Consultants</h2>
                                    <p>The Comrades Planning and Design Consultants (Private) Limited offers all kinds of real estate services, including brokerage and consulting. Realty consultants and realtors have very different roles in the property market, even if their duties and responsibilities overlap sometimes. We are here to help you find the right option.</p>
                            </div>
                            </Grid>
                            <Grid item sm={6}>
                                    <div className="card-s">
                                        <div className="card-s-img">
                                            <img src={service2} alt="image" />
                                        </div>
                                        
                                    </div>
                            </Grid>
                        </Grid>
                        <Grid item sm={12} container className='s-mb'>
                            <Grid item sm={6}>
                                    <div className="card-s">
                                        <div className="card-s-img">
                                            <img src={service3} alt="image" />
                                        </div>
                                        
                                    </div>
                            </Grid>
                            <Grid item sm={6}>
                            <div className='left-s'>
                                    <h2>GIS</h2>
                                    <p>Comrades team provides clients with custom and commonly used interactive maps that assist them in gathering, sorting, and interpreting spatial and geographic data. With GIS mapping solutions and software development, our engineers help identify geographical patterns and develop accurate positioning.</p>
                            </div>
                            </Grid>
                        </Grid>
                        <Grid item sm={12} container className='s-mb'>
                            <Grid item sm={6}>
                                <div className='left-s'>
                                    <h2>Developers</h2>
                                    <p>Comrades Planning and Design Consultants (Private) Limited is one of the most trusted builders & realtors in Islamabad, providing services in all sectors of real estate & construction. We also offer clients market assessments for profitable investment opportunities. We have earned the reputation of authorized & trusted builders in Islamabad based on our numerous contributions.</p>
                                </div>
                            </Grid>
                            <Grid item sm={6}>
                                    <div className="card-s">
                                        <div className="card-s-img">
                                            <img src={service4} alt="image" />
                                        </div>
                                        
                                    </div>
                            </Grid>
                        </Grid>
                             </Grid>
            </Container>

            

         

            </React.Fragment>

            
    );
}

export default ServicesPage;