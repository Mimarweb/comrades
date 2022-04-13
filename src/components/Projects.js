import React from "react";
import Container from '@mui/material/Container';
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./style.css";
import "./responsive.css";
import pro1 from '../Assets/projects/pro (1).jpg'
import pro2 from '../Assets/projects/pro (2).jpg'
import pro3 from '../Assets/projects/pro (3).jpg'
import pro4 from '../Assets/projects/pro (4).jpg'
import pro5 from '../Assets/projects/pro (5).jpg'
import pro6 from '../Assets/projects/pro (6).jpg'
import pro7 from '../Assets/projects/pro (7).jpg'
import pro8 from '../Assets/projects/pro (8).jpg'

 

const Projects = () =>{


    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ];


    return(

        <>
        <Container maxWidth="lg">
            <div className="projects">
                <div className="inner-projects">
                <h1>Ongoing <span>Projects</span></h1>
                    <p>With 1000+ clients and still counting, we are currently working on 500+ projects of different sizes.</p>
                </div>
            </div>
            
                <Carousel breakPoints={breakPoints}>
                    <Item className="pro-card">
                        <div className="pro-card-img">
                            <img src={pro2} alt="project" />
                        </div> 
                    
                    </Item>
                    <Item className="pro-card">
                        <div className="pro-card-img">
                            <img src={pro4} alt="project" />
                        </div>
                    
                    </Item>
                    <Item className="pro-card">
                        <div className="pro-card-img">
                            <img src={pro3} alt="project" />
                        </div>
                    
                    </Item>
                    <Item className="pro-card">
                        <div className="pro-card-img">
                        <img src={pro5} alt="project" />
                        </div>
                    
                    </Item>
                </Carousel>
            
        </Container>

        <div className="spacer"></div>

        <Container maxWidth="lg">
            <div className="projects">
                <div className="inner-projects">
                <h1>Completed <span>Projects</span></h1>
                    <p>We have completed over 1000 projects so far and are actively working on several different projects</p>
                </div>
            </div>
            
                <Carousel breakPoints={breakPoints}>
                    <Item className="pro-card">
                        <div className="pro-card-img">
                        <img src={pro6} alt="project" />
                        </div>
                    
                    </Item>
                    <Item className="pro-card">
                        <div className="pro-card-img">
                        <img src={pro7} alt="project" />
                        </div>
                    
                    </Item>
                    <Item className="pro-card">
                        <div className="pro-card-img">
                        <img src={pro8} alt="project" />
                        </div>
                    
                    </Item>
                    <Item className="pro-card">
                        <div className="pro-card-img">
                        <img src={pro1} alt="project" />
                        </div>
                    
                    </Item>
                </Carousel>
           
        </Container>
        </>

        // <React.Fragment>
        //     <CssBaseline/>
        //     <Container maxWidth="lg">
        //         <div className="projects">
        //             <div className="inner-projects">
        //                 <h1>Completed <span>Projects</span></h1>
        //                 <p>Sbcne incs dicbsdnoi nsdisk bsbs icbsdnci  u sdnc bsbs icbsdnci  sdncihwvbwn iuabsbcne incs dicbsdnoi nsdisk bsbs sdnc <br/>
        //                  bsbs icbsdnci  u sdncihwvbwn iuabsbcne incs</p>
        //                  <div className="service-cards">
        //                      <Grid container spacing={3}>
        //                         <Grid item sm={4}>
        //                             <div className="pro-card">
        //                                 <div className="pro-card-img">
                                           
        //                                 </div>
        //                                 <p>Project 1</p>
        //                             </div>
        //                         </Grid>
        //                         <Grid item sm={4}>
        //                             <div className="pro-card">
        //                                 <div className="pro-card-img">
                                           
        //                                 </div>
        //                                 <p>Project 2</p>
        //                             </div>
        //                         </Grid>
        //                         <Grid item sm={4}>
        //                             <div className="pro-card">
        //                                 <div className="pro-card-img">
                                           
        //                                 </div>
        //                                 <p>Project 3</p>
        //                             </div>
        //                         </Grid>
                                
        //                      </Grid>
                             
        //                  </div>
        //             </div>  
        //         </div>
                
        //     </Container>

        //     <Container maxWidth="lg">
        //         <div className="projects">
        //             <div className="inner-projects">
        //                 <h1>Ongoing <span>Projects</span></h1>
        //                 <p>Sbcne incs dicbsdnoi nsdisk bsbs icbsdnci  u sdnc bsbs icbsdnci  sdncihwvbwn iuabsbcne incs dicbsdnoi nsdisk bsbs sdnc <br/>
        //                  bsbs icbsdnci  u sdncihwvbwn iuabsbcne incs</p>
        //                  <div className="service-cards">
        //                      <Grid container spacing={3}>
        //                         <Grid item sm={4}>
        //                             <div className="pro-card">
        //                                 <div className="pro-card-img">
                                           
        //                                 </div>
        //                                 <p>Project 1</p>
        //                             </div>
        //                         </Grid>
        //                         <Grid item sm={4}>
        //                             <div className="pro-card">
        //                                 <div className="pro-card-img">
                                           
        //                                 </div>
        //                                 <p>Project 2</p>
        //                             </div>
        //                         </Grid>
        //                         <Grid item sm={4}>
        //                             <div className="pro-card">
        //                                 <div className="pro-card-img">
                                           
        //                                 </div>
        //                                 <p>Project 3</p>
        //                             </div>
        //                         </Grid>
                                
        //                      </Grid>
                             
        //                  </div>
        //             </div>  
        //         </div>
                
        //     </Container>
        // </React.Fragment>
            

        
    );
}

export default Projects;